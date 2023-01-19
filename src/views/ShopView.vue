<template>
    <div class="font-bold text-4xl text-gray-800 mt-4 underline "> 
        Boutique ASEIMC
</div>
<div v-if="loading">
    <ProgressBar mode="indeterminate" style="height: .5em"
     class="bg-purple-500 mt-4"  />
    </div>


    <carousel :items-to-show="1" :transition="500" v-bind:wrap-around="true" :autoplay="5000">
      <Slide v-for="product in products" :key="product.z">
       
        <div class="my-8 gap-4">
        <ShopCardVue
        :name="product.name"
        :description="product.description"  
        :price="product.price"
        :src="product.imgPath"
        />
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
  import { ref, onMounted } from 'vue';

  import ShopCardVue from '@/components/ShopCard.vue';
  import 'primeicons/primeicons.css';
  import { supabase } from '../supabase.js';
  import ProgressBar from 'primevue/progressbar';


  const loading  = ref(false)
  
 const products = ref([]);
 

 const getProduct = async () => {
     loading.value = true

    try {
      const { data, error } = await supabase.from('shop').select("*")
      products.value = data
      console.log(JSON.stringify(data));
      loading.value = false

      throw error;
    } catch (error) {
      console.log(error);
    }
  };

  onMounted(() => {
    getProduct();
  console.log(`the component is now mounted.`)
})


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
  