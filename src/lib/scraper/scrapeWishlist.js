import { startBrowser, scrapeUrl } from './scrapePage';

const WISHLIST_URL = process.env.NEXT_PUBLIC_WISHLIST_URL;

let data;

// Return an error if the wishlist url isn't defined
if (!WISHLIST_URL) {
  const errorMsg = { error: 'No wishlist url defined' };
  console.error(errorMsg);

  data = errorMsg;
} else {
  //Start the browser and create a browser instance
  const browserInstance = startBrowser();
  // Pass the browser instance to the scraper controller
  data = scrapeUrl(browserInstance, WISHLIST_URL);
}

export default data;
