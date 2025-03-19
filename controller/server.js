import express from 'express';
// import connection from '../model/database.js';
import ejs from 'ejs';
import user from './userHandler.js';
import publicRoute from '../routes/publicRoute.js';
import db from './ticketHandler.js';
import auth from '../middleware/authenticator.js'
import privateRoute from "../routes/authRoute.js"

const app = express();
// app.engine("html", ejs.renderFile);
// app.set('view engine', 'html');
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use('/smc-webassist', publicRoute);
// app.use(auth)
// app.use('/smc-webassist', auth);
app.use('/smc-webassist', auth, user, privateRoute)
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