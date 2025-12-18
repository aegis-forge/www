<template>
  <div class="flex flex-col border-l border-r border-b">
    <div class="flex flex-row items-center border-b w-full h-[20px]"></div>

    <div class="flex flex-col min-[1029px]:flex-row">
      <div class="pt-[20px] min-[1029px]:border-r flex-2">
        <div class="mono pb-[20px] border-b">
          &nbsp;&nbsp;&nbsp;<span class="mono font-bold">Action:</span
          >&nbsp;&nbsp;tj-actions/branch-names<br />
          &nbsp;&nbsp;&nbsp;<span class="mono font-bold">version:</span>&nbsp;8.2.0<br />
          &nbsp;&nbsp;&nbsp;<span class="mono font-bold">date:</span>&nbsp;&nbsp;&nbsp;&nbsp;10 Dec
          2025
        </div>

        <div class="flex-col font-mono p-[20px] gap-3 h-min hidden min-[1029px]:flex">
          <span class="flex items-center gap-3 mono">
            <i class="ri-github-fill text-[28px]"></i>
            <a
              class="mono hover:underline"
              href="https://github.com/aegis-forge/cage"
              target="_blank"
            >
              <span class="text-[#D1D1D1] mono">aegis-forge/</span>cage
            </a>
          </span>

          <span class="flex items-center gap-3 mono">
            <i class="ri-puzzle-2-line text-[28px]"></i>
            <a
              class="mono hover:underline"
              href="https://pkg.go.dev/github.com/aegis-forge/cage"
              target="_blank"
            >
              pkg.go.dev/aegis-forge/cage
            </a>
          </span>
        </div>
      </div>

      <div class="mono p-[20px]">
        <img
          src="../../../assets/misc/arrow.svg"
          alt="arrow"
          class="absolute mt-[-35px] ml-[100px] rotate-90 min-[1029px]:mt-[20px] min-[1029px]:ml-[-35px] min-[1029px]:rotate-[360deg]"
        />
        { <br />
        &nbsp;&nbsp;<span class="mono font-bold">cve:</span> CVE-2025-54416, <br />
        &nbsp;&nbsp;<span class="mono font-bold">cwes:</span> CWE-77, <br />
        &nbsp;&nbsp;<span class="mono font-bold">cvss:</span>
        <span class="text-[#EF4343] mono font-bold"> 9.1</span>, <br />
        &nbsp;&nbsp;<span class="mono font-bold">publised:</span> 2025-07-25T19:28:22Z, <br />
        &nbsp;&nbsp;<span class="mono font-bold">vulnerable:</span> (v0.0.0,v8.2.1], <br />
        &nbsp;&nbsp;<span class="mono font-bold">patched:</span> v9.0.0 <br />
        }
      </div>
    </div>
    
    <div class="flex flex-col border-t font-mono p-[20px] gap-3 h-min min-[1029px]:hidden">
      <span class="flex items-center gap-3 mono">
        <i class="ri-github-fill text-[28px]"></i>
        <a
          class="mono hover:underline"
          href="https://github.com/aegis-forge/cage"
          target="_blank"
        >
          <span class="text-[#D1D1D1] mono">aegis-forge/</span>cage
        </a>
      </span>

      <span class="flex items-center gap-3 mono">
        <i class="ri-puzzle-2-line text-[28px]"></i>
        <a
          class="mono hover:underline"
          href="https://pkg.go.dev/github.com/aegis-forge/cage"
          target="_blank"
        >
          pkg.go.dev/aegis-forge/cage
        </a>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CageComponent',
}
</script>
