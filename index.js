const {Builder, By, Key, until} = require('selenium-webdriver');
const Recorder = require('wd-video');
const fs = require('fs');

function writeScreenshot(data, name) {
  name = name || 'ss.png';
  var screenshotPath = './';
  fs.writeFileSync(screenshotPath + name, data, 'base64');
};


(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  //const recorder = new Recorder(driver);
  try {
    console.log('driver execution begun');
    //recorder.start();
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    driver.takeScreenshot().then(function(data) {
      writeScreenshot(data, 'out1.png');
      console.log('driver execution complete');
    });

  } catch (error) {
    console.log('error: ', error); 
  } finally {
    await driver.quit();
    /*
    recorder.stop();
    recorder.save('/Users/lukedavis/Play/mimesis/movie.avi', (a, b, c) => {
      console.log('movie saved');
      console.log(a, b, c);
    });
    */
  }
})();
