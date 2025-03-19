import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import express from 'express';
// import openLogin from '../public/js/script.js'
dotenv.config();

const auth = (req, res, next) => {
    
    next()
    // var loginStatus=0;

    
    // if (loginStatus) {
    //     // res.
    //     // res.render('home.ejs', {loginStatus})
        
    //     // return res.status(401).send("No cookie found");
    // } else {
    //     next()
    // }
    // return res.status(400).send("cookie found");
    
    // const username = req.body.name;
    // const password = req.body.password;

    // const hashedPass = bcrypt.hash( password, 12)
    // const userToken = jwt.sign( username, process.env.ACCESS_TOKEN_SECRET);
    // res.cookie('token', userToken, {
    //     httpOnly: true,
    // });
    // res.send({ 'User Token': userToken, 'Hashed Password': hashedPass})
}







// const app = express();
// app.use(express.json());

// app.post('/test', async (req, res) => {
//     const username = req.body.name;
//     const password = req.body.password;

//     const hashedPass = await bcrypt.hash( password, 12)
//     const userToken = jwt.sign( username, process.env.ACCESS_TOKEN_SECRET);
//     res.cookie('token', userToken, {
//         httpOnly: true,
//     });
//     res.send({ 'User Token': userToken, 'Hashed Password': hashedPass})
    
// })
export default auth
// export default 