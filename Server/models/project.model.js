
module.exports = (sequelize, Sequelize) => {
	const Project = sequelize.define('projects', {
      projectImgType: {
        type: Sequelize.STRING
       },
        ProjectImgName: {
            type: Sequelize.STRING
       },
        projectImgData: {
            type: Sequelize.BLOB('long')
       },
       name: {
           type:Sequelize.STRING
        },
        description: {
            type:Sequelize.STRING
        },
        number_of_applications : {
            type: Sequelize.DOUBLE
        },
        critical_violations : {
            type: Sequelize.DOUBLE
        },
        robustness_index : {
            type: Sequelize.DOUBLE
        },
        efficiency_index : {
            type: Sequelize.DOUBLE
        },
        security_index : {
            type: Sequelize.DOUBLE
        },
        changeability_index: {
            type: Sequelize.DOUBLE
        },
        transferability_index: {
            type: Sequelize.DOUBLE
        },
        technical_size: {
            type: Sequelize.DOUBLE
        },

    });
	
	return Project;
}