const { Router } = require('express');
const User = require('../models/user');

const router = Router();

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).send({ valid: false, message: 'Username and password are required' });
    }

    const user = await User.findOne({ username });
    if (!user || !user.comparePassword(password)) {
        return res.status(401).send({ valid: false, message: 'Bad username/password' });
    }

    res.send({ valid: true, data: { accessToken: user.generateToken() } });
});

router.post('/register', async (req, res) => {
    const { accessKey, username, password } = req.body;
    if (!username || !password) {
        return res.status(400).send({ valid: false, message: 'Username and password are required' });
    }

    if (accessKey !== process.env.APP_REGISTER_KEY) {
        return res.status(401).send({ valid: false, message: 'Invalid access key' });
    }

    const user = new User({ username, password });
    await user.save();

    res.send({ valid: true, data: { user, accessToken: user.generateToken() } });
});


module.exports = router;