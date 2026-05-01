<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

const route = useRoute()

const headerTextColor = ref('#000')      // par défaut noir
const headerBorderColor = ref('#000') // par défaut vert
const headerQuorixColor = ref('#fff') // par défaut blanc
const headerQuorixBg = ref('#fff') // par défaut blanc
const quorixLogo = ref('/logo.svg')
const duckLogo = ref('/duck.svg')

watch(
  () => route.path,
  (path) => {
    if (path === '/') {
      headerTextColor.value = '#fff'     // blanc
      headerBorderColor.value = '#0c803f'   // vert
      headerQuorixColor.value = '#000'          //noir
      headerQuorixBg.value = '#fff'          //blanc
      duckLogo.value = '/svg/duck.svg'
      quorixLogo.value = '/svg/logoBlack.svg'
    }
  },
  { immediate: true }
)
</script>

<template>
  <Header 
  :textColor="headerTextColor"
  :borderColor="headerBorderColor" 
  :quorixColor="headerQuorixColor" 
  :bgQuorix="headerQuorixBg"
  :duckLogo="duckLogo"
  :quorixLogo="quorixLogo"
  class="w-full fixed top-0 left-0 z-50 overflow-x-hidden"></Header>
  <RouterView class="min-h-screen overflow-x-hidden"></RouterView>
  <Footer></Footer>
</template>

<style scoped>

</style>
