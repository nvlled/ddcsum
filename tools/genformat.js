
Promise = require("bluebird");
const fs = Promise.promisifyAll(require("fs"));
const process = require("process");

async function writeJson(summary) {
    let json = JSON.stringify(summary, null, 4);
    await fs.writeFileAsync("ddcsum.json", json);
}

function writeSqlite(summary) {
    // TODO:
}

async function main() {
    let filename = process.argv.slice(2)[0] || "db.txt";

    let lines = [];
    try {
        let contents = await fs.readFileAsync(filename, "utf-8");
        lines = contents.split(/\n+/);
    } catch (e) {
        console.error("unable to read file: " + filename);
        return;
    }

    let summary = [];
    for (let line of lines) {
        let [_, classNum, heading] = line.match(/^(\d+) (.*)$/) ||[];
        if (!classNum || !heading)
            continue;
        summary.push({
            classNum,
            heading,
        });
    }
    writeJson(summary);
}

main();
