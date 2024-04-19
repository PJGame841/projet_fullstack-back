const swaggerAutogen = require("swagger-autogen");

const outputFile = "./swagger/output.json"
const endpointsFiles = [
    './routes/auth.js',
    './routes/metrics.js',
    './routes/projects.js',
    './routes/users.js',
]

swaggerAutogen(outputFile, endpointsFiles)