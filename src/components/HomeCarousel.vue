<template>
    <carousel :items-to-show="1" :transition="500" v-bind:wrap-around="true">
      <Slide v-for="slide in slided" :key="slide.z">
       
        <img 
        class="carousel__item"
        v-bind:src="slide.pathx" alt="not loaded">
        <h1 class="absolute font-bold
        text-4xl md:text-6xl
        lg:text-8xl antialiased indent-3
          text-white top-14
           left-14 ">Bienvenue <br> à A S E I MC</h1>

           <div class="absolute font-bold
           text-8xl antialiased indent-3
            text-white bottom-14
             right-14 ">
             <button class="button1 flex flex-row gap-4">
              <i class="pi pi-heart-fill text-xl font-semibold lg:font-bold lg:text-3xl"></i>
              Faire_un_Don</button>
          </div>
     
        
      </Slide>
  
      <template #addons>
        <navigation />
      </template>
    </carousel>
  </template>
  
  <script setup>
  // If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide,  Navigation } from 'vue3-carousel'
  import { ref } from 'vue';
  import 'primeicons/primeicons.css';
  
 const slided = ref(
  [
    {z:"b",
    pathx:'https://cdn.pixabay.com/photo/2015/06/22/08/38/siblings-817369_960_720.jpg'
  },
  {z:"d",pathx:"https://media.istockphoto.com/id/1397843771/photo/portrait-of-a-confident-teenage-boy-having-fun-at-summer-camp.jpg?b=1&s=170667a&w=0&k=20&c=jUs1dMbFLj6gABI_FVJ16oxsdarmhXX10ajxSZmrAf0="},

  {z:"e",pathx:"https://cdn.pixabay.com/photo/2017/06/17/10/55/hot-air-balloon-2411851_960_720.jpg"},


])
  </script>

  <style scoped>
  .carousel__item {
    min-height: 200px;
    min-width: 100%;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    background-position: top;
    border-radius: 0px;
   
  }

  .button1{
    @apply 
    py-2  px-2 
    lg:py-4 lg:px-8 bg-emerald-500
     rounded-tl-3xl rounded-br-3xl text-white 
     text-sm absolute right-1 bottom-1
     mt-8 lg:mt-1
     font-semibold
     lg:text-2xl hover:bg-emerald-400
  }

</style>
  