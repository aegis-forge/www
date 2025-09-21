<template>
  <div class="flex flex-col w-3/4">
    <hero-section-component />
    <hr />
    <tools-section-component />
    <div class="h-[150px] border-l border-r" />
    <publications-section-component />
    <div class="h-[150px] border-l border-r" />
    <people-section-component />
    <div class="h-[100px] border-l border-r" />
  </div>
</template>

<script lang="ts">
import PublicationsSectionComponent from '../components/sections/PublicationsSectionComponent.vue'
import HeroSectionComponent from '../components/sections/HeroSectionComponent.vue'
import ToolsSectionComponent from '../components/sections/ToolsSectionComponent.vue'
import PeopleSectionComponent from '../components/sections/PeopleSectionComponent.vue'

export default {
  name: 'HomePage',
  components: {
    HeroSectionComponent,
    ToolsSectionComponent,
    PublicationsSectionComponent,
    PeopleSectionComponent,
  },
}
</script>
