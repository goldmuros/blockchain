import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { IWallet } from "@/types/wallet-types";

export interface WalletState {
  wallet: IWallet;
}

@Module({
  name: "wallet",
  namespaced: true,
})
export class WalletStore extends VuexModule implements WalletState {
  public wallet: IWallet = {
    address: "",
    connected: false,
  };

  get getDataWallet(): IWallet {
    return this.wallet;
  }

  get getConnected(): boolean {
    return this.wallet.connected;
  }

  @Mutation
  setConnection(wallet: IWallet): void {
    this.wallet = wallet;
  }

  @Action
  async connect(): Promise<void> {
    // await this.clearCart();
    const wallet: IWallet = {
      address: "8943xGh098",
      connected: true,
    };
    this.setConnection(wallet);
  }
}
