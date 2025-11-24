import { Router } from "express";
import { login, signup } from "../controllers/auth.js";
import { body } from "express-validator";
import { User } from "../model/user.js";
import isAuth from "../middleware/is_auth.js";
const router = Router();
router.put('/signup', body('username').isLength({ min: 5 })
    .withMessage('Username must be at least 5 characters long.')
    .custom(async (value) => {
    return User.findOne({ username: value })
        .then(userDoc => {
        if (userDoc) {
            throw new Error('Username already exists. Please choose another one.');
        }
    });
}), body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long.'), signup);
router.post('/login', login);
export default router;
//# sourceMappingURL=auth.js.map