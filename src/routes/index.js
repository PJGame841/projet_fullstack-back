

const base_path = process.env.APP_BASE_PATH || '/api';
module.exports = (app) => {
    app.use(base_path + '/users', require('../routes/users'));
    app.use(base_path + '/projects', require('../routes/projects'));
    app.use(base_path + '/auth', require('../routes/auth'));
    app.use(base_path + "/metrics", require('../routes/metrics'))
}