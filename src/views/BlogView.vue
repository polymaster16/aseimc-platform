<template>
  <FadeInOut :duration="500" mode="in-out">
    <div v-if="show">
      <div class="font-bold text-4xl text-blue-800 mt-4 underline ">  Le Blog ASEIMC
      </div>

      <div v-if="loading">
      <ProgressBar mode="indeterminate" style="height: .5em"
       class="bg-purple-500 mt-4"  />
      </div>

        <div class="blog">
         <div 
          v-for="article in blog" v-bind:key="article.id">
          <BlogCardVue 
          :title="article.title"
           :src="article.imgPath"
           :description="article.description"/>
            
         </div>
        </div>
    </div>
    </FadeInOut>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import BlogCardVue from '@/components/BlogCard.vue';
import ProgressBar from 'primevue/progressbar';
import { supabase } from '../supabase.js';

//import { FadeInOut } from 'vue3-transitions'

const show = ref(false);

onMounted(()=>{
  show.value = true;
  console.log("mounted home");
});

const loading = ref(false)
const blog = ref([])


const getBlog = async () => {
    loading.value = true
    try {
      const { data, error } = await supabase.from('blog').select("*")
      blog.value = data
      console.log(JSON.stringify(data));
       loading.value = false

      throw error;
    } catch (error) {
      console.log(error);
    }
  };

  onMounted(() => {
    getBlog();
    show.value = true;
  console.log(`the component is now mounted.`)
})


</script>

<style scope>
.blog {
  @apply grid
   mt-4
   grid-cols-1 gap-4
   lg:grid-cols-4
   md:grid-cols-3
   p-4


}
</style>