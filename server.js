import express from "express";
import bruxos from "./src/data/bruxos.js"

const app = express();
const portServer = 3000;

app.get("/", (req, res) => {
    res.send(`Entrando no mundo de Harry Potter!`)
})

app.get(`/bruxos`, (req, res) => {
    res.json(bruxos);
})

app.listen(portServer, () => {
    console.log(`Seja bem-vindo ao mundo de Harry Potter em http://localhost:3000 ! Prepare sua varinha 🧙!`);
}) 

app.get("/bruxos/:id", (req, res) => {
    let id = req.params.id;
    id = parseInt(id);
    const bruxo = bruxos.find(b => b.id === id);

    if (bruxo) {
        res.status(200).json(bruxo);
    } else {
        res.status(404).json({
            mensagem: "Este bruxo não existe"
        })
    }
})
