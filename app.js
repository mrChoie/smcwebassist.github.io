import express from 'express';
import { getTickets, getTicket, createTicket } from './database.js';
import navRouter from './routes/nav.js';

const app = express();
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static('public'));
app.use('/smc-webassist', navRouter);

app.get("/smc-webassist/tickets", async (req, res) => {
  const tickets = await getTickets();
  res.send(tickets);
});

app.get("/smc-webassist/ticket/:id", async (req, res) => {
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

app.post("/smc-webassist/ticket/submit", async (req, res) => {
  const { tktCategory, tktPublisher } = req.body;
  const ticket = await createTicket(tktCategory, tktPublisher);
  res.status(201).send(ticket);
});

app.use

// Hompage
// app.get("/smc-webassist", (req, res) => {
//   res.render('home.ejs');
// });

// Dynamic route
// app.get("/smc-webassist/:page", (req, res) => {
//   const page = req.params.page;
//   const validPages = ['home', 'submit']; // List of valid pages

//   if (validPages.includes(page)) {
//     res.render(`${page}.ejs`, (err, html) => {
//       if (err) {
//         res.status(404).send("Page not found");
//       } else {
//         res.send(html);
//       }
//     });
//   } else {
//     res.status(404).send("Page not found");
//   }
// });

// Writing error handlers
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(`Something broke! Error: ${err.message}`);
});

app.listen(8080, () => {
  console.log(`Server is running on port 8080`);
});