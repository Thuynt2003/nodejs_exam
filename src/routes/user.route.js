const express = require("express");
const router = express.Router();

const controller = require("./../controllers/user.controller");
router.get("/",controller.get);
router.get("/create",controller.create_user);
router.post("/create",controller.save_user);
module.exports = router;