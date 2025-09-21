<template>
  <div class="border-b pt-[25px] pb-[25px] border-l border-r">
    <p class="!font-mono text-[#D1D1D1] text-[14px] min-[480px]:text-[18px] pl-[30px] border-l-2 !border-[#17A34A]">
      [ <span class="!font-mono text-[#17A34A]">{{ current }}</span> /
      {{ total }} ]&nbsp;&nbsp;·&nbsp;&nbsp;{{ title }}
    </p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'HeaderComponent',
  props: {
    current: {
      type: String,
      required: true,
    },
    total: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
