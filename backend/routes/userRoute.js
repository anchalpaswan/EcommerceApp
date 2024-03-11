const express = require('express')
const { registerUser, loginUser, logout, forgotPassword, resetPassword, getUserDetails,
  updatePassword, updateProfile, getAllUser, getSingleUser, updateUserRole, deleteUser } = require('../controllers/userController')
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');
const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/password/forgot", forgotPassword);

router.put("/password/reset/:token", resetPassword)

router.get("/logout", logout);

router.get("/me", isAuthenticatedUser, getUserDetails)

router.put("/password/update", isAuthenticatedUser, updatePassword)

router.put("/me/update", isAuthenticatedUser, updateProfile);

router.get("/admin/users", isAuthenticatedUser, authorizeRoles("admin"), getAllUser)

router
  .route("/admin/user/:id")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getSingleUser)
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateUserRole)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);

module.exports = router;


