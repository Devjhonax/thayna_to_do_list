import express from "express";
import sequelize from "./config/configDb.js";
import router from "./routes/tarefaRoutes.js";
import cors from "cors";

const app = express();

// aplicação que permite usar todas as ferramentas desenvolvidas nas outras pastas.
app.use(express.json())

app.use(cors({
  origin: "http://localhost:5500",
  credentials: true
}));

app.use(router)

//função que conecta com o banco de dados.
sequelize.sync()
    .then(() => console.log("Banco de dados conectado"))
    .catch((erro)=> console.error("Erro ao conectar com o banco de dados: ", erro));
    
export default app