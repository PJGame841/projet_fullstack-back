

module.exports = (app) => {
    app.use('/api/users', require('../routes/users'));
    app.use('/api/projects', require('../routes/projects'));
}