import { Router } from "express";
import { WalletController } from "../controller/wallet.controllet";

const router = Router();

router.get("/", WalletController.getWallet);

export default router;
