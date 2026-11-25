import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

fs.mkdirSync('docs/qa-screenshots', { recursive: true });

const browser = await chromium.launch();
const results = [];
const pages = ['/', '/notre-histoire', '/carte', '/galerie', '/contact'];
const widths = [320, 768, 1440];

for (const route of pages) {
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push('console: ' + msg.text());
  });
  const res = await page.goto('http://127.0.0.1:4321' + route, { waitUntil: 'networkidle', timeout: 30000 });
  const status = res?.status() ?? 0;
  const title = await page.title();
  const h1 = await page.locator('h1').first().textContent().catch(() => null);
  const skip = await page.locator('a[href="#contenu"]').count();
  const broken = await page.evaluate(() =>
    [...document.images].filter((i) => !i.complete || i.naturalWidth === 0).map((i) => i.src)
  );
  results.push({ route, status, title, h1: h1?.trim(), skipLink: skip > 0, brokenImages: broken, errors });

  for (const w of widths) {
    await page.setViewportSize({ width: w, height: w === 320 ? 640 : 900 });
    const name = route === '/' ? 'home' : route.replace(/^\//, '').replace(/\//g, '-');
    await page.screenshot({
      path: path.join('docs/qa-screenshots', `${name}-${w}.png`),
      fullPage: false,
    });
  }
  await page.close();
}

const page = await browser.newPage();
await page.goto('http://127.0.0.1:4321/contact', { waitUntil: 'networkidle' });
results.push({
  form: (await page.locator('[data-contact-form]').count()) > 0,
  honestCopy: (await page.getByText(/demande/i).count()) > 0,
  noAutoConfirm: (await page.getByText(/confirmation automatique/i).count()) > 0,
});

await page.goto('http://127.0.0.1:4321/', { waitUntil: 'networkidle' });
const hrefs = await page.locator('header a[href]').evaluateAll((as) => [...new Set(as.map((a) => a.getAttribute('href')))]);
results.push({ navHrefs: hrefs });

await page.setViewportSize({ width: 390, height: 844 });
await page.click('[data-menu-toggle]');
await page.waitForTimeout(500);
const menuOpen = await page.locator('#mobile-nav:not([hidden])').count();
results.push({ mobileMenuOpens: menuOpen > 0 });
await page.screenshot({ path: 'docs/qa-screenshots/home-mobile-menu.png' });

fs.writeFileSync('docs/qa-raw.json', JSON.stringify(results, null, 2));
console.log(JSON.stringify(results, null, 2));
await browser.close();
