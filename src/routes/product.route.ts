import { Router } from "express";
import { ProductController } from "../controller/product.controller";

const router = Router();

router.get("/", ProductController.findAll);
router.get("/:id", ProductController.findById);
router.post("/:id/add", ProductController.addProduct);
router.post("/", ProductController.createProduct);
router.delete("/:id", ProductController.deleteProduct);
router.patch("/:id/sell", ProductController.sellProduct);

export default router;
