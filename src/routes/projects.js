const { Router } = require('express');
const Project = require('../models/project');

const router = Router();

router.get('/', async (req, res) => {
    const projects = await Project.find({});
    res.send({ valid: true, data: projects });
});

router.get('/:id', async (req, res) => {
    const project = await Project.findById(req.params.id);
    res.send({ valid: true, data: project });
});

router.post('/', async (req, res) => {
    const project = new Project(req.body);
    await project.save();
    res.send({ valid: true, data: project });
});

router.put('/:id', async (req, res) => {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body);

    res.send({ valid: true, data: project });
});

router.delete('/:id', async (req, res) => {
    const project = await Project.findByIdAndDelete(req.params.id);
    res.send({ valid: true, data: project });
});

module.exports = router;