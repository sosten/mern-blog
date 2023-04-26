import express from "express";
import bcrypt from "bcrypt";
import { generateToken, isAuth } from "../utils.js";
import User from "../models/userModel.js";

const userRouter = express.Router();

userRouter.post('/user', async(req, res) => {
    const saltPassword = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, saltPassword);
    const newUser = new User({
        fullName: req.body.fullName,
        email: req.body.email,
        password: hashPassword
    });

    const user = await newUser.save();
    res.send({
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        password: user.password,
        token: generateToken(user)
    });
})

userRouter.post('/login', async(req, res) =>{
    const user = await User.findOne({email: req.body.email});
    if(user){
        if(bcrypt.compareSync(req.body.password, user.password)){
            res.send({
                _id: user._id,
                fullName: user.fullName,
                email: user.email,
                password: user.password,
                token: generateToken(user)
            });
            return;
        }
    }
    res.status(401).send({message: 'Invalied Email or Password'})
});

userRouter.put('/user_profile',isAuth,async(req, res) => {
    const user = await User.findById(req.user._id);
    if(user){
        user.fullName = req.body.fullName || user.fullName;
        user.email = req.body.email || user.email;
        if(req.body.password){
            user.password = bcrypt.hashSync(req.body.password, 10) || user.password;
        }
        const updateUser = await user.save()
        res.send({
            _id: updateUser._id,
            fullName: updateUser.fullName,
            email: updateUser.email,
            password: updateUser.password,
            token: generateToken(updateUser)
        })
    }else{
        res.status(404).send({message: "User Not Found"})
    }
})

export default userRouter;