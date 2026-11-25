/** Motions V2 — GSAP + prefers-reduced-motion via matchMedia. */

export async function initMotion(): Promise<void> {
  if (typeof window === 'undefined') return;

  const heroNodes = document.querySelectorAll<HTMLElement>('[data-hero-title]');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  requestAnimationFrame(() => {
    heroNodes.forEach((el, i) => {
      window.setTimeout(() => el.classList.add('is-in'), reduce ? 0 : i * 100);
    });
  });

  const reveals = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (reduce) {
    reveals.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  try {
    const gsapMod = await import('gsap');
    const stMod = await import('gsap/ScrollTrigger');
    const gsap = gsapMod.default;
    const { ScrollTrigger } = stMod;
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add(
      {
        reduceMotion: '(prefers-reduced-motion: reduce)',
        motionOk: '(prefers-reduced-motion: no-preference)',
      },
      (context) => {
        const { reduceMotion, motionOk } = context.conditions as {
          reduceMotion: boolean;
          motionOk: boolean;
        };

        if (reduceMotion) {
          reveals.forEach((el) => el.classList.add('is-revealed'));
          return;
        }

        if (motionOk) {
          reveals.forEach((el) => {
            gsap.fromTo(
              el,
              { opacity: 0, y: 28 },
              {
                opacity: 1,
                y: 0,
                duration: 0.9,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: el,
                  start: 'top 88%',
                  once: true,
                },
                onComplete: () => el.classList.add('is-revealed'),
              },
            );
          });

          const mediaRoot = document.querySelector<HTMLElement>('[data-hero-media]');
          const mediaImgs = mediaRoot?.querySelectorAll<HTMLElement>('.hero-slide, img');
          mediaImgs?.forEach((media) => {
            gsap.to(media, {
              scale: 1.06,
              ease: 'none',
              scrollTrigger: {
                trigger: mediaRoot?.closest('section') ?? media,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
              },
            });
          });

          const spray = document.querySelector<HTMLElement>('[data-hero-spray]');
          if (spray) {
            gsap.to(spray, {
              x: 24,
              y: -12,
              rotation: 4,
              ease: 'none',
              scrollTrigger: {
                trigger: spray.closest('section'),
                start: 'top top',
                end: 'bottom top',
                scrub: true,
              },
            });
          }
        }
      },
    );
  } catch {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).classList.add('is-revealed');
          io.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );
    reveals.forEach((el) => io.observe(el));
  }
}
