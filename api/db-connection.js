import mysql from 'mysql';

function connectToDatabase() {

    const connection = mysql.createConnection({
        host: 'host.docker.internal',
        user: 'user',
        password: 'password',
        database: 'devops',
    })
      
    return connection;
}

export default connectToDatabase;