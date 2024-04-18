const { Router } = require('express');
const { validateId } = require('../middlewares/validate');
const { isAuthenticated } = require('../middlewares/auth');
const Project = require('../models/project');

const router = Router();

router.get('/', async (req, res) => {
    const projects = await Project.find({});
    res.send({ valid: true, data: projects });
});

router.get('/:id', [isAuthenticated, validateId('id')], async (req, res) => {
    const project = await Project.findById(req.params.id);
    if (!project) {
        return res.status(404).send({ valid: false, message: "Project not found for the given id !"});
    }

    res.send({ valid: true, data: project });
});

router.post('/', isAuthenticated, async (req, res) => {
    const project = new Project(req.body);
    try {
        await project.save();
    } catch (error) {
        return res.status(400).send({ valid: false, message: error.message });
    }
    res.send({ valid: true, data: project });
});

router.put('/:id', [isAuthenticated, validateId('id')], async (req, res) => {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body);
    if (!project) {
        return res.status(404).send({ valid: false, message: "Project not found for the given id !"});
    }

    res.send({ valid: true, data: project });
});

router.delete('/:id', [isAuthenticated, validateId('id')], async (req, res) => {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
        return res.status(404).send({ valid: false, message: "Project not found for the given id !"});
    }

    res.send({ valid: true, data: project });
});

module.exports = router;