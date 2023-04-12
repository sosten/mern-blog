import express from "express";
import User from "../models/userModel.js";

const userRouter = express.Router();

userRouter.post('/user', async(req, res) => {
    const newUser = new User({
        fullName: req.body.fullName,
        email: req.body.email,
        password: req.body.password
    });

    const user = await newUser.save();
    res.send({
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        password: user.password
    });
})

userRouter.post('/login', async(req, res) =>{
    const user = await User.findOne({email: req.body.email});
    if(user){
        res.send({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            password: user.password
        })
    }
    res.status(401).send({message: 'Invalied Email or Password'})
})

export default userRouter;