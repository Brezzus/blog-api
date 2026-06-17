import { NextFunction, Response, Request} from "express";
import { ExtendedRequest } from "../types/extended-request";
import { verifyRequest } from "../services/auth.service";

export const privateRoute = async (
    req: ExtendedRequest,
    res: Response,
    next: NextFunction
) => {
    const user = await verifyRequest(req)
    if (!user) {
        return res.status(401).json({ error: 'Unathorized' })
    }
    req.user = user
    next()
}