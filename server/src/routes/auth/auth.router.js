const express = require("express");
const { signup, login, protect,refreshToken, restricTo } = require("./auth.controller");
const {
  getAllUser,
  getUser,
  updateMe,
  updatePassword,
  
} = require("./userController");

const router = express.Router();

// login and signup routes
router.route("/signup").post(signup);
router.route("/signin").post(login);
router.post("/refreshtoken",refreshToken)

router.patch("/updateMe", protect, updateMe);
router.patch("/updateMyPassword", protect, updatePassword);
router.route("/").get(protect,restricTo("posts",['read','update',]),getAllUser);
router.route("/:id").get(getUser);
module.exports = router;
