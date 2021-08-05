<template>
  <section class="token-section">
    <header>
      <div>
        <div id="token-title">
          <p class="token-title text-blue-title">Ethix Tokens Pools</p>
          <b-icon icon="information-outline" />
        </div>
        <p class="text-blue-80">
          Stake Ethix to Support communities and earn Ethix.
        </p>
      </div>
    </header>
    <section class="card-body">
      <ListTokenCard :source="tokenList" />
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ListTokenCard from "./List-Token-Card.vue";

@Component({
  components: {
    ListTokenCard,
  },
})
export default class TokenPool extends Vue {
  get tokenList(): string[] {
    return [];
  }
}
</script>

<style lang="scss" scoped>
.token-title {
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
  line-height: 40px;
  margin-left: 0;
}

.token-section {
  margin-top: 20px;
  width: 50%;
  height: 100%;
}

#token-title {
  display: flex;
  flex-direction: row;
}
</style>
