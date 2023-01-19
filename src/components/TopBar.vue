<template>
    <nav class="flex items-center justify-between flex-wrap bg-blue-400 p-3">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <img
          class="object-cover h-20 w-20 rounded-full ml-2 mr-4"
          src="https://z-p3-scontent.fnsi1-2.fna.fbcdn.net/v/t39.30808-6/307212733_420338770225691_189086269391071683_n.png?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHKtCsTzlHUYxj4Ddt9YtbNjgCQedMBGAuOAJB50wEYC0a2ZHwrLd3mHniIEoccYCL-FPxussWVNXIJBeHFlNFH&_nc_ohc=8bO1cwqcVaYAX_HDF8c&tn=9qEYC6OBv9TrTH3A&_nc_zt=23&_nc_ht=z-p3-scontent.fnsi1-2.fna&oh=00_AfB-722TpGkQ3LDXcKYxjnvgRIuoNgEISjVvyuxWyVYe7A&oe=63B8D68E">
            <span class="font-semibold text-2xl tracking-tight">A S E I M C </span>
        </div>
        <div
        v-on:click="handleClick()"  class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div v-if="hideMenu"
        class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div  
          class="text-sm lg:flex-grow">
            <router-link to='/' class="rl">
              Acceuil
            </router-link>
            <router-link to='/activities' class="rl">
              Activités
            </router-link>
            <router-link to="/blog" class="rl">
              Blog
            </router-link>
            <router-link to="/shop" class="rl">
              Produits
            </router-link>
          </div>
          <div>
            <route-link to="profile" class="mr-8 inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-purple-500 hover:bg-white mt-4 lg:mt-0">
              Se Connecter</route-link>
          </div>
        </div>
      </nav>
</template>

<script setup>
import { ref } from 'vue';
const hideMenu = ref(true);

const handleClick = () => {
hideMenu.value = !hideMenu.value;
//alert(hideMenu.value);
}

</script>

<style scoped>
.rl{
@apply 
block mt-4
 lg:inline-block
  lg:mt-0 text-blue-200
   hover:text-white mr-4

}
</style>