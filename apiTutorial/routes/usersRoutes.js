const express = require("express");
const router = express.Router();

//Obtendo todos os usuários
router.get("/users", (req, res) => {
    res.json(users);
});

//obter usuario
router.get("/users/:id", (req, res) => {
    const user_id = req.params.id;
    console.log(user_id);

    const user = users.find(user => user.id === user_id);

    if (!user) {
    res.status(404).json({ message: "User not found!" });
    }

    res.json(user);
});

//Criar um usuário

router.post("/", (req, res) =>{

});

module.exports = router;
