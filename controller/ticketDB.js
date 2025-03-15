import express from 'express';
import { getTickets, getTicket, createTicket } from '../model/database.js';
const db = express();

db.get("/tickets", async (req, res) => {
    const tickets = await getTickets();
    res.send(tickets);
});

db.get("/ticket/:id", async (req, res) => {
    const id = req.params.id;
    const ticket = await getTicket(id);
    if (ticket) {
        res.send(ticket);
    } else {
        res.status(404).send({ error: "Ticket not found" });
        //res.render("view/404.ejs")
        return;
    }
});

db.post("/ticket/submit", async (req, res) => {
    const { tktCategory, tktPublisher } = req.body;
    const ticket = await createTicket(tktCategory, tktPublisher);
    res.status(201).send(ticket);
});

export default db;