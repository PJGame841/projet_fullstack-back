const { Router } = require('express');
const { validateId } = require('../middlewares/validate');
const Project = require('../models/project');

const router = Router();

router.post("/:id/click", validateId('id'), async (req, res) => {
    const project = await Project.findById(req.params.id);
    if (!project) {
        return res.status(404).send({ valid: false, message: "Project not found for the given id !"});
    }

    if (!project.click_count) project.click_count = 0
    project.click_count = project.click_count + 1;
    await project.save();

    res.send({ valid: true });
});

router.post("/:id/view", validateId('id'), async (req, res) => {
    const project = await Project.findById(req.params.id);
    if (!project) {
        return res.status(404).send({ valid: false, message: "Project not found for the given id !"});
    }

    if (!project.view_time) project.view_time = 0
    project.view_time = project.view_time + 5;
    await project.save();

    res.send({ valid: true });
});

module.exports = router;