const router = require('express').Router();
let teams = require('../controllers/team');

router.get('/',teams.show_team);

router.post('/add', teams.create_team)

module.exports = router;