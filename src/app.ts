import express from "express";
import productRoute from './routes/product.route';
import walletRouter from './routes/wallet.route';

const PORT = 3000;

const app = express();

app.use(express.json());

app.use('/api/product', productRoute);
app.use('/api/wallet', walletRouter)

app.get('/ping', (req, res) => {
  res.send("pong!!!");
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})
