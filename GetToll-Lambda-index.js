const mysql = require('mysql2/promise');

exports.handler = async (event) => {
    const enter =
        event.enter ||
        (event.queryStringParameters && event.queryStringParameters.enter);

    const exit =
        event.exit ||
        (event.queryStringParameters && event.queryStringParameters.exit);

    const paymentType =
        event.paymentType ||
        (event.queryStringParameters && event.queryStringParameters.paymentType);

    let tableName;

    if (paymentType === 'E-ZPass') {
        tableName = 'ezpasstollschedule';
    } else if (paymentType === 'TollByPlate' || paymentType === 'Toll By Plate') {
        tableName = 'tollbyplatetollschedule';
    } else {
        throw new Error('Invalid payment type');
    }

    const connection = await mysql.createConnection({
        host: 'tuq53468.cgt24ki6g2ne.us-east-1.rds.amazonaws.com',
        user: 'admin',
        password: 'opensesame',
        database: 'tollschedule'
    });

    const [rows] = await connection.execute(
        `SELECT toll FROM ${tableName} WHERE interchangeEnter = ? AND interchangeExit = ?`,
        [enter, exit]
    );

    await connection.end();

    return rows[0];
};
