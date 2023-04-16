const { Cluster } = require('puppeteer-cluster');
const path = require("path");
const fs = require("fs");

const linksObj = fs.readFileSync(path.join(__dirname, "links.txt"));
const links = linksObj.toString().split("\n");

if (!links.length) {
    throw new Error("No links found!");
}

const RARITY = {
    'Mil-Spec': "COMMON",
    'Restricted': "UNCOMMON",
    'Classified': "RARE",
    'Covert': "MYTHICAL",
    '★': "LEGENDARY",
}

const EURO_TO_PLN = 4.5;
const DEFAULT_ITEM_PRICE = 2000 * EURO_TO_PLN;
const DEFAULT_ITEM_IMAGEURL = "https://csgostash.com/img/misc/rare_item.png";
const DEFAULT_RARITY = "LEGENDARY"
const DEFAULT_CASE_PRICE = 25;

const cases = [];

async function scrape() {
    const cluster = await Cluster.launch({
        concurrency: Cluster.CONCURRENCY_CONTEXT,
        maxConcurrency: 10,
        monitor: true,
        puppeteerOptions: {
            headless: false,
            args: [`--window-size=${1680},${970}`],
        },
    });

    await cluster.task(async ({ page, data: url }) => {
        await page.goto(url);

        const caseInformatonHandle = await page.$("body > div.container.main-content > div:nth-child(3) > div");

        const caseName = await page.evaluate(el => el.querySelector("div > h1").textContent, caseInformatonHandle);
        const caseImageURL = await page.evaluate(el => el.querySelector("div > a > img").getAttribute("src"), caseInformatonHandle);

        const itemsHandles = await page.$$("body > div.container.main-content > div:nth-child(7) > div > div");

        const items = [];

        for (const itemHandle of itemsHandles) {

            try {
                let name = await page.evaluate(el => el.querySelector("h3").textContent, itemHandle);

                if (name.includes("Knives"))
                    name = "Knife"
                else if (name.includes("Gloves"))
                    name = "Gloves"

                if (!name) return;

                const imageURL = await page.evaluate(el => el.querySelector("a > .img-responsive").getAttribute("src"), itemHandle) || DEFAULT_ITEM_IMAGEURL;

                const rarity = await page.evaluate(el => el.querySelector(".quality").textContent.trimStart().trimEnd().split(" ")[0], itemHandle);
                const convertedRarity = RARITY[rarity] || DEFAULT_RARITY;

                items.push({
                    name,
                    imageURL,
                    rarity: convertedRarity,
                    price: DEFAULT_ITEM_PRICE
                })

                const price = (await page.evaluate(el => el.querySelector(".price > p > a").textContent, itemHandle));
                const convertedPrice = +(parseFloat(price.split(" ")[price.split(" ").length - 1].replaceAll(",", ".")) * EURO_TO_PLN).toFixed();

                for (const item of items) {
                    if (item.name === name) {
                        item.price = convertedPrice;
                    }
                }

            } catch (err) {
                //console.log(err);
            }

        }

        cases.push({
            name: caseName,
            imageURL: caseImageURL,
            price: DEFAULT_CASE_PRICE,
            items
        })
    });


    for (const link of links) {
        cluster.queue(link);
    }

    //cluster.queue(links[0]);

    await cluster.idle();
    await cluster.close();


    fs.writeFileSync('data.json', JSON.stringify(cases));

}

scrape()