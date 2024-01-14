<script setup>
import { RouterView } from 'vue-router'
import MainMenu from './components/MainHeader.vue'
import MainFooter from './components/MainFooter.vue'

</script>

<template>
  <MainMenu />
  <RouterView />
  <MainFooter />
</template>

<style scoped>

</style>
