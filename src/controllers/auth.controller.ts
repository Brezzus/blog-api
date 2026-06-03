import { RequestHandler } from "express";
import { z } from "zod";
import { createUser } from "../services/user.service";

export const signIn: RequestHandler = async (req, res) => {

}

export const signUp: RequestHandler = async (req, res) => {
    const schema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string()
    })
    const data = schema.safeParse(req.body)
    if(!data.success) {
        return res.status(400).json ({error: data.error.flatten().fieldErrors})
    }
    const newUser = await createUser(data.data)
    if (!newUser) {
        return res.status(400).json({ error: 'email já cadastrado' })
    }

    const token = '123'
    res.status(201).json({
        message: 'Usuário criado com sucesso', 
        user: {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email
        },
        token
    })
}

export const validate: RequestHandler = async (req, res) => {
    
}