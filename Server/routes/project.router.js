const express = require('express');
const router = express.Router();
const upload = require('../config/multer.config.js');
 
const projectController = require('../controllers/project.controller.js');


router.post('/api/projects/project', upload.single("file"), projectController.createProject);
//router.post('/api/project/multiple/upload', upload.array('files', 4), fileWorker.uploadMultipleFiles);
 
router.get('/api/projects', projectController.getAllProjects);
 
router.get('/api/projects/:id', projectController.getSingleProject);

router.put('/api/projects/:id', upload.single("file"), projectController.updateProject);

router.delete('/api/projects/:id', projectController.deleteProject)
 
module.exports = router;