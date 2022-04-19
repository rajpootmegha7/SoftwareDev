const {Builder, By} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

// Add path from installed 
const service = new chrome.ServiceBuilder(''); // Add chromewebdriver local path
const driver = new Builder().forBrowser('chrome').setChromeService(service).build();

// Test to see if search does not appear when logged in (should return an error)
driver.navigate().to("http://localhost:3000/search")
.then(() => driver.findElement(By.className('dashboard_container')).isDisplayed())
.then(value => console.log("Search displays (should be false):", value))
.then(() => driver.close()); 