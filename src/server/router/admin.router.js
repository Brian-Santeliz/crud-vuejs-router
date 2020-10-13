const { Router } = require("express");
const Registro = require("../model/Registro");
const router = Router();

router.get("/", (req, res) => {
  res.render("login");
});

router.get("/panel", async (req, res) => {
  if (!req.session.admin) {
    res.redirect("/admin/");
    return;
  }
  const { mail } = req.session;
  res.render("panel", {
    mail,
  });
});
//esta ruta deberia ir en el nav, crear un partials para eso
router.get("/usuarios", async (req, res) => {
  if (!req.session.admin) {
    res.redirect("/admin/");
    return;
  }
  const registros = await Registro.findAll();
  res.render("registros", {
    registros,
  });
});
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email === "admin@mail.com" && password === "1") {
    req.session.mail = email;
    req.session.admin = true;
    res.redirect("/admin/panel");
    return;
  }
  res.render("login", {
    error: "Credenciales no validas",
  });
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/admin/");
});
router.post("/api/agregar", async (req, res) => {
  const { nombre, telefono } = req.body;
  if (!nombre || nombre.trim() === "" || telefono.trim() === "" || !telefono) {
    res.render("panel", {
      msg: "Error faltan datos",
    });
    return;
  }
  await Registro.create({ nombre, telefono });
  res.render("panel", {
    msg: "Agregado correctamente",
  });
});

module.exports = router;
