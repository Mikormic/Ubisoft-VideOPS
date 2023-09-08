import mysql from 'mysql';

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