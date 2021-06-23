const puppeteer = require('puppeteer');
const $ = require('cheerio');
const CronJob = require('cron').CronJob;
const nodemailer = require('nodemailer');

const url = 'https://www.amazon.de/-/en/Nintendo-Switch-Console-gray/dp/B07W13KJZC/ref=sr_1_2?crid=34U1V2D2DAQ7I&dchild=1&keywords=nintendo+switch&qid=1623762299&sprefix=nintendo%2Caps%2C210&sr=8-2';


async function gsearch() {
    const browser = await puppeteer.launch({
        headless: false,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    await page.goto('https://google.com');

    await delay(Math.random() * 1000);
    await page.click('#L2AGLb');
    await delay(Math.random() * 1000);


    var array = ['gozolink'];
    var random = array[Math.floor(Math.random() * array.length)];
    // simple selector for search box
    await page.click('[name=q]');
    await page.keyboard.type("" + random);
    // you forgot this
    await page.keyboard.press('Enter');
    // wait for search results
    await page.waitForSelector('h3.LC20lb', { timeout: 10000 });
    await page.evaluate(() => {
        let elements = document.querySelectorAll('h3.LC20lb')
            // "for loop" will click all element not random
        let randomIndex = Math.floor(Math.random() * elements.length) + 1
        elements[randomIndex].click();
    })
}

function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time)
    });
}

async function configureBrowser() {

    const browser = await puppeteer.launch()
    const page = await browser.newPage();
    await page.goto(url);
    return page;
}

async function checkPrice(page) {

    await page.reload();
    let html = await page.evaluate(() => document.body.innerHTML)
    console.log(html);

}

async function monitor() {
    //let page = await configureBrowser();
    //await checkPrice(page);
    gsearch();
}

monitor();