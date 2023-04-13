const express = require('express')
const app = express()

const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'admin',
  database: 'pruebaerco',
});


//Ejemplo: http://localhost:8081/ciudades/Bombuflat
app.get('/ciudades/:nombreCiudad', (req, res) => {
    const nombreCiudad = req.params.nombreCiudad;
    pool.query(
      `SELECT POPULATION FROM CITIES WHERE NAME = $1`,
      [nombreCiudad],
      (err, results) => {
        if (err) {
          res.send(err.message);
        } else if (results.rowCount === 0) {
          res.send(`No se encontró la ciudad ${nombreCiudad}`);
        } else {
          const poblacion = results.rows[0].population;
          res.send(`La población de ${nombreCiudad} es ${poblacion}`);
        }
      }
    );
  });

// app.get('/', (req,rest)=> {
//     rest.send('backend')
// });

app.listen(8081, () => {
    console.log('Trabajando en el puerto 8081')
})