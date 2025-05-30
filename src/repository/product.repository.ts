import { IProduct, Product } from "../model/product";

class ProductRepository {
  products: Product[] = [];

  findAll() {
    return this.products;
  }

  findById(productId: string) {
    const products = this.findAll();
    return products.find((p) => p.id === productId);
  }

  addProduct(product: Product, quantity: number) {
    this.products = this.products.map((p) => ({
      ...product,
      quantity:
        p.id === product.id
          ? p.quantity + quantity
          : p.quantity,
    }));
  }

  createProduct({ name, url }: Omit<IProduct, "id" | "quantity">) {
    const newProduct = new Product(name, url);
    this.products = [...this.products, newProduct];
  }

  deleteProduct(productId: string) {
    this.products = this.products.filter((product) => product.id !== productId);
  }

  sellProduct(product: Product, quantity: number) {
    this.products = this.products.map((p) => ({
      ...product,
      quantity:
        p.id === product.id
          ? p.quantity - quantity
          : p.quantity,
    }));
  }
}

const productRepository = new ProductRepository();
export default productRepository;
