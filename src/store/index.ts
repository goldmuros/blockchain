import Vue from "vue";
import Vuex from "vuex";
import { WalletState, WalletStore } from "./modules/wallet";
import { NftState, NftStore } from "./modules/nft";

Vue.use(Vuex);

export interface RootState {
  wallet: WalletState;
  nft: NftState;
}

export default new Vuex.Store<RootState>({
  modules: {
    wallet: WalletStore,
    nft: NftStore,
  },
});
