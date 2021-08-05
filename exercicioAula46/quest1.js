const fs = require("fs")
const fsPromises = require("fs/promises");
const path = require("path");

    
    (async () => {
        try {
            const data = await fsPromises.readFile(path.resolve(__dirname, "teste.txt"));
            const A = data.split(EOL)
            console.log(A.toString("utf-8"))
        } catch (err) {
            console.log(err.message);
        }
    })();
