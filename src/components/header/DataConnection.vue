<template>
  <div class="b-tooltips">
    <b-tooltip position="is-bottom" always>
      <b-icon icon="plus-circle-outline" size="is-small" />
      <template v-slot:content>
        
      </template>
    </b-tooltip>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import { WalletStore } from "@/store/modules/wallet";
import { IWallet } from "@/types/wallet-types";

@Component({})
export default class DataConnection extends Vue {
  get walletStore(): WalletStore {
    return getModule(WalletStore, this.$store);
  }

  get wallet(): IWallet {
    return this.walletStore.getDataWallet;
  }
}
</script>

<style lang="scss" scoped>
.wallet-adrres {
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
