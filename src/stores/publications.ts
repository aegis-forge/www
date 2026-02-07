import { defineStore } from 'pinia'

export type Publication = {
  authors: string
  title: string
  venue: string
  publisher: string
  typz: string
  link: string
  doi: string
  date: Date
}

export const usePublicationsStore = defineStore('publications', {
  state: () => ({
    publications: [
      {
        authors: 'E. Riggio and C. Pautasso',
        title: 'Changing Nothing, Yet Changing Everything: Exploring Rug Pulls in GitHub Workflows',
        venue: '23rd IEEE International Conference on Software Architecture (ICSA)',
        publisher: 'IEEE',
        typz: 'C',
        link: '',
        doi: '',
        date: new Date('2025-12-01'),
      },
      {
        authors: 'E. Riggio and C. Pautasso',
        title: 'Pipelines Under Pressure: An Empirical Study of Security Misconfigurations of GitHub Workflows',
        venue: '26th International Conference on Product-Focused Software Process Improvement (PROFES)',
        publisher: 'Springer',
        typz: 'C',
        link: 'https://raw.githubusercontent.com/edoriggio/www/main/src/assets/pdfs/rigg2025a.pdf',
        doi: '10.1007/978-3-032-12089-2_14',
        date: new Date('2025-12-01'),
      },
      {
        authors: 'S. Serbout, D. C. Muñoz Hurtado, H. Atwi, E. Riggio, and C. Pautasso',
        title: 'EVOSCAT: Exploring Software Change Dynamics in Large-Scale Historical Datasets',
        venue: '13th IEEE Working Conference on Software Visualization (VISSOFT)',
        publisher: 'IEEE',
        typz: 'C',
        link: 'https://raw.githubusercontent.com/edoriggio/www/main/src/assets/pdfs/souh2025b.pdf',
        doi: '10.1109/VISSOFT67405.2025.00021',
        date: new Date('2025-09-01'),
      },
    ] as Publication[],
  }),
  getters: {
    getSortedPublications(): Publication[] {
      return this.publications.sort((a, b) => b.date.getTime() - a.date.getTime())
    },
  },
})
