import { User } from "@prisma/client";
import { crateJWT } from "../libs/jwt";

export const createToken = (user: User) => {
    return crateJWT ({ id: user.id })
}