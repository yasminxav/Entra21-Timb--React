const fs = require("fs")
const fsPromises = require("fs/promises");
const path = require("path");
const chalk = require('chalk');
    console.log(chalk.blue('helo'))
    (async () => {
        try {
            const data = await fsPromises.readFile(path.resolve(__dirname, "teste.txt"));
            console.log(A.toString("utf-8"))
        }

        