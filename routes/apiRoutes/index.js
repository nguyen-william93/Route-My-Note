const router = require('express').Router();

//redirecting route to noteRoutes.js
router.use(require("./noteRoutes"));

module.exports = router;