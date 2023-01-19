<template>
  <TopBar/>
  <router-view/>

</template>

<script setup>
import 'primevue/resources/themes/saga-blue/theme.css';   //theme
import 'primevue/resources/primevue.min.css';             //core css
import 'primeicons/primeicons.css';              

import TopBar from '@/components/TopBar'

  </script>
<style scope >


#app {
  font-family:  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  @apply bg-blue-100
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
