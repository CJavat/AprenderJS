const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'javato',
    password : 'CBLAKK10',
    database : 'holamundo'
});

connection.connect( (err) => {
    if(err) throw err
    console.log('La conexion funciona.');
});

connection.query('SELECT * FROM usuarios', (err, rows) => {
    if(err) throw err
    console.log('Los datos de la tabla son: ');
    console.log(rows);
    console.log('La cantidad de los resultados es:');
    console.log(rows.length);
    const usuarioUno = rows[0];
    console.log(usuarioUno.user_name);
    console.log(`El usuario: ${usuarioUno.id} se llama ${usuarioUno.user_name} ${usuarioUno.user_lastname} y tiene ${usuarioUno.user_age} años.`);

})


connection.end();




