const { Router } = require('express');
const { isAuthenticated } = require('../middlewares/auth');

const router = Router();

router.get('/me', isAuthenticated, (req, res) => {
    res.send({ valid: true, data: { user: req.user } });
});

module.exports = router;