// 1. Crie um script que irá salvar as informações de memória a cada 5 segundos em um arquivo chamado log.txt
// As informações devem ser salvas no seguinte formato:
// {"total_memory":"xx MB", "free_memory":"xx MB", "usage":"xx %"}
// Onde:
//     * total_memory: Quantidade total de memória.
//     * free_memory: Quantidade de memória livre.
//     * usage: Porcentagem de uso da memória.

const fs = require("fs");
const fsPromises = require("fs/promises");
const path = require("path");
const { EOL } = require("os");

(async () => {
    const data = await fsPromises.readFile(path.resolve(__dirname, "log.txt"));
    setInterval(()=>{
        
    }, 5000 )
    try {
        console.log("Novo conteúdo adicionado (Promise)");
    } catch(err) {
        console.log(err.message);
    }
})();