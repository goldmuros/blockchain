import { Module, VuexModule } from "vuex-module-decorators";
import { INft } from "@/types/types";

export interface NftState {
  nfts: INft[];
}

@Module({
  name: "nft",
  namespaced: true,
})
export class NftStore extends VuexModule implements NftState {
  public nfts: INft[] = [
    {
      address: "02x4583290257094",
    },
    {
      address: "02x6565490257094",
    },
    {
      address: "02x4583295632111",
    },
    {
      address: "08x4536791523452",
    },
  ];

  get getListNft(): INft[] {
    return this.nfts;
  }
}
