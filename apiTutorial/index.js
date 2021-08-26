const { response } = require("express");
const express = require("express");
const app = express();
const PORT = 3000;
const userControlers = require("../controlers/usersControllers")


//Importando as rotas 
const usersRoutes = require("./routes/usersRoutes")

//Definindo os middlewares
app.use(express.json());

//Defindo as rotas 
app.use("/users", usersRoutes);


app.get("/",(request, response) => {
    response.send("Hello World!");
});

app.post("/", (request, response) => {
    response.send("Método POST");
});

app.put("/", () =>{
    response.send("Método PUT");
});







    // Criar um usuário
    app.post("/users", (req, res) => {
    const { id, name, email } = req.body;
    
    const usersAlreadyExists = users.find(user => user.email === email) 
        if(usersAlreadyExists) {
            return res.status(409).json({message:"user already exists"})
        }
    
     res.json(req.body);
    });
    
    // Atualizar as informações de um usuário
    app.put("/users", (req, res) => {
    });
    
    // Remover um usuário
    app.delete("/users/:id", (req, res) => {
        // Obter o id dos parametros
    const userId = req.params.id;
        // Verificar se o usuario com aquele id existe
    const userIdInDB = users.findIndex(user = user.id == userId);

        if (userIdInDB < 0) {
    return res.status(404).json({ message: "User not found" });
    }

    // Remover o usuario do bd ()
    users.splice(userIdInDB, 1);

    res.status(204).end();
    });

    app.listen(PORT, () => console.log("O servidor está rodando..."))
