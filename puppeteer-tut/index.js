const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  /*
  await page.goto("https://machadopedro.com/");
  await page.screenshot({ path: "mywebsite.png" });

  const grabParagraph = await page.evaluate(() => {
    // const pgTag = document.querySelector(".col-lg-6.intro-content p");
    const tecTag = document.querySelectorAll(".row.back-end ul li");
    let technologies = [];
    tecTag.forEach((tag) => {
      technologies.push(tag.innerText);
    })
    return technologies;
  });
  console.log(grabParagraph);
  */

  /*
  const grapQuotes = await page.evaluate(() => {
    const quotes = document.querySelectorAll('.quote');
    let quotesArr = [];
    quotes.forEach((quoteTag) => {
      const quoteInfo = quoteTag.querySelectorAll('span');
      const actualQuote = quoteInfo[0];
      const actualAuthor = quoteInfo[1];

      const authorName = actualAuthor.querySelector('small');

      quotesArr.push({ quotes: actualQuote.innerText, author: actualAuthor.innerText });
    })
  });
  */

  await page.goto("https://quotes.toscrape.com/");

  await page.click('a[href="/login"]');
  await page.type('#username', 'PedroTech', { delay: 100 });
  await page.type('#password', 'Password123', { delay: 100 });

  await page.click('input[value="Login"]');
  await browser.close();
})();
