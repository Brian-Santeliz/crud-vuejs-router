const express = require("express");
const path = require("path");
const db = require("./db/database");
const app = express();
const router = require("./router/router");

app.set("port", 3000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/registro", router);

app.listen(app.get("port"), () => {
  console.log(`Servidor en el puerto ${app.get("port")}`);
  db.authenticate();
});
