
import type { Request, Response, NextFunction } from "express";
import { User } from "../model/user.js";
import { validationResult } from "express-validator";
import { hash, compare } from 'bcryptjs';
import jwt from "jsonwebtoken";
const { sign, verify } = jwt;


const signup = (req: Request, res: Response, next: NextFunction) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(500).json({
            message: 'Validation failed.',
            errors: error.array()
        });
    }
    const { username, password } = req.body;

    hash(password, 12)
        .then((pw) => {
            const newUser = new User({
                username,
                password: pw,
                createdAt: new Date()
            });
            return newUser.save();
        })
        .then((result) => {
            res.status(201).json({
                message: 'User created successfully!',
                userId: result._id
            });
        })
        .catch((err) => {
            next(err);
        });
};

const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        const isEqual = await compare(password, user.password);
        if (!isEqual) {
            return res.status(401).json({ message: "Wrong password" });
        }

        const token = sign(
            { username, userId: user._id.toString() },
            "secret",
            { expiresIn: "1h" }
        );

        res.status(200).json({
            token,
            userId: user._id.toString()
        });
    } catch (err) {
        next(err);
    }
};

export {
    signup,
    login
}