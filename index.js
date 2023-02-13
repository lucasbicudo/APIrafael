import app from "./routes/route.js";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});
