const express = require("express");
const { signup, login, protect,refreshToken, restricTo, addRole, editRole, deleteRole, addPermission, editPermission, deletePermission, addUserToGroup, deleteUserToGroup, addRolePermission, updateRolePermission, getRoles } = require("./auth.controller");
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

router.route('/roles').post(addRole).get(getRoles)
router.route("/roles/:id").patch(editRole).delete(deleteRole)

router.route('/permissions').post(addPermission)
router.route("/permissions/:id").patch(editPermission).delete(deletePermission)


router.post("/addUserToGroup",addUserToGroup)
router.delete("/deleteUserToGroup",deleteUserToGroup)
router.post("/addRolePermission",addRolePermission)
router.patch("/updateRolePermission",updateRolePermission)




router.patch("/updateMe", protect, updateMe);
router.patch("/updateMyPassword", protect, updatePassword);
router.route("/").get(protect,restricTo("blogs",['read',]),getAllUser);
router.route("/:id").get(getUser);
module.exports = router;
