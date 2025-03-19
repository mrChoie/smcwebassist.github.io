import express from 'express';
const publicRoute = express.Router();

publicRoute.get("/home", (req, res) => {
    res.render('home.ejs', {
        loginStatus: 0,
        profile : "Profile",
        sign_in : "Sign in"
    })
})
publicRoute.get("/about", async (req, res) => {  
    res.render('about.ejs')
})
publicRoute.get("/signup", async (req, res) => {
    res.render('signup.ejs')
})
publicRoute.get("/signin", async (req, res) => {
    res.render('signin.ejs', {
        returnStatement : ""
    })
})
// router.get("/feedback", async (req, res) => {
//     res.render('feedback.ejs')
// })
// router.get("/category", async (req, res) => {
//     res.render('categories.ejs')
// })
// router.get("/account", async (req, res) => {
//     res.render('account.ejs')
// })  
// router.get("/account/settings", async (req, res) => {
//     res.render('settings.ejs')
// })
// router.get("/dashboard", async (req, res) => {
//     res.render('dashboard.ejs') 
// })
// router.get("/ticket-form", async (req, res) => {
//     res.render('ticketForm.ejs')
// })
// router.get("/signup", async (req, res) => {
//     res.render('signup.ejs')
// })
// router.post('/auth/register', async (req, res) => {
//     console.log("Registering user");
//     const { userName, userStudId, userPass } = req.body;
//     console.log({
//         userName,
//         userStudId,
//         userPass
//     });
// });

export default publicRoute;