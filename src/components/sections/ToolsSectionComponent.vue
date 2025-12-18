<template>
  <div id="tools">
    <header-component current="01" total="03" title="Tools" />

    <div
      class="flex flex-wrap overflow-hidden border-l w-[calc(100%+1px)] min-[1322px]:w-[calc(100%+2px)]"
    >
      <div
        v-for="tool in tools"
        v-bind:key="tool.position"
        class="flex flex-col items-stretch justify-stretch border basis-full min-[1322px]:basis-1/2 grow-0 shrink-0 mt-[-1px] ml-[-1px]"
      >
        <a
          class="flex flex-col items-center h-full gap-10 m-[10px] p-[40px] rounded-xl cursor-pointer text-center min-[597px]:text-left min-[597px]:flex-row"
          v-bind:class="active === tool.name.toLowerCase() ? 'border bg-white' : ''"
          @click="selectTool(tool.name.toLocaleLowerCase())"
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
        </a>
      </div>
    </div>

    <soteria-component v-if="active === 'soteria'" />
    <cage-component v-if="active === 'cage'" />
  </div>
</template>

<script lang="ts">
import { mapState } from 'pinia'
import HeaderComponent from '../basic/HeaderComponent.vue'
import SoteriaComponent from './tools/SoteriaComponent.vue'
import CageComponent from './tools/CageComponent.vue'
import { useToolsStore, type Tool } from '../../stores/tools'

export default {
  name: 'ToolsSectionComponent',
  components: {
    HeaderComponent,
    SoteriaComponent,
    CageComponent,
  },
  data() {
    return {
      active: 'soteria' as string,
      tools: this.getSortedTools() as Tool[],
    }
  },
  methods: {
    ...mapState(useToolsStore, ['getSortedTools']),
    getImage(name: string): string {
      return new URL(`/src/assets/icons/${name}.svg`, import.meta.url).href
    },
    selectTool(name: string) {
      this.active = name
    },
  },
}
</script>
