import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { IWallet } from "@/types/wallet-types";
import * as wallet from "@/services/wallet";

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

  // eslint-disable-next-line
  public web3: any = {};

  get getAddress(): string {
    return this.wallet.address;
  }

  get getDataWallet(): IWallet {
    return this.wallet;
  }

  get getConnected(): boolean {
    return this.wallet.connected;
  }

  @Mutation
  // eslint-disable-next-line
  setWeb3(web3: any): void {
    this.wallet.address = web3.currentProvider.selectedAddress;
    this.wallet.connected = true;
  }

  @Mutation
  setDisconnect(): void {
    this.wallet.connected = false;
  }

  @Mutation
  setAccount(account: string): void {
    this.wallet.address = account;
  }

  @Action
  async connect(): Promise<void> {
    const web3 = await wallet.connect();
    this.setWeb3(web3);
  }

  @Action
  async disconnect(): Promise<void> {
    // const web3 = await wallet.connect();
    this.setDisconnect();
  }

  @Action
  async getAccount(): Promise<void> {
    const account = await wallet.account();

    this.setAccount(account);
  }
}
