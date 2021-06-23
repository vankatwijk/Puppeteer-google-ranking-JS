const puppeteer = require('puppeteer');
const $ = require('cheerio');
const CronJob = require('cron').CronJob;
const nodemailer = require('nodemailer');

const url = 'https://www.amazon.de/-/en/Nintendo-Switch-Console-gray/dp/B07W13KJZC/ref=sr_1_2?crid=34U1V2D2DAQ7I&dchild=1&keywords=nintendo+switch&qid=1623762299&sprefix=nintendo%2Caps%2C210&sr=8-2';



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
    let page = await configureBrowser();
    await checkPrice(page);
}

monitor();