const {Builder, By} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');


// Add path from installed 
const service = new chrome.ServiceBuilder(''); // Add chromewebdriver local path
const driver = new Builder().forBrowser('chrome').setChromeService(service).build();

// Search for plant and make sure it is successful

driver.navigate().to("http://localhost:3000/about")
.then(() => driver.executeScript("window.localStorage.setItem('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiMiIsImlhdCI6MTY0OTk5OTE4MCwiZXhwIjoxNjUwMDAyNzgwfQ.Bd7Ena_KmF_SY2wAualKXtBMQu4x90fthyMxJcbaxbk')"))
.then(() => driver.navigate().to("http://localhost:3000/search"))
.then(() => driver.findElement(By.className('p-inputtext p-component')).sendKeys('Christmas'))
.then(() => driver.findElement(By.className('p-button p-component p-button-warning p-button-icon-only')).click()) 
.then(() => driver.findElement(By.className('plant_name')).getText())
.then((value) => console.log('Search result:', value))
.then(() => driver.close()); 

