<template>
  <div class="flex flex-col w-3/4 border-l border-r pl-[50px] pr-[50px]">
    <div class="mt-[30px] mb-[30px] flex justify-center min-[1050px]:justify-between">
      <img src="../../assets/branding/logo-full.svg" alt="aegis-forge logo">
      
      <div class="hidden items-center gap-20 min-[1050px]:flex">
        <div class="flex gap-8">
          <div class="font-semibold">
            <a href="#tools" class="hover:underline">Tools</a>
          </div>
          
          <div class="font-semibold">
            <a href="#publications" class="hover:underline">Publications</a>
          </div>
          
          <div class="font-semibold">
            <a href="#people" class="hover:underline">People</a>
          </div>
        </div>
        
        <a href="https://github.com/aegis-forge" target="_blank">
          <i class="ri-github-fill text-[28px]"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  name: "NavbarComponent",
}
</script>
