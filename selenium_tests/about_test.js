const {Builder, By} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

// Add path from installed 
const service = new chrome.ServiceBuilder(''); // Add chromewebdriver local path
const driver = new Builder().forBrowser('chrome').setChromeService(service).build();

// Make sure About Us loads correctly when going to it 
driver.navigate().to("http://localhost:3000/about")
.then(() => driver.findElement(By.className('about_us_container')).isDisplayed())
.then(value => console.log("About Us displays:", value))
.then(() => driver.close()); 