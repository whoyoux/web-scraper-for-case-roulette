const fs = require("fs");
const cases = require("./data.json");

const RARITY = {
    "COMMON": 70,
    "UNCOMMON": 14,
    "RARE": 8,
    "MYTHICAL": 6,
    "LEGENDARY": 2,
}

const processItemName = (itemName) => {
    return itemName.replaceAll('|', '').replaceAll(' ', '').replaceAll(/[^\w ]/g, "").toLowerCase();
}

const calculateDropRate = (caseObj) => {
    let total = 100;

    const specific = {
        "COMMON": 0,
        "UNCOMMON": 0,
        "RARE": 0,
        "MYTHICAL": 0,
        "LEGENDARY": 0,
    }

    const itemsWithDropRate = [];

    for (const item of caseObj.items) {
        const { rarity } = item;
        specific[rarity]++;

        itemsWithDropRate.push({
            name: item.name,
            rarity,
            dropRate: 0
        })
    }

    for (const [index, item] of itemsWithDropRate.entries()) {
        const temp = itemsWithDropRate[index].dropRate = +(RARITY[item.rarity] / specific[item.rarity]).toFixed();
        total -= temp;
    }

    itemsWithDropRate.sort((a, b) => b.dropRate - a.dropRate);

    if (total < 0) {
        for (let i = 0; i < Math.abs(total); i++) {
            itemsWithDropRate[itemsWithDropRate.length - 1 - i].dropRate -= 1;
        }
    }
    return itemsWithDropRate;
}

async function process() {
    let seed = ``;

    const allItems = cases.map(caseObj => caseObj.items).flat();
    const alreadyProcessed = [];

    allItems.forEach(item => {
        const label = processItemName(item.name);

        if (alreadyProcessed.includes(label)) {
            return;
        }

        alreadyProcessed.push(label);

        const seededItem = `const ${label} = await prisma.item.create({
            data: {
              name: "${item.name}",
              imageURL: "${item.imageURL}",
              rarity: "${item.rarity}",
              price: ${item.price}
            },
          });
          `

        seed += seededItem;
    })

    cases.forEach(caseObj => {
        const seededCase = `await prisma.case.create({
            data: {
                name: "${caseObj.name}",
                price: ${caseObj.price},
                imageURL: "${caseObj.imageURL}",
                items: {
                    create: [
                        ${caseObj.items.map(itemObj => {
            return `    {
                            dropRate: ${calculateDropRate(caseObj).find(item => item.name === itemObj.name).dropRate},
                            item: {
                                connect: {
                                    id: ${processItemName(itemObj.name)}.id
                                }
                            }
                        }`
        })}]
                }
            }
        })
        `

        seed += seededCase;
    })




    fs.writeFileSync('seed.js', seed);

}

process();