const db = require('../config/db.config.js');
const Project = db.projects;

// create new project
exports.createProject =  (req, res) => {
      Project.create({
        name: req.body.name,
        description: req.body.description,
        number_of_applications:req.body.number_of_applications,
        critical_violations :req.body.critical_violations,
        robustness_index :req.body.robustness_index,
        efficiency_index :req.body.efficiency_index,
        security_index :req.body.security_index,
        changeability_index:req.body.changeability_index,
        transferability_index :req.body.transferability_index,
        technical_size:req.body.technical_size,
       //for image
       projectImgType: req.file.mimetype,
       ProjectImgName: req.file.originalname,
       projectImgData: req.file.buffer, 
       
     }).then(project => {
		const result = {
			status: "ok",
			filename: req.file.originalname,
			message: "Created Successfully!",
			
		}

		res.json(result);
	}).catch(err => {
		const result = {
			status: "error",
			error: err
		}
		res.json(result);
	});
     
}

// get all projects
exports.getAllProjects = (req, res) => {
      Project.findAll({
    //  include: [
    //   {
    //    model: User,
    //    as: "createdBy",
    //    },
    //   ],
     })
   .then(projects => {
    projects.map(project => {
       const projectImage = project.projectImgData.toString('base64')
       project['projectImgData'] = projectImage
      });
     return projects;
    })
    .then(projects => {
    return res.status(200).json({projects: projects});
   })
    .catch(err =>{
        return res.status(500).send(err.mesage);
    })
   }

   // get single project
   exports.getSingleProject = (req, res) => {
     Project.findByPk(req.params.id)
  .then(project => {
      const projectImage = project.projectImgData.toString('base64')
      project['projectImgData'] = projectImage
      return project;
   })
   .then(project => {
   return res.status(200).json({project: project});
  })
   .catch(err =>{
       return res.status(500).send(err.mesage);
   })
  }

  // update project
  exports.updateProject =  (req, res) =>{
        const id = req.params.id;
        const projectToUpdate = {
        name: req.body.name,
        description: req.body.description,
        number_of_applications:req.body.number_of_applications,
        critical_violations :req.body.critical_violations,
        robustness_index :req.body.robustness_index,
        efficiency_index :req.body.efficiency_index,
        security_index :req.body.security_index,
        changeability_index:req.body.changeability_index,
        transferability_index :req.body.transferability_index,
        technical_size:req.body.technical_size,
       //for image
       projectImgType: req.file.mimetype,
       ProjectImgName: req.file.originalname,
       projectImgData: req.file.buffer, 
    };
     Project.update(projectToUpdate, {where: { id: id }})
    .then(() => {
		const result = {
			status: "ok",
			filename: req.file.originalname,
			message: "Updated Successfully!",
			
		}
		res.json(result);
	}).catch(err => {
		const result = {
			status: "error",
			error: err
		}
		res.json(result);
	});
  }

  // delete project with query id

  exports.deleteProject =  (req, res) => {
	const id = req.params.id;
	 Project.destroy({where: { id: id }})
    .then(() => {
        res.status(200).json( { msg: 'Deleted Successfully'});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
};