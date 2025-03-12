import express from 'express';
const router = express.Router();

router.get("/home", (req, res) => {
    res.render('home.ejs')
})
router.get("/submit", async (req, res) => {
    res.render('submit.ejs')
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

export default router;