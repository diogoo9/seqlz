const {Model} = require('sequelize');
const Sequelize = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            email:Sequelize.STRING, 
            password: Sequelize.STRING,
            provider: Sequelize.BOOLEAN,
        },{
            sequelize,               
        });
    }
}
export default User();