<template>
  <div id="publications" class="border-t">
    <header-component current="02" total="03" title="Publications" />

    <div class="flex flex-wrap overflow-hidden border-l w-[calc(100%+1px)]">
      <div
        v-for="(publication, ind) in publications"
        v-bind:key="publication.date.getTime()"
        class="flex flex-col min-[597px]:flex-row items-center border w-full mt-[-1px] ml-[-1px]"
      >
        <div
          class="flex justify-center items-center !font-mono text-[#D1D1D1] text-[18px] w-full h-full border-b min-[597px]:border-r min-[597px]:w-[100px] min-h-[100px] min-w-[100px]"
        >
          [ {{ publication.typz }}{{ String(publications.length - ind).padStart(2, '0') }} ]
        </div>

        <div class="flex w-full h-full items-center pr-5 pl-5 m-5 min-[597px]:pl-0 min-[597px]:pr-0">
          <p class="text-justify break-words">
            {{ publication.authors }},
            "<a :href="publication.link" target="_blank" class="link">
              {{ publication.title }}
            </a>",
            {{ publication.venue }},
            {{ publication.publisher }},
            {{ publication.date.getFullYear() }},
            <span v-if="publication.doi !== ''">
              doi:
              <a :href="publication.doi" class="link break-all" target="_blank">
                {{ publication.doi.replace('https://doi.org/', '') }}
              </a>.
            </span>
            <span v-else>in press.</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { usePublicationsStore, type Publication } from '../../stores/publications'
import { mapState } from 'pinia'
import HeaderComponent from '../basic/HeaderComponent.vue'

export default {
  name: 'PublicationsSectionComponent',
  components: {
    HeaderComponent,
  },
  data() {
    return {
      publications: this.getSortedPublications() as Publication[],
    }
  },
  methods: {
    ...mapState(usePublicationsStore, ['getSortedPublications']),
  },
}
</script>
