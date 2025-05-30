import walletRepository from "../repository/wallet.repository"

export class WalletService {
  static getWallet = () => ({
    income: walletRepository.income,
    wholeValue: walletRepository.productsWholeValue,
  })

  static increaseProductsValue = (value: number) => {
    walletRepository.productsWholeValue += value;
  }

  static increaseIncome = (value: number) => {
    walletRepository.income += value;
  }
}