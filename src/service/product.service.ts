import { IProduct } from "../model/product";
import productRepository from "../repository/product.repository";
import { WalletService } from "./wallet.service";

export class ProductService {
  static findAll = () => {
    return productRepository.findAll();
  };

  static findById = (productId: string) => {
    return productRepository.findById(productId);
  };

  static addProduct = (productId: string, quantity: number, pricePerOne: number) => {
    const product = this.findById(productId);
    if (!product) {
      throw new Error();
    }
    
    const fullProductsPrice = pricePerOne * quantity;
    WalletService.increaseProductsValue(fullProductsPrice);
    return productRepository.addProduct(product, quantity);
  }

  static createProduct = (data: Omit<IProduct, "id" | "quantity">) => {
    return productRepository.createProduct(data);
  };

  static deleteProduct = (productId: string) => {
    const product = this.findById(productId);
    if (!product || product.quantity > 0) {
      throw new Error();
    }
    return productRepository.deleteProduct(productId);
  };

  static sellProduct = (productId: string, quantity: number, sellPrice: number) => {
    const product = this.findById(productId);
    if (!product) {
      throw new Error();
    }
    if (product.quantity < quantity) {
      throw new Error();
    }

    WalletService.increaseIncome(sellPrice);
    return productRepository.sellProduct(product, quantity);
  }
}
