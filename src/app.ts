import express, { NextFunction, Request, Response } from "express";
import productRoute from "./routes/product.route";
import walletRouter from "./routes/wallet.route";
import cors from "cors";

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors({
  origin: false,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  credentials: true
}));

app.use("/api/product", productRoute);
app.use("/api/wallet", walletRouter);

app.get("/ping", (_req, res) => {
  res.send("pong!!!");
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
