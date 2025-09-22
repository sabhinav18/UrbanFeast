import jwt from "jsonwebtoken"

const authMiddleware = async (req,res,next) => {
    const {token} = req.headers;
    if(!token) {
        return res.json({success:false,message:"Not authorized Login Again"})
    }
    try {
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
        if(!req.body) req.body = {};// Ensure req.body exists
        req.body.userId = token_decode.id;
        req.user = token_decode;//just for checking

        // attach user id to request body
        req.body.userId = token_decode.id;
        next();

    } catch (error) {
        console.log(error);
        res.json({success:false,message:'Error'})
    }
}

export default authMiddleware