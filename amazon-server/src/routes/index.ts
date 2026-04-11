import { Router } from "express";
import * as seller from "../controllers/seller.controller";
import * as product from "../controllers/product.controller";

const router = Router()

router.post("/sellers", seller.createSeller)
router.get("/sellers", seller.getSellers)
router.put("/sellers/:id", seller.updateSeller)
router.delete("/sellers/:id", seller.deleteSeller)

router.post("/products", product.createProduct)
router.get("/products", product.getProducts)
router.put("/products/:id", product.updateProduct)
router.delete("/products/:id", product.deleteProduct)

export default router