import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

export async function getTickets() {
    const [rows] = await pool.query("SELECT * FROM tickets")
    return rows
}

export async function getTicket(tktID){
    const [rows] = await pool.query(`
        SELECT * 
        FROM tickets
        WHERE tktID = ?
        `, [tktID])
    return rows[0]
}

// async function createTicket(tktCategory, tktPublisher, tktPubStudId, tktSubj, tktDesc, tktDateTime, tktFile, tktStatus) {
//     const result = await pool.query(`
    //         INSERT INTO tickets (tktCategory, tktPublisher, tktPubStudId, tktSubj, tktDesc, tktDateTime, tktFile, tktStatus)
    //         VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    //         `, [tktCategory, tktPublisher, tktPubStudId, tktSubj, tktDesc, tktDateTime, tktFile, tktStatus])
//         return result
// }
export async function createTicket(tktCategory, tktPublisher) {
    const [result] = await pool.query(`
        INSERT INTO tickets (tktCategory, tktPublisher)
        VALUES (?, ?)
        `, [tktCategory, tktPublisher])
    const id = result.insertId
    return getTicket(id)
}

// const result = await createTicket('6','Ody')
// console.log(result)

// const ticket = await getTicket(3)
// console.log(ticket)
