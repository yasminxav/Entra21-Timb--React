const { response } = require("express");
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/",(request, response) => {
    response.send("Hello World!");
});

app.post("/", (request, response) => {
    response.send("Métodp POST");
});

app.put("/", () =>{
    response.send("Método PUT");
});

app.listen(PORT, () => console.log("O servidor está rodando..."))


const users = [
    { id: 1, name: "Pedro", email: "pedro@email.com" },
    { id: 2, name: "João", email: "joao@email.com" },
    { id: 3, name: "Marcos", email: "marcos@email.com" },
    ];

//Rotas de Usuarios "users"
app.get("/users", (req, res) => {
    res.json(users);
});


app.get("/users/:id", (req, res) => {
    const user_id = req.params.id;
    console.log(user_id);

    const user = users.find(user => user.id === user_id);

    if (!user) {
    res.status(404).json({ message: "User not found!" });
    }

    res.json(user);
});


app.get("/users/:id", (req, res) => {
    const userId = req.params.id;
    
     const user = users.find(user => user.id == userId);
    
     if (!user) {
    res.status(404).json({ message: "User not found!" });
    }
    
     res.json(user);
});