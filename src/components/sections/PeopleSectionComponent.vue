<template>
  <div id="people">
    <header-component current="03" total="03" title="People" class="border-t" />

    <div class="flex flex-wrap overflow-hidden border-l w-[calc(100%+1px)] min-[1322px]:w-[calc(100%+2px)]">
      <div
        v-for="person in people"
        v-bind:key="person.position"
        class="flex flex-col text-center min-[597px]:flex-row min-[597px]:text-left items-center p-[40px] gap-10 border basis-full min-[1322px]:basis-1/2 grow-0 shrink-0 mt-[-1px] ml-[-1px]"
      >
        <img
          :src="getImage(person.fullName.split(' ').slice(-1)[0].toLowerCase())"
          :alt="person.fullName"
          class="w-[100px] rounded-full shadow-lg border"
        />

        <div class="flex flex-col gap-1">
          <p class="font-bold text-[19px]">{{ person.fullName }}</p>
          <p>{{ person.affiliation }}</p>
          <a :href="person.website" class="link">
            {{ person.website.replace('https://', '').replace('http://', '') }}
            <i class="ri-external-link-line" />
          </a>
        </div>

        <!-- <a :href="person.website" target="_blank" class="min-w-[30px]">
          <img src="../../assets/misc/arrow.svg" alt="right arrow" />
        </a>  -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapState } from 'pinia'
import HeaderComponent from '../basic/HeaderComponent.vue'
import { usePeopleStore, type Person } from '../../stores/people'

export default {
  name: 'PeopleSection',
  components: {
    HeaderComponent,
  },
  data() {
    return {
      people: this.getSortedPeople() as Person[],
    }
  },
  methods: {
    ...mapState(usePeopleStore, ['getSortedPeople']),
    getImage(surname: string): string {
      return new URL(`/src/assets/people/${surname}.jpg`, import.meta.url).href
    },
  },
}
</script>
