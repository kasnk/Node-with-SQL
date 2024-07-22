const { faker } = require('@faker-js/faker');
const mysql=require("mysql2");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'pass@123'
  });

  try {
    const [results, fields] =  connection.query(
      'SELECT * FROM temp '
    );
  
    console.log(results);  
    console.log(fields); 
  } catch (err) {
    console.log(err);
  }

  connection.end();
let getRandomUser=()=>{
    return {
        id: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
       };
}

console.log(getRandomUser());