import express from 'express';
import { getUserByID, getUsers, getUserbyName, checkDuplicateUser, createUser, updateUser, getTicket } from '../model/database.js';
const user = express();
user.use(express.json());
user.use(express.urlencoded({ extended: false }));

user.post('/login', async (req, res) => {
    const {userName , userPass} = req.body
    const user = await getUserbyName(userName)
    
    if (!user) {
        res.json({ message: "user does not exist", statusCode:'01' });

    } else if (userName == user.username) {

        if (userPass == user.password){
            console.log("Matching :", userName, userPass)
            console.log("to:", user.username, user.password)
            res.json({ message: "Login Successful", statusCode:'11' });
        } else {
            res.json({ message: "Invalid Password", statusCode:'02' });
            // res.render('signin.ejs', {
            //     returnStatement: "Invalid Password"
            // })
            
        }
    } else {
        res.status(400)
        // res.render('signin.ejs', {
        //     returnStatement: "User does not exist"
        // })
    }
    console.log("Login form input:", userName, userPass)
    // next();
    // res.render('home.ejs',{
    //     loginStatus : 1,
    //     profile : "Profile",
    //     sign_in : "Sign in"
    // })
    
});

user.post('/register', async (req, res) => {
    const {userName, userStudId, userPass} = req.body;
    const user = await checkDuplicateUser(userName, userStudId, userPass);
    if (!user) {
        res.status(201).send(user);
    } else {
        res.status(409).send(user);
    }
});

export default user;