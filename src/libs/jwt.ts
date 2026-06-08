import jwt from "jsonwebtoken";

export const crateJWT = (payload: any) => {
    return jwt.sign(
        payload,
        process.env.JWT_SECRET_KEY as string
    )
} 