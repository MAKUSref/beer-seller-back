import { Request, Response } from "express";
import { IProduct } from "../model/product";
import { ProductService } from "../service/product.service";

export class ProductController {
  static findAll = (
    _req: Request,
    res: Response
  ) => {
    
    const products = ProductService.findAll();
    console.log('get', products);
    res.json(products);
  };

  static findById = (
    req: Request,
    res: Response
  ) => {
    const productId = req.params.id;
    const product = ProductService.findById(productId);
    res.json(product);
  };

  static addProduct = (
    req: Request<any, any, { quantity: number, pricePerOne: number }>,
    res: Response
  ) => {
    const productId = req.params.id;
    const { quantity, pricePerOne } = req.body;
    try {
      ProductService.addProduct(productId, quantity, pricePerOne);
      res.status(201).json();
      return;
    } catch (e) {
      res.status(400).json();
      return;
    }
  };

  static createProduct = (
    req: Request<any, any, Omit<IProduct, "id" | "quantity">>,
    res: Response
  ) => {
    const data = req.body;

    console.log(data);
    
    try {
      ProductService.createProduct(data);
      res.status(201).json();
      return;
    } catch (e) {
      res.status(400).json();
      return;
    }
  };

  static deleteProduct = (
    req: Request,
    res: Response
  ) => {
    const productId = req.params.id;
    try {
      ProductService.deleteProduct(productId);
      res.status(200).json();
      return;
    } catch (e) {
      res.status(400).json();
      return;
    }
  };

  static sellProduct = (
    req: Request<any, any, { quantity: number, sellPrice: number }>,
    res: Response
  ) => {
    const productId = req.params.id;
    const { quantity, sellPrice } = req.body;
    try {
      ProductService.sellProduct(productId, quantity, sellPrice);
      res.status(201).json();
      return;
    } catch (e) {
      res.status(400).json();
      return;
    }
  };
}
