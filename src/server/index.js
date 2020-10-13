const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const path = require("path");
const db = require("./db/database");
const app = express();
const router = require("./router/router");
const adminRouter = require("./router/admin.router");

app.set("port", 3000);
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "SecretString",
    saveUninitialized: true,
    resave: true,
    //guarda en la bd
  })
);
app.use((req, res, next) => {
  app.locals.mail = req.session.mail;
  next();
});
app.use("/registro", router);
//Agregar express-mysql-session con sequelize
app.use("/admin", adminRouter);

app.listen(app.get("port"), () => {
  console.log(`Servidor en el puerto ${app.get("port")}`);
  db.authenticate();
});
