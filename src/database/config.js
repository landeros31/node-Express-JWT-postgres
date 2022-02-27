
///conexion a postgres


const {Pool} =require("pg");

const pool=new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'password',
    database: 'ocarvajal',
    port: '5432'
});


module.exports = pool;