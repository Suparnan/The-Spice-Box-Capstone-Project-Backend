const router = require('express').Router();
const { userController } = require('../controller/user.controller.js');

router.get("/getrecipe", userController.getRecipe);
router.post("/addrecipe", userController.addRecipe);
router.delete("/removerecipe/:name", userController.removeRecipe);

module.exports = router;