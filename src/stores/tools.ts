import { defineStore } from 'pinia'

export type Tool = {
  position: number
  name: string
  description: string
  url: string
  color: string
}

export const useToolsStore = defineStore('tools', {
  state: () => ({
    tools: [
      {
        position: 1,
        name: 'Soteria',
        description: 'Security misconfiguration detector for GitHub workflow files',
        url: 'https://github.com/aegis-forge/soteria',
        color: 'rgba(239, 67, 67, .4)',
      },
      {
        position: 2,
        name: 'Cage',
        description: 'Programmatically audit GitHub Actions workflow dependencies',
        url: 'https://github.com/aegis-forge/cage',
        color: 'rgba(113, 113, 122, .4)',
      },
    ] as Tool[],
  }),
  getters: {
    getSortedTools(): Tool[] {
      return this.tools.sort((a, b) => a.position - b.position)
    },
  },
})
