const express = require("express");
const controller = require("../controller/registroController");
const router = express.Router();

router.get("/", controller.getController);
router.get("/:id", controller.getById);
router.post("/", controller.postController);
router.delete("/:id", controller.deleteController);
router.put("/:id", controller.updateController);

module.exports = router;
