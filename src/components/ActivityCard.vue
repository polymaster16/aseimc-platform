<template>
    
        <div class="rounded-lg shadow-lg bg-white max-w-sm relative">

            <img class="rounded-t-lg " :src="props.src" alt="">
            <p class="
            font-bold 
            text-4xl shadow-lg
            absolute  bottom-2 ml-8  text-gray-50 " >
                {{ props.title}}
            </p>
        
       
         
        </div>
     

</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(
  [
    'title','src'
  ]
     )

</script>