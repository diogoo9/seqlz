module.exports = {
    //npm i pg pg-hstore
    dialect:'postgres',
    host:'localhost',
    username: 'postgres',
    password:'',
    database:'gobarber',
    define:{
        timestamp: true,
        underscored: true, // padrão de tabelas tab_reference
        underscoredAll: true,

    }

    //criate migrations 
    //npx sequelize migration:create --name=create-users 
};