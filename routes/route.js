import express from "express";
import getData from "../controllers/controller.js";
const app = express();

app.use(express.json());

// aqui irao ficar as rotas
app.get("/users", (req, res) => {
  getData()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

export default app;
