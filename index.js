import express from "express";
import dotenv from "dotenv";
import {conectarDB} from "./config/db.js";
import PersonasRoutes from "./routes/PersonaRoutes.js";
dotenv.config();

const app = express();
const PORT = 3000;  

conectarDB();


app.use(express.json());
app.use("/personas", PersonasRoutes);

app.get("/personas", (req, res) => {
    res.json(personas);
});

app.use(express.json());
app.listen(PORT, () => {
    console.log("Servidor corriendo )en el puerto " + PORT);
});

