const express = require('express');
const https = require('https');
const app = express();

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Servidor escutando na porta http://localhost:${port}`)
})

function getData(){
  let newJson = '';
  https.get('https://jsonplaceholder.typicode.com/users', (res) => {
  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  res.on('end', () => {
    try {
      const parsedData = JSON.parse(rawData);
      parsedData.forEach(element => {
      const newJson = JSON.stringify({
        "Nome": element.name,
        "Email": element.email,
        "Telefone": element.phone,
        "WebSite": element.website
      });
      return JSON.parse(newJson);
    });     
    } catch (e) {
    return console.error(e.message);
  }
  });
  })
}

app.get('/users', (req, res) => {
  res.status(200).send(getData());
});    

//teste commit 