// 3. Crie um script que leia o arquivo cpfs.txt e utilizando a biblioteca validator.js (https://github.com/validatorjs/validator.js/)
// salve os cpfs válidos em um arquivo cpfsvalidos.txt e os cpfs inválidos em um arquivo cpfsinvalidos.txt.
// */

const fsPromises = require("fs/promises");
const path = require("path");
const { EOL } = require("os");
const { cpf } = require("cpf-cnpj-validator");

(async () => {
    let valid = []
    let invalid = []

    try {
        const data = await fsPromises.readFile(path.resolve(__dirname, "cpfs.txt"));
        const dataString = data.toString("utf-8").split(EOL);

        for (const cpf1 of dataString) {
            cpf.isValid(cpf1) ? valid.push(cpf1) : invalid.push(cpf1);
        }

        fsPromises.writeFile(path.resolve(__dirname, "cpfsvalidos.txt"), valid.join(EOL));
        fsPromises.writeFile(path.resolve(__dirname, "cpfsinvalidos.txt"), invalid.join(EOL));
    } catch (e) {
        console.log(e.message);
    }
})();