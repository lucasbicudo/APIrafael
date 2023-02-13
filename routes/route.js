import express from "express";
import getJson from "../controllers/controller.js";
const app = express();

app.use(express.json());

// aqui irao ficar as rotas
app.get("/users", (req, res) => {
  getJson()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

export default app;
