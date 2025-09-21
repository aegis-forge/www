import { defineStore } from 'pinia'

export type Person = {
  position: number
  fullName: string
  affiliation: string
  website: string
}

export const usePeopleStore = defineStore('people', {
  state: () => ({
    people: [
      {
        position: 1,
        fullName: 'Edoardo Riggio',
        affiliation: 'PhD Candidate · Software Institute @ USI Lugano',
        website: 'https://edoriggio.com',
      },
      {
        position: 2,
        fullName: 'Cesare Pautasso',
        affiliation: 'Professor · Software Institute @ USI Lugano',
        website: 'http://pautasso.org',
      },
    ] as Person[],
  }),
  getters: {
    getSortedPeople(): Person[] {
      return this.people.sort((a, b) => a.position - b.position)
    },
  },
})
