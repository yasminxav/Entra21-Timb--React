const fs = require("fs");
const fsPromises = require("fs/promises");
const path = require("path");
var name = "João"



async function getUserByName(name)  {
    const data = await fsPromises.readFile(path.resolve(__dirname, "users.json"));
    const palavras = (data.toString("utf-8"))
    const json = JSON.parse(palavras)

    if (name === json.nome)
     console.log(name)
    try {
        getUserByName(name)
        console.log("O arquivo teste2.txt foi criado com sucesso!");
    } catch(err) {
        console.log(err);
    }
}