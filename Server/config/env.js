const env = {
    database: 'Autom8LabDB',
    username: 'postgres',
    password: 'Liverpool@5',
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
  };
   
  module.exports = env;