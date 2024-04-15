const envVars = [
    { name: 'APP_MONGO_URL', required: true },
    { name: 'APP_BASE_PATH', default: '/api' },
    { name: 'PORT', default: 3000 },
    { name: 'APP_SECRET_KEY', required: true },
    { name: 'APP_JWT_SECRET', required: true },
    { name: "APP_REGISTER_KEY", required: true },
];

module.exports = function() {
    envVars.forEach((envVar) => {
        if (!process.env[envVar.name]) {
            if (envVar.required) {
                throw new Error(`Environment variable ${envVar.name} is missing`);
            } else if (envVar.default) {
                process.env[envVar.name] = envVar.default;
                console.log(`Environment variable ${envVar.name} set to default value: ${envVar.default}`)
            } else {
                console.warn(`Environment variable ${envVar.name} is missing`);
            }
        }
    });
}