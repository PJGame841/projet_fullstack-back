const { Router } = require('express');

const router = Router();

router.get('/me', (req, res) => {
    res.send('Hello World');
});

module.exports = router;