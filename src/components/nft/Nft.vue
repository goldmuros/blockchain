<template>
  <section>
    <div class="card" style="width: auto">
      <header class="card-head">
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
        <div class="container">
          <b-image />
          <b-button>hola</b-button>
        </div>
      </section>
      <footer class="modal-card-foot">
        <b-button label="Close" @click="$emit('close')" />
        <b-button label="Login" type="is-primary" />
      </footer>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Nft extends Vue {}
</script>

<style lang="scss" scoped>
.nft-title {
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
  line-height: 40px;
}
</style>
