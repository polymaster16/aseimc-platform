<template>
<div>
    New Blog Post

    

<div class="bg-gray-50 px-4 lg:px-16 py-4 flex-cols justify-start">

        <div class="form-group">
          <label for="exampleInputEmail1"
          class="font-semibold">Titre</label>
          <input v-model="title"
          type="text" class="form-control" id="exampleInputEmail1" placeholder="Article 1">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1"
          class="font-semibold">Description</label>
          <input v-model="descr"
          type="text" class="form-control" id="exampleInputPassword1" placeholder="Description">
        </div>

        <div class="form-group">
            <label for="exampleInputPassword1"
            class="font-semibold">Content</label>
    <QuillEditor theme="snow" 
    ref="myEditor" 
    content-type="html"
    v-model:content="content"
    output="html"
    style="min-height: 200px"
    
    />
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1"
            class="font-semibold">Upload image</label>
            <br>
            <label class="btn btn-primary"> Selectionez votre photo
            <input type="file" v-on:change="handleSelected" >
          </label>

          <br>

          <FadeInOut :duration="500" mode="in-out"> 
          <div 
          v-if="selectedFile!=null"
          class="text-xl mb-1">{{selectedFile}} </div>
         </FadeInOut>
         <div class="mb-4" v-if="loading">
         <ProgressBar mode="indeterminate" style="height: .5em"
       class="bg-green-500 mt-4"  />
      </div>

         
 
   <button @click="uploadData()"
    class="btn btn-success my-4 p-4">Submit</button>
    <div class="mb-4 mt-2" v-if="loading">
      <ProgressBar mode="indeterminate" style="height: .5em"
    class="bg-emerald-500 mt-4"  />
   </div>
</div>
</div>
</div>


</template>

<script setup>
import 'primevue/resources/themes/saga-blue/theme.css';   //theme
import 'primevue/resources/primevue.min.css';             //core css
import { FadeInOut } from 'vue3-transitions'
import { QuillEditor } from '@vueup/vue-quill'
import ProgressBar from 'primevue/progressbar';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import '@vueup/vue-quill/dist/vue-quill.bubble.css';
import { supabase } from '../supabase.js';


import { ref } from 'vue'
const content = ref("")
const loading= ref(false)
const loading2= ref(false)
const selectedFile = ref(null)
const link =ref(null);

const title= ref(null);
const descr= ref(null)


const handleSelected = async(e) => {
  selectedFile.value = e.target.files[0].name;
  loading.value = true
  //alert(e.target.files[0].name);

  try {
    const  data = await supabase
  .storage
  .from('aseimc-bucket')
  .upload(`public/${e.target.files[0].name}`, e.target.files[0], {
  cacheControl: '3600',
  upsert: false
  })

console.log(data);
link.value = `https://hyczxbizyvhpfijbzvua.supabase.co/storage/v1/object/public/aseimc-bucket/public/${e.target.files[0].name}`
//window.open(link.value);
loading.value = false
  } catch (error) {
    console.log(error.message)
  }
}

const uploadData = async() => {
  loading2.value=true
  try{
  await supabase
  .from('blog')
  .insert({
    title: title.value,
    description: descr.value,
    content: content.value,
    imgPath: link.value,
    date: new Date(),});
    loading2.value=false
  }
  catch(error) {
    console.log(error.message)
  }         



}


</script>

<style scope>
.defaultInput{
    @apply
    bg-gray-50 border border-gray-300
     text-gray-900 text-sm rounded-lg
      focus:ring-blue-500
       focus:border-blue-500 
       block w-full p-2.5
        dark:bg-gray-700
         dark:border-gray-600
          dark:placeholder-gray-400 dark:text-white
           dark:focus:ring-blue-500 dark:focus:border-blue-500

}

input[type="file"] {
  display: none;
}

</style>