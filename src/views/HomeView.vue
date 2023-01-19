<template>
  <FadeInOut :duration="500" mode="in-out">
  <div v-if="show">
   <HomeCarousel/>

<FeaturesSection/>
  </div>
</FadeInOut>
</template>

<script setup>
// @ is an alias to /src
import HomeCarousel from '@/components/HomeCarousel.vue';
import FeaturesSection from '@/components/FeaturesSection.vue';
import { FadeInOut } from 'vue3-transitions'
import { ref, onMounted } from 'vue';

const show = ref(false);

onMounted(()=>{
  show.value = true;
  console.log("mounted home");
});
</script>


<style>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 1.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>
