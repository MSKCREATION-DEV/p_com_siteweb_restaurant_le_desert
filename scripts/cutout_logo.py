#!/usr/bin/env python3
"""Logo Le Désert V5 — emblème détouré + wordmark vectoriel rasterisé propre.

Le JPEG source est trop compressé pour un détourage « color-key » du lockup
complet (franges blanches inévitables). Stratégie V5 :

1. Extraire UNIQUEMENT l’emblème (arch), flood-fill agressif + trait brun forcé
2. Recréer le wordmark en typo système (Arial Black + script) sans fond blanc
3. Solidifier l’anti-aliasing (RGB = couleur marque, jamais vers le blanc)
4. Composer lockup PNG + previews QA sur #1A100C et crème

Usage : python3 scripts/cutout_logo.py
"""
from __future__ import annotations

import collections
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFont
from scipy import ndimage

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "logo_le_desert.jpg"
OUT = ROOT / "public/images/brand/logo-le-desert.png"
OUT_MARK = ROOT / "public/images/brand/logo-mark.png"
OUT_WORD = ROOT / "public/images/brand/logo-wordmark.png"
QA_DIR = ROOT / "docs/qa-screenshots-v5"

BROWN = np.array([68.0, 36.0, 28.0])
CHOCO = (61, 33, 23, 255)
RED = (166, 43, 31, 255)
SUN = (242, 145, 48, 255)


def preview(logo: Image.Image, bg: tuple[int, int, int], path: Path, size=(960, 540)) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    canvas = Image.new("RGBA", size, (*bg, 255))
    scale = min((size[0] * 0.85) / logo.width, (size[1] * 0.75) / logo.height)
    resized = logo.resize(
        (max(1, int(logo.width * scale)), max(1, int(logo.height * scale))),
        Image.Resampling.LANCZOS,
    )
    canvas.alpha_composite(
        resized, ((size[0] - resized.width) // 2, (size[1] - resized.height) // 2)
    )
    canvas.convert("RGB").save(path, quality=95)


def harden_aa(img: Image.Image) -> Image.Image:
    """Force semi-transparent AA pixels to solid brand RGB (no white bleed)."""
    fa = np.array(img).astype(np.float32)
    a = fa[:, :, 3]
    rgb = fa[:, :, :3]
    semi = (a > 0) & (a < 250)
    if not semi.any():
        return img
    # Map each semi pixel to nearest of brand solids
    brands = np.array(
        [
            [61, 33, 23],
            [166, 43, 31],
            [242, 145, 48],
            [68, 36, 28],
        ],
        dtype=np.float32,
    )
    flat = rgb[semi]
    d = ((flat[:, None, :] - brands[None, :, :]) ** 2).sum(axis=2)
    nearest = brands[d.argmin(axis=1)]
    rgb[semi] = nearest
    # Boost alpha so edges stay crisp on dark UI
    a[semi] = np.maximum(a[semi], 220)
    # Kill residual near-white
    pale = (a > 0) & (rgb.min(axis=2) > 200) & ((rgb.max(axis=2) - rgb.min(axis=2)) < 30)
    a[pale] = 0
    rgb[pale] = 0
    fa[:, :, :3] = rgb
    fa[:, :, 3] = a
    return Image.fromarray(fa.astype(np.uint8), "RGBA")


def extract_mark(src: Image.Image) -> Image.Image:
    up = src.resize((src.width * 4, src.height * 4), Image.Resampling.LANCZOS)
    arr = np.asarray(up).astype(np.float32)
    h, w = arr.shape[:2]
    r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
    chroma = np.maximum(np.maximum(r, g), b) - np.minimum(np.minimum(r, g), b)
    warm = (r > 160) & (g > 80) & (g < 210) & (b < 140) & (chroma > 40) & (r > g)
    col_warm = warm.sum(axis=0)
    right_start = int(w * 0.45)
    peak = np.where(col_warm[right_start:] > col_warm[right_start:].max() * 0.25)[0]
    x0 = right_start + int(peak[0]) - 20
    x0 = max(int(w * 0.52), min(x0, int(w * 0.62)))

    emblem = arr[:, x0:].copy()
    eh, ew = emblem.shape[:2]
    r, g, b = emblem[:, :, 0], emblem[:, :, 1], emblem[:, :, 2]
    mn = np.minimum(np.minimum(r, g), b)
    mx = np.maximum(np.maximum(r, g), b)
    chroma = mx - mn
    lum = 0.299 * r + 0.587 * g + 0.114 * b
    is_white = (mn > 195) & (chroma < 42)

    bg = np.zeros((eh, ew), dtype=bool)
    q: collections.deque[tuple[int, int]] = collections.deque()

    def seed(x: int, y: int) -> None:
        if (
            0 <= x < ew
            and 0 <= y < eh
            and not bg[y, x]
            and (is_white[y, x] or (lum[y, x] > 225 and chroma[y, x] < 60))
        ):
            bg[y, x] = True
            q.append((x, y))

    for x in range(ew):
        seed(x, 0)
        seed(x, eh - 1)
    for y in range(eh):
        seed(0, y)
        seed(ew - 1, y)
    while q:
        x, y = q.popleft()
        for nx, ny in ((x - 1, y), (x + 1, y), (x, y - 1), (x, y + 1)):
            if 0 <= nx < ew and 0 <= ny < eh and not bg[ny, nx]:
                if is_white[ny, nx] or ((mn[ny, nx] > 180) and (chroma[ny, nx] < 50)):
                    bg[ny, nx] = True
                    q.append((nx, ny))

    for _ in range(8):
        dil = ndimage.binary_dilation(bg, iterations=1)
        grow = dil & ~bg & ((lum > 160) | ((mn > 145) & (chroma < 58)))
        bg |= grow

    fg = ~bg
    lab, n = ndimage.label(fg)
    sizes = ndimage.sum(fg, lab, range(1, n + 1)) if n else []
    if len(sizes):
        bg = ~(lab == (int(np.argmax(sizes)) + 1))

    alpha = np.where(bg, 0.0, 255.0)
    af = np.maximum(alpha / 255.0, 1e-6)[..., None]
    rec = np.clip((emblem - 255.0 * (1.0 - af)) / af, 0, 255)
    rec[bg] = 0
    alpha[bg] = 0

    solid = alpha > 128
    solid = ndimage.binary_opening(solid, iterations=2)
    solid = ndimage.binary_closing(solid, iterations=2)
    alpha = np.where(solid, np.maximum(alpha, 200), 0.0)
    rec = np.where(solid[..., None], rec, 0)

    trans = alpha < 5
    dist = ndimage.distance_transform_edt(~trans)
    outer = (alpha > 0) & (dist <= 4.0)
    rec[outer] = BROWN
    alpha[outer] = 255

    rgba = np.dstack([rec.astype(np.uint8), alpha.astype(np.uint8)])
    im = Image.fromarray(rgba, "RGBA")
    bbox = im.split()[-1].getbbox()
    assert bbox
    pad = 6
    l, t, r0, b0 = bbox
    im = im.crop(
        (max(0, l - pad), max(0, t - pad), min(im.width, r0 + pad), min(im.height, b0 + pad))
    )
    mark_h = 360
    mark = im.resize(
        (max(1, int(im.width * (mark_h / im.height))), mark_h), Image.Resampling.LANCZOS
    )

    fa = np.array(mark).astype(np.float32)
    for _ in range(3):
        tr = fa[:, :, 3] < 10
        near = ndimage.binary_dilation(tr, iterations=2) & ~tr
        chroma_f = fa[:, :, :3].max(2) - fa[:, :, :3].min(2)
        bad = near & ((fa[:, :, :3].min(2) > 100) | (chroma_f < 28))
        fa[bad, 0] = BROWN[0]
        fa[bad, 1] = BROWN[1]
        fa[bad, 2] = BROWN[2]
        fa[bad, 3] = 255
    return Image.fromarray(fa.astype(np.uint8), "RGBA")


def load_fonts() -> tuple[ImageFont.FreeTypeFont | ImageFont.ImageFont, ...]:
    def try_font(paths: list[str], size: int):
        for p in paths:
            try:
                return ImageFont.truetype(p, size)
            except OSError:
                continue
        return ImageFont.load_default()

    base = "/System/Library/Fonts/Supplemental/"
    rest = try_font([base + "Arial Black.ttf", base + "Arial Bold.ttf"], 56)
    du = try_font(
        [base + "SnellRoundhand.ttc", base + "Apple Chancery.ttf", base + "Arial Bold.ttf"],
        40,
    )
    desert = try_font(
        [base + "SnellRoundhand.ttc", base + "Apple Chancery.ttf", base + "Arial Bold.ttf"],
        84,
    )
    return rest, du, desert


def render_wordmark(fonts: tuple) -> Image.Image:
    font_rest, font_du, font_desert = fonts
    canvas = Image.new("RGBA", (640, 320), (0, 0, 0, 0))
    draw = ImageDraw.Draw(canvas)
    wx, wy = 20, 36
    draw.text((wx, wy), "RESTAURANT", font=font_rest, fill=CHOCO)
    br = draw.textbbox((wx, wy), "RESTAURANT", font=font_rest)
    dy = br[3] - 6
    draw.text((wx + 10, dy), "du", font=font_du, fill=RED)
    bdu = draw.textbbox((wx + 10, dy), "du", font=font_du)
    # Swash ambre sous « du »
    draw.polygon(
        [
            (bdu[0] - 2, bdu[3] + 1),
            (bdu[2] + 10, bdu[3] - 3),
            (bdu[2] + 16, bdu[3] + 5),
            (bdu[0] + 2, bdu[3] + 9),
        ],
        fill=SUN,
    )
    draw.text((bdu[2] + 8, dy - 22), "Désert", font=font_desert, fill=RED)
    bbox = canvas.split()[-1].getbbox()
    assert bbox
    word = canvas.crop(bbox)
    return harden_aa(word)


def main() -> None:
    src = Image.open(SRC).convert("RGB")
    mark = extract_mark(src)
    fonts = load_fonts()
    word = render_wordmark(fonts)

    # Lockup
    gap = 28
    mh = 340
    mw = max(1, int(mark.width * (mh / mark.height)))
    mark_r = mark.resize((mw, mh), Image.Resampling.LANCZOS)
    wh = int(word.height * (min(1.0, (mh * 0.55) / word.height)))
    ww = max(1, int(word.width * (wh / word.height)))
    word_r = harden_aa(word.resize((ww, wh), Image.Resampling.LANCZOS))

    W = ww + gap + mw + 40
    H = max(mh, wh) + 40
    full = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    full.alpha_composite(word_r, (20, (H - wh) // 2 + 10))
    full.alpha_composite(mark_r, (20 + ww + gap, (H - mh) // 2))
    bb = full.split()[-1].getbbox()
    assert bb
    pad = 12
    full = full.crop(
        (max(0, bb[0] - pad), max(0, bb[1] - pad), min(W, bb[2] + pad), min(H, bb[3] + pad))
    )
    full = harden_aa(full)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    full.save(OUT, "PNG", optimize=True)
    mark.save(OUT_MARK, "PNG", optimize=True)
    word.save(OUT_WORD, "PNG", optimize=True)

    QA_DIR.mkdir(parents=True, exist_ok=True)
    preview(full, (26, 16, 12), QA_DIR / "logo-on-dark.png")
    preview(full, (247, 239, 227), QA_DIR / "logo-on-cream.png")
    pad = 28
    close = Image.new("RGBA", (full.width + pad * 2, full.height + pad * 2), (26, 16, 12, 255))
    close.alpha_composite(full, (pad, pad))
    close.resize((close.width * 2, close.height * 2), Image.Resampling.NEAREST).convert("RGB").save(
        QA_DIR / "logo-closeup-dark.png", quality=95
    )
    # Mark alone
    mc = Image.new("RGBA", (420, 480), (26, 16, 12, 255))
    sc = min(340 / mark.width, 400 / mark.height)
    m2 = mark.resize((int(mark.width * sc), int(mark.height * sc)), Image.Resampling.LANCZOS)
    mc.alpha_composite(m2, ((420 - m2.width) // 2, (480 - m2.height) // 2))
    mc.convert("RGB").save(QA_DIR / "logo-mark-on-dark.png", quality=95)

    fa = np.array(full)
    tr = fa[:, :, 3] < 10
    near = ndimage.binary_dilation(tr, iterations=2) & ~tr
    halo = near & (fa[:, :, :3].min(2) > 180) & ((fa[:, :, :3].max(2) - fa[:, :, :3].min(2)) < 45)
    print(f"OK {OUT} ({full.size}) halo_light_edge={int(halo.sum())}")
    print(f"OK {OUT_MARK} ({mark.size})")
    print(f"OK {OUT_WORD} ({word.size})")


if __name__ == "__main__":
    main()
