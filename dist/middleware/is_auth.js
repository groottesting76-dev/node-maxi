import jwt from 'jsonwebtoken';
const isAuth = (req, res, next) => {
    try {
        const header = req.headers.authorization;
        if (!header || !header.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Not authenticated" });
        }
        const token = header.split(" ")[1];
        const decoded = jwt.verify(token, "secret");
        if (typeof decoded !== "object" || !("userId" in decoded)) {
            return res.status(401).json({ message: "Invalid token" });
        }
        req.userId = decoded.userId;
        next();
    }
    catch (err) {
        return res.status(401).json({ message: "Authentication failed" });
    }
};
export default isAuth;
//# sourceMappingURL=is_auth.js.map