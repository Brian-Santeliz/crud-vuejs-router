const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const cookieParser = require("cookie-parser");
const path = require("path");
const db = require("./db/database");
const app = express();
const router = require("./router/router");
const adminRouter = require("./router/admin.router");

//opciones de mysql-session
const options = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "crud_vuejs",
};
const sessionStore = new MySQLStore(options);
app.set("port", 3000);
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(cookieParser("eje"));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "SecretString",
    saveUninitialized: true,
    resave: true,
    cookie: { maxAge: Date.now() + 30 * 86400 * 1000 },
    //guarda en la bd
    store: sessionStore,
  })
);
//middlewares para guardar el email y la ruta
app.use((req, res, next) => {
  app.locals.mail = req.session.mail;
  app.locals.ruta = req.path;
  next();
});

app.use("/registro", router);
//Agregar express-mysql-session con sequelize
app.use("/admin", adminRouter);

app.listen(app.get("port"), () => {
  console.log(`Servidor en el puerto ${app.get("port")}`);
  db.authenticate();
});
