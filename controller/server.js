import express from 'express';
import connection from '../model/database.js';
import ejs from 'ejs';
import auth from '../controller/auth.js';
import navRouter from '../routes/nav.js';
import db from './ticketDB.js';

connection.connect(err => {
    if (err) {
      console.error('Error connecting to the database:', err);
      process.exit(1); // Exit the application if the database connection fails
    } else {
      console.log('Connected to the database');
    }
  });

const app = express();
app.engine("html", ejs.renderFile);
app.set('view engine', 'html');
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use('/smc-webassist', auth);
app.use('/smc-webassist', navRouter);
app.use('/smc-webassist', db);

// app.post('/smc-webassist/auth/register', async (req, res) => {
//     console.log("Registering user");
//     const { userName, userStudId, userPass } = req.body;
//     // const [user] = (userName, userStudId, userPass);
//     console.log({
//         userName,
//         userStudId,
//         userPass
//     });
//     res.status(201).send(req.body);
// });

// Writing error handlers
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send(`Something broke! Error: ${err.message}`);
});

app.listen(8080, () => {
    console.log(`Server is running on port 8080`);
});