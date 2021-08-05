<template>
  <b-table
    :data="source"
    paginated
    backend-pagination
    :total="maxData"
    :per-page="dataPerPage"
  >
    <b-table-column field="address" centered v-slot="props">
      {{ props.row.address }}
    </b-table-column>
    <b-table-column centered>
      <b-button class="tag">Visualize</b-button>
    </b-table-column>
  </b-table>
</template>

<script lang="ts">
import { INft } from "@/types/types";
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

@Component({})
export default class ListNft extends Vue {
  public maxData = 0;
  public dataPerPage = 5;
  @Prop() public source?: INft[];

  @Watch("source", { immediate: true })
  public initLoad(): void {
    this.maxData = this.source?.length ?? 0;
  }
}
</script>
