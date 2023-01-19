<template>
    <div class="bg-gray-900 min-h-screen flex flex-col justify-center items-center">
      <form class="bg-white rounded p-4" >
        <label class="text-blue-500 font-medium">
          Enter Some Text:
          <input class="border-2 border-blue-500 rounded p-2 w-full" type="text" v-model="userText" required/>
        </label>
        <button 
        v-on:click="submitForm()"
        class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600">Submit</button>
      </form>
      <ol class="mt-4" 
         v-for="item in list" v-bind:key="item">

        <li class="text-white">{{item}}</li>
        
    </ol>

    <div v-if="show">
      <div class="bg-white rounded-lg p-4 flex flex-col mt-4">
        <img src="data:image/jpeg;base64,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" class="rounded-lg w-full h-40 object-cover" alt="loading" />
        <div class="mt-4">
          <h2 class="text-xl font-medium text-blue-500">Title</h2>
          <p class="text-gray-700">This is the description</p>
        </div>
      </div>
    </div>
      <button class="btn btn-success p-2 mt-2" @click="swap">toggle </button>

    </div>
  </template>
  
  <script setup>
  import {ref} from 'vue'


  const userText = ref('userText');
  const list = ref([]);

  function submitForm() {
   
    list.value.push(userText.value);
     //alert(list.value)
  }
  const show=ref(true);
  function swap(){
    show.value = !show.value;
  }
 

  </script>
  