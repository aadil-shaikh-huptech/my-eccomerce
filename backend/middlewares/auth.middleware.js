import jwt from 'jsonwebtoken';

const authenticate = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        console.log("No token provided");
        return res.status(403).json({ msg: "Access Denied : No Token Provided" });
    }
    
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            res.clearCookie('token', {
                httpOnly: true,
            });
            console.log("Invalid token");
            return res.status(401).json({ msg: "Invalid token" });
        }
        req.userId = decoded.userId;
        
        next();
    });
};

export default authenticate;
