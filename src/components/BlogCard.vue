<template>
    <div class="flex justify-center">
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!">
            <img class="rounded-t-lg" :src="props.src" alt=""/>
          </a>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">{{props.title}}</h5>
            <p class="text-gray-700 text-base mb-4">
              {{props.description}}
            </p>
            <button type="button" 
            class=" inline-block 
            px-8 py-3.5 bg-purple-400
             text-white 
             font-semibold
             text-md
              leading-tight
               uppercase rounded-xl
                shadow-md hover:bg-blue-700 
                hover:shadow-lg focus:bg-blue-700 
                focus:shadow-lg focus:outline-none 
                focus:ring-0 active:bg-blue-800 active:shadow-lg 
                transition duration-150 ease-in-out">
                <i class="pi pi-book"></i> Lire </button>
          </div>
        </div>
      </div>

</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(
  [
    'title','src','description'
  ]
     )


</script>