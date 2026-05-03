const mysql = require('mysql2/promise');

exports.handler = async (event) => {
    const interchange =
        event.interchange ||
        (event.queryStringParameters && event.queryStringParameters.interchange);

    const connection = await mysql.createConnection({
        host: 'tuq53468.cgt24ki6g2ne.us-east-1.rds.amazonaws.com',
        user: 'admin',
        password: 'opensesame',
        database: 'tollschedule'
    });

    const [rows] = await connection.execute(
        'SELECT latitude, longitude FROM interchangeinfo WHERE interchange = ?',
        [interchange]
    );

    await connection.end();

    return rows[0];
};
