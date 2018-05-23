const {Builder, By, Key, until} = require('selenium-webdriver');
const fs = require('fs');
const creds = require('./creds.json');

let screenshotNumber = 0;

async function writeScreenshot(data, name) {
  name = name || 'ss.png';
  var screenshotPath = './screenshots/';
  fs.writeFileSync(screenshotPath + name, data, 'base64');
};

async function takeScreenshot(driver) {
  const data = await driver.takeScreenshot();
  await writeScreenshot(data, 'ss' + (screenshotNumber++) + '.png');
}


(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    console.log('driver execution begun');
    await driver.get('https://console.dialogflow.com/api-client/#/login');
    await takeScreenshot(driver);
    await driver.wait(until.elementIsVisible(driver.findElement(By.className('md-btn-login-text-wrapper'))), 5000);
    await takeScreenshot(driver);
    await driver.findElement(By.className('md-btn-login-text-wrapper')).click();
    await driver.wait(until.titleIs('Sign in - Google Accounts'), 5000);
    await takeScreenshot(driver);
    await driver.findElement(By.id("identifierId")).sendKeys(creds.google.username)
    await takeScreenshot(driver);
    await driver.findElement(By.id("identifierNext")).click()
    await takeScreenshot(driver);
    await driver.findElement(By.name("password")).sendKeys(creds.google.password)
    await takeScreenshot(driver);
    await driver.findElement(By.id("passwordNext")).click()
    await takeScreenshot(driver);
    await driver.wait(until.titleIs('Dialogflow'), 5000);
    await takeScreenshot(driver);
    await driver.get('https://console.dialogflow.com/api-client/#/newAgent');
    await driver.wait(until.elementIsVisible(
      driver.findElement(By.id('multi-button'))
    ), 5000);
    await driver.findElement(By.id('entity-name')).sendKeys('my_agent');
    await takeScreenshot(driver);
  } catch (error) {
    console.log('error: ', error); 
  } finally {
    console.log('driver execution ended');
    console.log(screenshotNumber + ' screenshots taken');
    await driver.quit();
  }
})();
