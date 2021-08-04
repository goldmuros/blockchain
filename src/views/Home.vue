<template>
  <div class="container">
    <TokenPool />
    <NFT />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NFT from "@/components/nft/Nft.vue";
import TokenPool from "@/components/token-pool/Token-pool.vue";

@Component({
  components: {
    NFT,
    TokenPool,
  },
})
export default class Home extends Vue {}
</script>
