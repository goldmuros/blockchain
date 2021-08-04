<template>
  <div class="b-tooltips">
    <b-tooltip
      position="is-bottom"
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
import TooltipCard from "@/components/header/TooltipCard.vue";

@Component({
  components: {
    TooltipCard,
  },
})
export default class DataConnection extends Vue {}
</script>
