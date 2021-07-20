import Vue from "vue";
import Vuex from "vuex";
import { WalletState, WalletStore } from "./modules/wallet";

Vue.use(Vuex);

export interface RootState {
  wallet: WalletState;
}

export default new Vuex.Store<RootState>({
  modules: {
    wallet: WalletStore,
  },
});
