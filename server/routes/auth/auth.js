const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/user.model");

router.post("/register", async (req, res)=>{
    
    const emailExist  = await User.findOne({email: req.body.email});

    if(emailExist){
        res.status(400).send("Email already exist");
        return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        email: req.body.email,
        name: req.body.name,
        hash: hashedPassword
    });

    user.save()
    .then(_res => {
        const token =  jwt.sign({email : user.email, hash: user.hash}, process.env.JWT_SECRET_KEY);
        res.header("auth-token", token).send(token);
    })
    .catch(err => res.status(400).json({"error": err}));
});


router.post('/login', async (req, res)=>{
    const user = await User.findOne({email : req.body.email});
    if(!user) return res.status(400).send("Invalid Email-ID");

    const validatePassword = await bcrypt.compare(req.body.password, user.password);

    if(!validatePassword) return res.status(400).send("Incorrect password");

    const token = jwt.sign({email : user.email, hash: user.hash}, process.env.JWT_SECRET_KEY);
    res.header("auth-token", token).send(token);
});
module.exports = router;