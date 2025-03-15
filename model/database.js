import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

export async function getTickets() {
    const [rows] = await connection.query("SELECT * FROM tickets")
    return rows
}

export async function getTicket(tktID){
    const [rows] = await connection.query(`
        SELECT * 
        FROM tickets
        WHERE tktID = ?
        `, [tktID])
    return rows[0]
}

// async function createTicket(tktCategory, tktPublisher, tktPubStudId, tktSubj, tktDesc, tktDateTime, tktFile, tktStatus) {
//     const result = await connection.query(`
    //         INSERT INTO tickets (tktCategory, tktPublisher, tktPubStudId, tktSubj, tktDesc, tktDateTime, tktFile, tktStatus)
    //         VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    //         `, [tktCategory, tktPublisher, tktPubStudId, tktSubj, tktDesc, tktDateTime, tktFile, tktStatus])
//         return result
// }
export async function createTicket(tktCategory, tktPublisher) {
    const [result] = await connection.query(`
        INSERT INTO tickets (tktCategory, tktPublisher)
        VALUES (?, ?)
        `, [tktCategory, tktPublisher])
    const id = result.insertId
    return getTicket(id)
}

export default connection;