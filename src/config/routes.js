const { Router } = require("express");
const { home, details } = require("../controllers/catalog");
const about = require("../controllers/about");

const router = Router();

router.get('/', home);
router.get('/about', about);
router.get('/details/:id', details);

module.exports = { router };
