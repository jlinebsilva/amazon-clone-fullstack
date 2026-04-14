import type { Request, Response } from "express";
import { Product, Seller } from "../models";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const newProduct = await Product.create(req.body)
    res.json(newProduct)
      .sendStatus(201)
      .send("Produto criado com sucesso")

    if (!newProduct || newProduct == null) {
      res.status(422).send("Valores inválidos ou campos incompletos")
    }

  } catch (error) {
    return res.status(500).json({
      error: "Erro ao criar Produto"
    })
  }
}

export const getProducts = async (_: Request, res: Response) => {
  try {
    const data = await Product.findAll({ include: Seller })
    res.json(data).sendStatus(200)

    if (!data) {
      return res.status(404).json({
        error: "Produto não encontrado"
      })
    }

  } catch (error) {
    return res.status(500).json({
      error: "Erro ao buscar Produto"
    })
  }
}

export const getProductById = async (req: Request, res: Response) => {
  try {
    const productData = await Product.findOne({ where: { id: req.params.id } })
    res.json(productData).sendStatus(200)

    if (!productData) {
      return res.status(404).json({
        error: "Produto não encontrado"
      })
    }

  } catch (error) {
    return res.status(500).json({
      error: `Erro ao buscar Produto com id ${req.params.id}`
    })
  }
}

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const productData = await Product.update(req.body, { where: { id: req.params.id } })
    res.json(productData)
      .sendStatus(204)
      .send("Produto atualizado com sucesso")

    if (!productData) {
      return res.status(404).json({
        error: "Produto não encontrado"
      })
    }

  } catch (error) {
    return res.status(500).json({
      error: `Erro ao atualizar produto ${req.params.id}`
    })
  }
}

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productData = await Product.destroy({ where: { id: req.params.id } })
    res.sendStatus(200)
      .send("Produto deletado com sucesso")

    if (!productData) {
      return res.status(404).json({
        error: "Produto não encontrado"
      })
    }

  } catch (error) {
    return res.status(500).json({
      error: "Erro ao buscar Produto"
    })
  }
}