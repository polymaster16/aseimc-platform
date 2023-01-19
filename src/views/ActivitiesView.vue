import BlogCardVue from '@/components/BlogCard.vue';
<template>
    <div class="flex flex-col justify-items-center">
        <div class="font-bold text-4xl text-red-800 mt-4 mb-4 underline "> 
             Les Activités réalisée
            </div>

            <div v-if="loading">
                <ProgressBar mode="indeterminate" style="height: .5em"
                 class="bg-purple-500 mt-4"  />
                </div>
          
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 ml-3 lg:ml-8 mt-4">
    <div 
     v-for="act in activities" v-bind:key="act.id">
        
<ActivityCardVue :title="act.name" 
 :src="act.link"/>

    </div>
</div>
</div>
</template>
<script setup>
import ActivityCardVue from '@/components/ActivityCard.vue'
import { ref, onMounted } from 'vue';
import ProgressBar from 'primevue/progressbar';
import { supabase } from '../supabase.js';

const loading = ref(false)
const activities = ref([])


const getActivities = async () => {
    loading.value = true
    try {
      const { data, error } = await supabase.from('activities').select("*")
      activities.value = data
      console.log(JSON.stringify(data));
       loading.value = false

      throw error;
    } catch (error) {
      console.log(error);
    }
  };

  onMounted(() => {
    getActivities();
  console.log(`the component is now mounted.`)
})

</script>