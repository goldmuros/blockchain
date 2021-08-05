<template>
  <span>Empty</span>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class ListTokenCard extends Vue {
  @Prop() public tokenList!: string[];
}
</script>
