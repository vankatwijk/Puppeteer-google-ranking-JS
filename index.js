const puppeteer = require('puppeteer');
const $ = require('cheerio');
const CronJob = require('cron').CronJob;
const nodemailer = require('nodemailer');

const url = 'https://www.amazon.de/-/en/Nintendo-Switch-Console-gray/dp/B07W13KJZC/ref=sr_1_2?crid=34U1V2D2DAQ7I&dchild=1&keywords=nintendo+switch&qid=1623762299&sprefix=nintendo%2Caps%2C210&sr=8-2';


async function configureBrowser() {

    const browser = await puppeteer.launch()
    const page = await puppeteer.newPage();
    await page.goto(url);
    return page;
}

async function checkPrice() {


}