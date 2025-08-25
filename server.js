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
    if (bruxos.length > 0) {
        res.status(200).json(bruxos)
    } else {
        res.status(404).json({
            mensagem: "Não existem bruxos"
        })
    }
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
    if (casas.length > 0) {
        res.status(200).json(casas);
    } else {
        res.status(404).json({
            mensagem: "Não existem casas"
        })
    }
});

app.get("/casas/id/:id", (req, res) => {
    let id = req.params.id;
    id = parseInt(id);
    const casa = casas.find(b => b.id === id);

    if (casa) {
        res.status(200).json(casa);
    } else {
        res.status(404).json({
            mensagem: "Esta casa não existe"
        })
    }
})

app.get("/varinhas", (req, res) => {
    if (varinhas.length > 0) {
        res.status(200).json(varinhas);
    } else {
        res.status(404).json({
            mensagem: "Não existem varinhas"
        })
    }
});

app.get("/varinhas/id/:id", (req, res) => {
    let id = req.params.id;
    id = parseInt(id);
    const varinha = varinhas.find(b => b.id === id);

    if (varinha) {
        res.status(200).json(varinha);
    } else {
        res.status(404).json({
            mensagem: "Esta varinha não existe"
        })
    }
});

app.get("/pocoes", (req, res) => {
    if (pocoes.length > 0) {
        res.status(200).json(pocoes)
    } else {
        res.status(404).json({
            mensagem: "Não existem poções"
        })
    }
});

app.get("/pocoes/id/:id", (req, res) => {
    let id = req.params.id;
    id = parseInt(id);
    const pocao = pocoes.find(b => b.id === id);

    if (pocao) {
        res.status(200).json(pocao);
    } else {
        res.status(404).json({
            mensagem: "Esta poção não existe"
        })
    }
})