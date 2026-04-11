import type { Request, Response } from "express";
import { Seller } from "../models";

export const createSeller = async (req: Request, res: Response) => {
  const data = await Seller.create(req.body)
  res.json(data)
}

export const getSellers = async (_: Request, res: Response) => {
  const data = await Seller.findAll()
  res.json(data)
}

export const updateSeller = async (req: Request, res: Response) => {
  await Seller.update(req.body, { where: { id: req.params.id } })
  res.sendStatus(204)
}

export const deleteSeller = async (req: Request, res: Response) => {
  await Seller.destroy({ where: { id: req.params.id } })
  res.sendStatus(204)
}