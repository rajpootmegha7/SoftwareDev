const {Builder, By} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

// Add path from installed 
const service = new chrome.ServiceBuilder(''); // Add chromewebdriver local path
const driver = new Builder().forBrowser('chrome').setChromeService(service).build();

// Test to see if user can log in 
driver.navigate().to("http://localhost:3000/login")
.then(() => driver.findElement(By.id('form_input')).sendKeys('test@email.com')) 
.then(() => driver.findElement(By.className('p-inputtext p-component p-password-input')).sendKeys('123456'))
.then(() => driver.findElement(By.className('p-button p-component p-button-outlined p-button-success')).click())
.then(() => driver.findElement(By.className('search_container')).isDisplayed())
.then((value) => console.log(value))
.then(() => driver.close()); 