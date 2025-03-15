import express from 'express';
const auth = express();
auth.use(express.json());
auth.use(express.urlencoded({ extended: false }));

auth.post('/auth/register', async (req, res) => {
    console.log("Registering user");
    const { userName, userStudId, userPass } = req.body;
    const user = { userName, userStudId, userPass };
    console.log("users: \n",{ userName, userStudId, userPass });
    res.status(201).send([user]);
});

export default auth;