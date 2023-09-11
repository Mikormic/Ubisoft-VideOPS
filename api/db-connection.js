import mysql from 'mysql';

/** 
*connect to the db service in docker-compose.yml
*/
function connectToDatabase() {

    const connection = mysql.createConnection({
        host: 'db',
        user: 'user',
        password: 'password',
        database: 'devops',
    })
      
    return connection;
}

export default connectToDatabase;