<template>
  <b-navbar :transparent="true">
    <template #start>
      <b-image class="logo" />
    </template>
    <template #end>
      <div class="tab-container">
        <b-navbar-item tag="a" class="coins-display">
          <span>{{ totalValueEthix }}</span>
          <span>Ethix</span>
        </b-navbar-item>
        <b-navbar-item tag="a" class="coins-display">
          <span>{{ totalValueEther }}</span>
          <span>Ether</span>
        </b-navbar-item>
        <b-navbar-item tag="a" class="connect">
          <div class="coins-display">
            <template v-if="connected">
              <div class="coins__div">
                <span class="wallet-address text-blue-title">
                  {{ address }}
                </span>
                <DataConnection />
              </div>
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

  get address(): string {
    return this.walletStore.getAddress;
  }

  public get totalValueEthix(): number {
    return 0;
  }

  public get totalValueEther(): number {
    return 0;
  }

  public async connect(): Promise<void> {
    await this.walletStore.connect();
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
  height: 100%;
}

.coins-display {
  transform: skew(-23deg);
}

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

.logo {
  border: 1px solid black;
  position: absolute;
  width: 207px;
  height: 40px;
  left: 28px;
  top: 21px;
  background-image: url("../../assets/logo.png");
  object-fit: cover;
}

.wallet-address {
  position: absolute;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 12px;
  display: flex;
  align-items: center;
  color: #062f4f;
}
</style>
