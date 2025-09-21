<template>
  <div class="h-full">
    <div class="flex flex-col justify-center items-center">
      <navbar-component />
      <hr class="w-full" />
      <router-view />
      <hr class="w-full" />
      <footer-component />
    </div>
  </div>
</template>

<script lang="ts">
import { RouterView } from 'vue-router'
import NavbarComponent from './components/navigation/NavbarComponent.vue'
import FooterComponent from './components/navigation/FooterComponent.vue'

export default {
  components: {
    RouterView,
    NavbarComponent,
    FooterComponent,
  },
}
</script>
