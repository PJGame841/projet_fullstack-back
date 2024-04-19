
module.exports = (req, res, next) => {
    try {
        next();
    } catch (error) {
        console.error(error);
        res.status(500).send({ valid: false, message: "Internal server error: " + error.message });
    }
}