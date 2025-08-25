import express from "express";
import dados from "./src/data/dados.js"

const app = express();
const serverPort = 3000;

const {bruxos, casas, varinhas, pocoes} = dados;
app.use(express.json());

app.get("/", (req, res) => {
    res.send(`Entrando no mundo de Harry Potter!`)
})

app.get(`/bruxos`, (req, res) => {
    res.json(bruxos);
})

app.listen(serverPort, () => {
    console.log(`Seja bem-vindo ao mundo de Harry Potter em http://localhost:${serverPort} ! Prepare sua varinha 🧙!`);
})

app.get("/bruxos/id/:id", (req, res) => {
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

app.get("/bruxos/nome/:nome", (req, res) => {
    let nome = req.params.nome;
    const comoEChamado = bruxos.filter(b => b.nome.toLowerCase().includes(nome.toLowerCase()));

    if (comoEChamado.length > 0) {
        res.status(200).json(comoEChamado);
    } else {
        res.status(404).json({
            mensagem: "Este bruxo não existe"
        })
    }
})

app.get("/casas", (req, res) => {
    res.json(casas);
});

app.get("/varinhas", (req, res) => {
    res.json(varinhas);
});

app.get("/pocoes", (req, res) => {
    res.json(pocoes);
})