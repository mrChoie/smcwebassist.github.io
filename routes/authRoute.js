import express from 'express';
const privateRoute = express();

// privateRoute.post("/login", async (req, res) => {
    
// })
privateRoute.get("/feedback", async (req, res) => {
    res.render('feedback.ejs')
})
privateRoute.get("/category", async (req, res) => {
    res.render('categories.ejs')
})
privateRoute.get("/account", async (req, res) => {
    res.render('account.ejs')
})  
privateRoute.get("/account/settings", async (req, res) => {
    res.render('settings.ejs')
})
privateRoute.get("/dashboard", async (req, res) => {
    res.render('dashboard.ejs') 
})
privateRoute.get("/ticket-form", async (req, res) => {
    res.render('ticketForm.ejs')
})


export default privateRoute;