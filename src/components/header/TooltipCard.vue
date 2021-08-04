<template>
  <div class="modal-card" style="width: auto">
    <section class="modal-card-content">
      <div class="address">
        <span>Dirección Ethix</span>
        <b-button type="is-info">{{ address }}</b-button>
      </div>
      <div class="center">
        <div class="address">
          <b-icon icon="clipboard-check-multiple-outline" />
          <a href="#">Copiar al portapapeles</a>
        </div>
        <div class="address separator">
          <b-icon icon="call-made" />
          <a href="#">Ver en Etherscan</a>
        </div>
      </div>
    </section>
    <footer class="card-foot center">
      <span class="disconnect" @click="disconnect">Disconnect</span>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import { WalletStore } from "@/store/modules/wallet";

@Component({})
export default class TooltipCard extends Vue {
  get walletStore(): WalletStore {
    return getModule(WalletStore, this.$store);
  }

  get address(): string {
    return this.walletStore.getAddress;
  }

  public async disconnect(): Promise<void> {
    await this.walletStore.disconnect();
  }
}
</script>

<style lang="scss" scoped>
.address {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.center {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.separator {
  border-left: 2px solid rgb(91, 92, 91);
  height: 40px;
}
.disconnect {
  border-bottom: 5px solid #2eee68;
  text-transform: uppercase;
}
</style>
