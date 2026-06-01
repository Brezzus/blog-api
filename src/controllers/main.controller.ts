import { RequestHandler } from "express";

export const getAllPosts: RequestHandler = async (req, res) => {
    return res.json({message: 'Obtendo todos os posts...'})
}

export const getPost: RequestHandler = async (req, res) => {
    return res.json({message: `Obtendo o post com slug: ${req.params.slug}`})
} 

export const getRelatedPosts: RequestHandler = async (req, res) => {
    return res.json({message: `Obtendo post relacionados ao post com slug: ${req.params.slug}`})
} 