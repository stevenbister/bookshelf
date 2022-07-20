import puppeteer from 'puppeteer';

/**
 * Initialise a headless puppeteer browser instance
 *
 * @returns {Object} The browser object
 */
async function startBrowser() {
  let browser;
  try {
    console.log('Opening the browser...');
    browser = await puppeteer.launch({
      headless: true,
      args: ['--disable-setuid-sandbox'],
      ignoreHTTPSErrors: true,
    });
  } catch (err) {
    console.error('Could not create a browser instance => : ', err);
  }

  return browser;
}

/**
 * Scrape a url within the browser instance
 *
 * @param {Object} browserInstance The browser instance object
 * @param {String} url The URL to scrape
 * @returns {Promise} A promise containing the scradped data
 */
async function scrapeUrl(browserInstance, url) {
  let browser;
  try {
    browser = await browserInstance;

    return await scraper(browser, url);
  } catch (err) {
    console.error('Could not resolve the browser instance => ', err);
  } finally {
    await browser.close();
  }
}

/**
 * Collects the content of the DOM nodes and pushes them into an object
 *
 * @param {Object} browser The browser instance object
 * @param {String} url The URL to scrape
 * @returns {Object} An Object of the scraped nodes
 */
async function scraper(browser, url) {
  let page = await browser.newPage();

  console.log(`Navigating to ${url}...`);
  await page.goto(url);
  // Reload the page to get around any weird issues with initial load
  await page.reload({ waitUntil: ['networkidle0', 'domcontentloaded'] });

  // Wait for the required DOM to be rendered
  await page.waitForSelector('#item-page-wrapper');

  // Scroll page to activate js lazyloading so we can pick up all of our books
  console.log('Scraping page...');
  await autoScroll(page);

  // Get the link to all the required books
  let books = await page.$$eval('li[data-itemid]', (nodes) =>
    nodes.map((node) => {
      const item = node.querySelector('[id*="itemName_"]');
      const author = node.querySelector('[id*="item-byline-"]').innerText;
      const cover = node.querySelector('[id*="itemImage_"] img').src;

      return {
        id: item.id,
        title: item.innerText,
        link: item.href,
        author,
        cover,
      };
    }),
  );

  console.log('Complete');
  return { books };
}

// Scroll to the bottom of the page
async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve, reject) => {
      var totalHeight = 0;
      var distance = 100;
      var timer = setInterval(() => {
        var scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight - window.innerHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });
}

export { startBrowser, scrapeUrl, scraper };
