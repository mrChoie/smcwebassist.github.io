import express from 'express';
import ejs from 'ejs';
import navRouter from '../routes/nav.js';
import db from './ticketDB.js';

const app = express();
app.engine("html", ejs.renderFile);
app.set('view engine', 'html');
app.use(express.json());
app.use(express.static('public'));
app.use('/smc-webassist', navRouter);
app.use('/smc-webassist', db);

// Writing error handlers
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send(`Something broke! Error: ${err.message}`);
});

app.listen(8080, () => {
    console.log(`Server is running on port 8080`);
});

export default app;