<template>
  <div class="b-tooltips">
    <b-tooltip
      position="is-bottom"
      always
      type="is-white"
      :auto-close="['outside', 'escape']"
    >
      <b-button
        type="is-info"
        icon-right="plus-circle-outline"
        size="is-small"
      />
      <template v-slot:content>
        <TooltipCard />
      </template>
    </b-tooltip>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import { WalletStore } from "@/store/modules/wallet";
// import { IWallet } from "@/types/wallet-types";
import TooltipCard from "@/components/TooltipCard.vue";

@Component({
  components: {
    TooltipCard,
  },
})
export default class DataConnection extends Vue {
  get walletStore(): WalletStore {
    return getModule(WalletStore, this.$store);
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
