import type { Request, Response } from "express";
import { Seller } from "../models";

export const createSeller = async (req: Request, res: Response) => {
  try {
    const newSeller = await Seller.create(req.body)
    res.json(newSeller)
      .sendStatus(201)
      .send("Vendedor criado com sucesso")

    if (!newSeller || newSeller == null) {
      res.status(422).send("Valores inválidos ou campos incompletos")
    }

  } catch (error) {
    return res.status(500).json({
      error: "Erro ao criar Vendedor"
    })
  }
}

export const getSellers = async (_: Request, res: Response) => {
  try {
    const data = await Seller.findAll()
    res.json(data).sendStatus(200)

    if (!data) {
      return res.status(404).json({
        error: "Vendedor não encontrado"
      })
    }

  } catch (error) {
    return res.status(500).json({
      error: "Erro ao criar Vendedor"
    })
  }
}

export const getSellerById = async (req: Request, res: Response) => {
  try {
    const sellerData = await Seller.findOne({ where: { id: req.params.id } })
    res.json(sellerData).sendStatus(200)

    if (!sellerData) {
      return res.status(404).json({
        error: "Vendedor não encontrado"
      })
    }

  } catch (error) {
    return res.status(500).json({
      error: `Erro ao buscar Vendedor com id ${req.params.id}`
    })
  }
}

export const updateSeller = async (req: Request, res: Response) => {
  try {
    const sellerData = await Seller.update(req.body, { where: { id: req.params.id } })
    res.json(sellerData)
      .sendStatus(204)
      .send("Vendedor atualizado com sucesso")

    if (!sellerData) {
      return res.status(404).json({
        error: "Vendedor não encontrado"
      })
    }

  } catch (error) {
    return res.status(500).json({
      error: `Erro ao atualizar vendedor com id ${req.params.id}`
    })
  }
}

export const deleteSeller = async (req: Request, res: Response) => {
  try {
    const sellerData = await Seller.destroy({ where: { id: req.params.id } })
    res.sendStatus(200)
      .send("Vendedor deletado com sucesso")

    if (!sellerData) {
      return res.status(404).json({
        error: "Vendedor não encontrado"
      })
    }

  } catch (error) {
    return res.status(500).json({
      error: `Erro ao buscar Vendedor ${req.params.id}`
    })
  }
}