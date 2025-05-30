import { v4 } from 'uuid';

export interface IProduct {
  id: string;
  name: string;
  url?: string;
  quantity: number;
}

export class Product implements IProduct {
  public id: string = v4();
  constructor(public name: string, public url?: string, public quantity: number = 0) {}
}
