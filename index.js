const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");

const linksObj = fs.readFileSync(path.join(__dirname, "links.txt"));
const links = linksObj.toString().split("\n");

async function scrape() {
    const browser = await puppeteer.launch({ headless: false });
    console.log("Init browser...");

    const page = await browser.newPage();
    console.log("Init page...")

    await page.goto(links[0]);

    await page.setViewport({ width: 1080, height: 1024 });

    const nameSelector = await page.waitForSelector('body > div.container.main-content > div:nth-child(3) > div > div.inline-middle.collapsed-top-margin > h1');
    const name = await nameSelector.evaluate(el => el.textContent);

    const itemsSelector = await page.waitForSelector("body > div.container.main-content > div:nth-child(7)");
    const items = await itemsSelector.evaluate(el => el.textContent);

    console.log(name);
    console.log(items);

    browser.close();
}

scrape();