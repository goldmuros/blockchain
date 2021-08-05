<template>
  <section class="nft-section">
    <header>
      <div class="media">
        <div class="media-left">
          <p class="nft-title text-blue-title">NFT</p>
          <p class="text-blue-80">Mint and Visualize your NFTs</p>
        </div>
        <div class="media-right">
          <b-icon icon="information-outline" />
        </div>
      </div>
    </header>
    <section class="card-body">
      <div id="container-img" class="container">
        <b-image src="https://picsum.photos/id/1062/800/450" ratio="6by4" />
        <b-button class="back-blue has-text-white text-upper">
          mint new nft
        </b-button>
      </div>
      <ListNft :source="nftList" />
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import { NftStore } from "@/store/modules/nft";
import ListNft from "./List-Nft.vue";
import { INft } from "@/types/types";

@Component({
  components: {
    ListNft,
  },
})
export default class Nft extends Vue {
  get nftStore(): NftStore {
    return getModule(NftStore, this.$store);
  }

  get nftList(): INft[] {
    return this.nftStore.getListNft;
  }
}
</script>

<style lang="scss" scoped>
.nft-title {
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
  line-height: 40px;
}

.nft-section {
  margin-top: 20px;
  width: 50%;
}

#container-img {
  height: 140px;
}
</style>
