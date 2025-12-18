<template>
  <div class="flex flex-col border-l border-r border-b">
    <div class="flex flex-row items-center border-b w-full">
      <div class="hidden flex-row border-r p-[20px] gap-[10px] min-[597px]:flex">
        <div v-for="i in [0, 1, 2]" class="border rounded-full w-[20px] h-[20px]" :key="i" />
      </div>

      <span class="mono ml-[30px] mr-[30px]">
        <span class="text-[#D1D1D1] mono">.github/workflows/</span>deploy.yml
      </span>
    </div>

    <div class="flex flex-col min-[1029px]:flex-row">
      <div class="mono mt-[20px] mb-[20px] flex-2">
        <span class="text-[#D1D1D1] mono">&nbsp;&nbsp;&nbsp;1</span> &nbsp;&nbsp;
        <span class="text-[#17A34A] mono">name</span>: Deploy<br />
        <span class="text-[#D1D1D1] mono">&nbsp;&nbsp;&nbsp;2</span> <br />
        <span class="text-[#D1D1D1] mono">&nbsp;&nbsp;&nbsp;3</span> &nbsp;&nbsp;
        <span class="text-[#17A34A] mono">on</span>:<br />
        <span class="text-[#D1D1D1] mono">&nbsp;&nbsp;&nbsp;4</span>
        &nbsp;&nbsp;&nbsp;&nbsp; <span class="text-[#17A34A] mono">push</span>:<br />
        <span class="text-[#D1D1D1] mono">&nbsp;&nbsp;&nbsp;5</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; branches: [main]<br />
        <span class="text-[#D1D1D1] mono">&nbsp;&nbsp;&nbsp;6</span> <br />
        <span class="text-[#D1D1D1] mono">&nbsp;&nbsp;&nbsp;7</span> &nbsp;&nbsp;
        <span class="underline decoration-wavy underline-offset-4 decoration-[#EF4343]"
          ><span class="text-[#17A34A] mono">permissions</span>: read-all<br
        /></span>
        <span class="text-[#D1D1D1] mono">&nbsp;&nbsp;&nbsp;8</span> <br />
        <span class="text-[#D1D1D1] mono">&nbsp;&nbsp;&nbsp;9</span> &nbsp;&nbsp;
        <span class="text-[#17A34A] mono">jobs</span>:<br />
        <span class="text-[#D1D1D1] mono">&nbsp;&nbsp;&nbsp;10</span> &nbsp;&nbsp;&nbsp;&nbsp;
        <span class="text-[#17A34A] mono">build</span>:<br />
        <span class="text-[#D1D1D1] mono">&nbsp;&nbsp;&nbsp;11</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class="text-[#17A34A] mono">name</span>: Build<br />
        <span class="text-[#D1D1D1] mono">&nbsp;&nbsp;&nbsp;12</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class="text-[#17A34A] mono">runs-on</span>:
        ubuntu-latest<br />
        <span class="text-[#D1D1D1] mono">&nbsp;&nbsp;&nbsp;13</span> <br />
        <span class="text-[#D1D1D1] mono">&nbsp;&nbsp;&nbsp;14</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class="text-[#17A34A] mono">steps</span>:<br />
        <span class="text-[#D1D1D1] mono">&nbsp;&nbsp;&nbsp;15</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -
        <span class="text-[#17A34A] mono">name</span>: Clone repository<br />
        <span class="text-[#D1D1D1] mono">&nbsp;&nbsp;&nbsp;16</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="underline decoration-wavy underline-offset-4 decoration-[#EF4343]"
          ><span class="text-[#17A34A] mono">uses</span>: actions/checkout@v4.2.2<br
        /></span>
      </div>

      <div
        class="flex flex-col border-t min-[915px]:flex-row min-[915px]:justify-between min-[1029px]:flex-col min-[1029px]:justify-start min-[1029px]:border-t-0 min-[1029px]:border-l"
      >
        <div class="mono p-[20px] border-b min-[915px]:border-b-0 min-[1029px]:border-b">
          <img src="../../../assets/misc/arrow.svg" alt="arrow" class="absolute mt-[-35px] ml-[100px] rotate-90 min-[915px]:mt-[58px] min-[915px]:ml-[-35px] min-[915px]:rotate-[360deg]">
          7 permissions: read-all <br />
          <span class="text-[#F4AA41] font-bold mono">&nbsp;&nbsp;^~~~ coarse-permission </span>
          <br />
          16 uses: actions/checkout@v4.2.2 <br />
          <span class="text-[#08F] font-bold mono"
            >&nbsp;&nbsp;&nbsp;^~~~ no-hash-version-pin
          </span>
          <br /><br />
          Results: <span class="text-[#08F] font-bold mono">LOW</span> 1;
          <span class="text-[#F4AA41] font-bold mono">MEDIUM</span> 1
        </div>

        <div
          class="flex flex-col font-mono p-[20px] gap-3 h-min min-[915px]:border-l min-[1029px]:border-l-0 min-[1029px]:border-b"
        >
          <span class="flex items-center gap-3 mono">
            <i class="ri-github-fill text-[28px]"></i>
            <a
              class="mono hover:underline"
              href="https://github.com/aegis-forge/soteria"
              target="_blank"
            >
              <span class="text-[#D1D1D1] mono">aegis-forge/</span>soteria
            </a>
          </span>

          <span class="flex items-center gap-3 mono">
            <i class="ri-github-fill text-[28px]"></i>
            <a
              class="mono hover:underline"
              href="https://github.com/aegis-forge/soteria-vscode"
              target="_blank"
            >
              <span class="text-[#D1D1D1] mono">aegis-forge/</span>soteria-vscode
            </a>
          </span>

          <span class="flex items-center gap-3 mono">
            <i class="ri-puzzle-2-line text-[28px]"></i>
            <a
              class="mono hover:underline"
              href="https://marketplace.visualstudio.com/items?itemName=aegis-forge.soteria"
              target="_blank"
            >
              aegis-forge.soteria
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SoteriaComponent',
}
</script>
