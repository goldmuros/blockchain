<template>
  <b-navbar :transparent="true">
    <template #start> </template>
    <template #end>
      <div class="tab-container">
        <!-- <div class="coins-display"> -->
        <b-navbar-item tag="a" class="coins-display">
          <!-- <b-image class="img" alt="Ethix"></b-image> -->
          <span>{{ totalValueEthix }}</span>
          <span>Ethix</span>
        </b-navbar-item>
        <b-navbar-item tag="a" class="coins-display">
          <!-- <b-image class="img" alt="Ethix"></b-image> -->
          <span>{{ totalValueEther }}</span>
          <span>Ether</span>
        </b-navbar-item>
        <!-- </div> -->
        <b-navbar-item tag="a" class="connect">
          <!-- <b-image class="img" alt="Ethix"></b-image> -->
          <div class="coins-display">
            <template v-if="connected">
              <DataConnection />
            </template>
            <template v-else>
              <b-button class="is-primary" @click="connect">Connect</b-button>
            </template>
          </div>
        </b-navbar-item>
      </div>
    </template>
  </b-navbar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import { WalletStore } from "@/store/modules/wallet";
import DataConnection from "@/components/header/DataConnection.vue";

@Component({
  components: {
    DataConnection,
  },
})
export default class Header extends Vue {
  get walletStore(): WalletStore {
    return getModule(WalletStore, this.$store);
  }

  get connected(): boolean {
    return this.walletStore.getConnected;
  }

  public get totalValueEthix(): number {
    return 0;
  }

  public get totalValueEther(): number {
    return 0;
  }

  public async connect(): Promise<void> {
    this.walletStore.connect();
  }
}
</script>

<style lang="scss" scoped>
.coins__div {
  display: flex;
  justify-content: space-between;
}

.connect {
  display: flex;
  justify-content: center;
  margin-right: -50px;
  width: 200px;
  background: #2eee68;
  border-radius: 0 0 0 36px;
  // transform: skew(23deg);
  height: 100%;
}

.coins-display {
  // display: inline;
  // align-items: center;
  // justify-content: center;
  // position: relative;
  // height: auto;
  // width: auto;
  // border-radius: 0;
  // min-width: 100px;
  // background: none;
  // padding: 0 0 0 25px;
  transform: skew(-23deg);
}

// .coins-display1 {
// box-sizing: inherit;
// // content: "";
// // position: absolute;
// // display: block;
// top: 0;
// // right: -50px;
// height: 100%;
// // width: calc(100% + 50px);
// width: 500px;
// background: #f3f5f7;
// border-radius: 0 0 0 36px;
// transform: skew(23deg);
// }

.tab-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 500px;
  background: #f3f5f7;
  border-radius: 0 0 0 36px;
  transform: skew(23deg);
  height: 100%;
}

// .img {
//   background-image: url("~@/assets/img/ethix.svg");
// }
</style>
