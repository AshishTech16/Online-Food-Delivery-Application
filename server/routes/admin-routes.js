const express = require('express');
const {addAdmin,adminLogin,getAdmins,getAdminById,deleteAdminById} = require("../controllers/admin-controller");
const adminRouter = express.Router();

adminRouter.post('/signup',addAdmin);
adminRouter.post('/login',adminLogin);
adminRouter.get('/',getAdmins);
adminRouter.get('/:id',getAdminById);
adminRouter.delete('/:id',deleteAdminById)

module.exports = adminRouter;