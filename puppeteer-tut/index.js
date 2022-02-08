const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.naver.com/");
  // await page.screenshot({ path: "mywebsite.png" });

  const grapParagraph = await page.evaluate(() => {
    const pgTag = document.querySelector(".title_area > .title");
    return pgTag.innerText;
  });

  console.log(grapParagraph);
  await browser.close();
})();