import express from 'express';
const router = express.Router();

router.get("/home", (req, res) => {
    res.render('home.ejs')
})
router.get("/category", async (req, res) => {
    res.render('categories.ejs')
})
router.get("/feedback", async (req, res) => {
    res.render('feedback.ejs')
})
router.get("/about", async (req, res) => {  
    res.render('about.html')
})
router.get("/account", async (req, res) => {
    res.render('account.ejs')
})  
router.get("/account/settings", async (req, res) => {
    res.render('settings.ejs')
})
router.get("/dashboard", async (req, res) => {
    res.render('dashboard.ejs') 
})
router.get("/ticket-form", async (req, res) => {
    res.render('ticketForm.ejs')
})
router.get("/signup", async (req, res) => {
    res.render('signup.ejs')
})
// router.post('/auth/register', async (req, res) => {
//     console.log("Registering user");
//     const { userName, userStudId, userPass } = req.body;
//     console.log({
//         userName,
//         userStudId,
//         userPass
//     });
// });

export default router;