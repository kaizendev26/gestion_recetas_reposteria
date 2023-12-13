const mysql = require('mysql2');

const conexion = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"A1e3i5o7u9b11c13%",
    database:"gestion_reposteria"
});

conexion.connect(err =>{
    if(err) throw err
    console.log('Conectado a la DB')
})

const consultarInsumos = (resquest,callback)=>{

    try {
        // console.log(resquest.body)
        const {id} = resquest.body;
        let storeProcedure = `CALL consultarInsumos`
        conexion.query(storeProcedure, true, (error, results, fields) => {
            if (error) {
              return console.error(error.message);
            }
    
            callback(results[0] ?? { response: 'no_data'} )
    
          });
    } catch (error) {
        throw error
    }
}

module.exports = {
    consultarInsumos
}