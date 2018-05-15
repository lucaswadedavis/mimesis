const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    console.log('driver execution begun');
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    console.log('driver execution complete');
    await driver.quit();
  }
})();

/*
var driver = new Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://www.google.com/ncr')
    .then(() => {
      console.log('driver engaged'); 
      driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    })
    .then(() => driver.wait(until.titleIs('webdriver - Google Search'), 1000))
    .then(() => driver.quit());
*/
