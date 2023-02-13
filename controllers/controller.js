import https from "https";

async function getData() {
  return new Promise((resolve, reject) => {
    https.get("https://jsonplaceholder.typicode.com/users", (res) => {
      res.setEncoding("utf8");
      let rawData = "";
      res.on("data", (chunk) => {
        rawData += chunk;
      });
      res.on("end", () => {
        let newJson = [];
        try {
          const parsedData = JSON.parse(rawData);
          parsedData.forEach((element) => {
            newJson.push({
              Nome: element.name,
              Email: element.email,
              Telefone: element.phone,
              WebSite: element.website,
            });
          });
          resolve(newJson);
        } catch (e) {
          reject(e);
        }
      });
    });
  });
}

export default getData;
