import { Request, Response } from "express";
import { WalletService } from "../service/wallet.service";

export class WalletController {
  static getWallet = (_req: Request, res: Response) => {
    const wallet = WalletService.getWallet();
    res.json(wallet);
    return;
  };
}
