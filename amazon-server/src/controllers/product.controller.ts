import type { Request, Response } from "express";
import { Product, Seller } from "../models";

export const createProduct = async (req: Request, res: Response) => {
  const data = await Product.create(req.body)
  res.json(data)
}

export const getProducts = async (_: Request, res: Response) => {
  const data = await Product.findAll({ include: Seller })
  res.json(data)
}

export const updateProduct = async (req: Request, res: Response) => {
  await Product.update(req.body, { where: { id: req.params.id } })
  res.sendStatus(204)
}

export const deleteProduct = async (req: Request, res: Response) => {
  await Product.destroy({ where: { id: req.params.id } })
  res.sendStatus(204)
}