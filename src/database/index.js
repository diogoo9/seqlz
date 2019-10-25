const Sequelize = require('sequelize');
const User = require('../app/models/User');
const databaseConfig = require('../config/database');

const models = [User];

class Database{
    constructor(){
        this.init();
    }

    init(){
        //conect and load models
        this.connection = new Sequelize(databaseConfig);

        models.map(model=> model.init(this.connectio));
        
    }
}

export default new Database();