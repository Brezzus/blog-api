import { Verify } from "node:crypto"
import { prisma } from "../libs/prisma"
import bcrypt from "bcryptjs"


type CreateUserProps = {
    name: string,
    email: string,
    password: string
}

export const createUser = async ({name, email, password} : CreateUserProps) => {email = email.toLowerCase()

    const user = await prisma.user.findFirst({
        where: { email }
    })

    if(user) return false

    const hashedPassword = await bcrypt.hash(password, 10)
    return await prisma.user.create({
    data: {
        name,
        email,
        password: hashedPassword
    }
    })
}

type verifyUserProps = {
    email:string,
    password: string
}

export const verifyUser = async ({ email, password }: verifyUserProps) => {
    email = email.toLowerCase()

    const user = await prisma.user.findFirst({
        where: { email }
    })
    if (!user) return false
    const isMatch = await bcrypt.compareSync(password, user.password)
    if (!isMatch) return false

    return user
}