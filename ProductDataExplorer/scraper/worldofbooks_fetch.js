/**
 * Minimal Playwright fetcher example (no Crawlee required).
 * Run with: node worldofbooks_fetch.js
 * Respect robots.txt and rate limits before running.
 */
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.worldofbooks.com/', { waitUntil: 'domcontentloaded' });
  const nav = await page.$$eval('nav a', nodes => nodes.slice(0,20).map(n => ({ title: n.textContent.trim(), href: n.href })));
  console.log('Navigation sample:', nav);
  await browser.close();
})();
