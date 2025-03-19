import express from 'express'
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

export async function createTicket(tktCategory, tktPublisher, tktPubStudId, tktSubj, tktDesc, tktFile) {
    const [result] = await connection.query(`
            INSERT INTO tickets (tktCategory, tktPublisher, tktPubStudId, tktSubj, tktDesc, tktFile)
            VALUES (?, ?, ?, ?, ?, ?)
            `, [tktCategory, tktPublisher, tktPubStudId, tktSubj, tktDesc, tktFile])
    const id = result.insertId
    return getTicket(id)
}
// export async function createTicket(tktCategory, tktPublisher) {
//     const [result] = await connection.query(`
//         INSERT INTO tickets (tktCategory, tktPublisher)
//         VALUES (?, ?)
//         `, [tktCategory, tktPublisher])
//     const id = result.insertId
//     return getTicket(id)
// }

export async function updateTicket(tktID, tktCategory, tktPublisher, tktPubStudId, tktSubj, tktDesc, tktFile) {
    const [result] = await connection.query(`
        UPDATE tickets
        SET tktCategory = ?, tktPublisher = ?, tktPubStudId = ?, tktSubj = ?, tktDesc = ?, tktFile = ?
        WHERE tktID = ?
        `, [tktCategory, tktPublisher, tktPubStudId, tktSubj, tktDesc, tktFile, tktID])
    return getTicket(tktID)
}

export async function getUsers() {
    const [rows] = await connection.query("SELECT * FROM users")
    return rows
}

export async function getUserbyName(name) {
    const [result] = await connection.query(`
        SELECT *
        FROM users
        WHERE username = ?
        `, [name])
        // console.log(result)
        return result[0]
}

export async function getUserByID(userID){
    const [rows] = await connection.query(`
        SELECT * 
        FROM users
        WHERE uid = ?
        `, [userID])
    return rows[0]
}

export async function checkDuplicateUser(userName, userStudId, userPass){
    const [result] = await connection.query(`
        SELECT EXISTS (
            SELECT 1 
            FROM users 
            WHERE username = ? OR stud_id = ?) AS is_exists;
        `, [userName, userStudId])
    if (!result[0].is_exists) {
        console.log("user registered! \n")
        return await createUser(userName, userStudId, userPass);
    } else {
        console.log("user already exist \n")
    }
    return result[0].is_exists;
}

export async function createUser(userName, userStudId, userPass) {
    const [result] = await connection.query(`
        INSERT INTO users (username, stud_id, password)
        VALUES (?, ?, ?)
        `, [userName, userStudId, userPass])
    const id = result.insertId
    return getUserByID(id)
}

export async function updateUser(userID, userName, userStudId, userPass) {
    const [result] = await connection.query(`
        UPDATE users
        SET userName = ?, userStudId = ?, userPass = ?
        WHERE userID = ?
        `, [userName, userStudId, userPass, userID])
    return getUserByID(userID)
}