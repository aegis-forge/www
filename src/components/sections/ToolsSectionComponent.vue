<template>
  <div id="tools">
    <header-component current="01" total="03" title="Tools" />

    <div class="flex flex-wrap overflow-hidden border-l w-[calc(100%+1px)] min-[1322px]:w-[calc(100%+2px)]">
      <div
        v-for="tool in tools"
        v-bind:key="tool.position"
        class="flex flex-col text-center min-[597px]:flex-row min-[597px]:text-left items-center justify-around p-[40px] gap-10 border basis-full min-[1322px]:basis-1/2 grow-0 shrink-0 mt-[-1px] ml-[-1px]"
      >
        <img
          :src="getImage(tool.name.toLowerCase())"
          :alt="tool.name + ' logo'"
          class="w-[50px]"
          :style="'filter: drop-shadow(0 0 15px ' + tool.color + ')'"
        />

        <div class="flex flex-col gap-1">
          <p class="font-bold text-[19px]">{{ tool.name }}</p>
          <p>{{ tool.description }}</p>
        </div>

        <a :href="tool.url" target="_blank" class="min-w-[30px]">
          <img src="../../assets/misc/arrow.svg" alt="right arrow" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapState } from 'pinia'
import HeaderComponent from '../basic/HeaderComponent.vue'
import { useToolsStore, type Tool } from '../../stores/tools'

export default {
  name: 'ToolsSectionComponent',
  components: {
    HeaderComponent,
  },
  data() {
    return {
      tools: this.getSortedTools() as Tool[],
    }
  },
  methods: {
    ...mapState(useToolsStore, ['getSortedTools']),
    getImage(name: string): string {
      return new URL(`/src/assets/icons/${name}.svg`, import.meta.url).href
    },
  },
}
</script>
