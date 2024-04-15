const envVars = [
    { name: 'APP_MONGO_URL', required: true }
];

module.exports = function() {
    envVars.forEach((envVar) => {
        if (!process.env[envVar.name]) {
            if (envVar.required) {
                throw new Error(`Environment variable ${envVar.name} is missing`);
            } else if (envVar.default) {
                process.env[envVar.name] = envVar.default;
            } else {
                console.warn(`Environment variable ${envVar.name} is missing`);
            }
        }
    });
}