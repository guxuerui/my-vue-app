<template>
<div class="flex justify-center items-center ">
<div class="w-full md:w-max md:my-8 my-0">
<nav class="rounded-none sm:rounded-lg lg:px-16 px-8 bg-gray-700 shadow-md py-4 md:py-0 sticky top-0 " >
        <div class="container mx-auto flex flex-wrap items-center">
            <div class="flex-1 flex justify-between items-center">
              <a href="" class="text-xl font-semibold text-green-100 hover:text-white tracking-normal">QiShi</a>
            </div>
            <label for="menu-toggle" class="pointer-cursor md:hidden block">
                <svg class="fill-current text-gray-300 hover:text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                    viewBox="0 0 20 20">
                    <title>menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </label>
            <input class="hidden" type="checkbox" id="menu-toggle" />

            <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
                <nav>
                    <ul class="md:flex items-center justify-between text-base pt-4 md:pt-0">
                        <li><a class="md:px-4 py-2 md:py-4 px-0 block text-green-100 hover:text-white md:hover:bg-gray-800" href="">About Us</a></li>
                        <li><a class="md:px-4 py-2 md:py-4 px-0 block text-green-100 hover:text-white md:hover:bg-gray-800" href="">Projects</a></li>
                        <li><a class="md:px-4 py-2 md:py-4 px-0 block text-green-100 hover:text-white md:hover:bg-gray-800" href="">Contact Us</a></li>
                        <li class="dropdown inline-block relative w-full md:w-auto md:mb-0 mb-2">
                            <a class="md:px-4 py-2 md:py-4 px-0 block text-green-100 hover:text-white md:hover:bg-gray-800 inline-flex items-center">
                                <span class="mr-1">Dropdown</span>
                                <svg class="fill-current h-4 w-4 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                            </a>
                            <ul class="dropdown-menu absolute z-50 md:right-0 hidden text-gray-700 md:-mt-4 md:pt-3 pt-1 shadow-lg">
                                <li class=""><a class="rounded-t bg-white hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap"
                                   href="">Testing Link One</a>
                                </li>
                                <li class="">
                                   <a class="bg-white hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap" href="">
                                      Testing Link Two
                                   </a>
                                </li>
                                <li class=""><a class="rounded-b bg-white hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap"
                                        href="">Testing Link Three, Nice!</a></li>
                            </ul>
                        </li>
                        <li class="dropdown inline-block relative w-full md:w-auto md:mb-0 mb-2">
                            <a class="md:px-4 py-2 md:py-4 px-0 block text-green-100 hover:text-white md:hover:bg-gray-800 inline-flex items-center">
                                <span class="mr-1">Blog</span>
                                <svg class="fill-current h-4 w-4 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                            </a>
                            <ul class="dropdown-menu absolute z-50 md:right-0 hidden text-gray-700 md:-mt-4 md:pt-3 pt-1 shadow-lg w-36">
                                <li class=""><a class="rounded-t bg-white hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap"
                                   href="">Post One</a>
                                </li>
                                <li class="">
                                   <a class="bg-white hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap" href="">
                                      Post Two
                                   </a>
                                </li>
                                <li class=""><a class="rounded-b bg-white hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap"
                                        href="">Post Three</a></li>
                            </ul>
                            <!-- <div class="dropdown-menu absolute z-50 md:right-0 hidden text-gray-700 md:-mt-4 md:pt-3 pt-1 shadow-lg w-96 bg-gray-500 px-4"> -->
                            <!--   <div class="grid grid-cols-2 gap-4"> -->
                            <!--     <div class="bg-gray-700 p-4 rounded-lg shadow-lg"> -->
                            <!--       <h3 class="text-white text-lg mb-1 font-medium">Content area 1</h3> -->
                            <!--       <p class="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper orci in odio faucibus euismod.</p> -->
                            <!--     </div> -->
                            <!--     <div class="bg-gray-700 p-4 rounded-lg shadow-lg"> -->
                            <!--       <h3 class="text-white text-lg mb-1 font-medium">Content area 2</h3> -->
                            <!--       <p class="text-gray-400">Vivamus tristique venenatis enim, id imperdiet velit aliquam a. Curabitur ut felis eros.</p> -->
                            <!--     </div> -->
                            <!--     <div class="bg-gray-700 p-4 rounded-lg shadow-lg"> -->
                            <!--       <h3 class="text-white text-lg mb-1 font-medium">Content area 3</h3> -->
                            <!--       <p class="text-gray-400">In at efficitur erat. Quisque viverra tempus eros, eget aliquet erat sollicitudin ac.</p> -->
                            <!--     </div> -->
                            <!--     <div class="bg-gray-700 p-4 rounded-lg shadow-lg"> -->
                            <!--       <h3 class="text-white text-lg mb-1 font-medium">Content area 4</h3> -->
                            <!--       <p class="text-gray-400">Pellentesque vitae tortor sed quam ornare maximus. Suspendisse ac justo iaculis, ullamcorper neque quis, tincidunt nibh.</p> -->
                            <!--     </div> -->
                            <!--   </div> -->
                            <!-- </div>  -->
                            
                        </li>
                        <li>
                            <a href="" class="md:ml-4 flex items-center justify-start pointer-cursor">
                                <img class="rounded-full w-6 h-6 bg-green-800" src="https://assets.codepen.io/2617115/internal/avatars/users/default.png?fit=crop&format=auto&height=80&version=1554843120&width=80">
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </nav>
</div>
</div>



  <div class="h-96">
    <drag :shows="show" :url="imgUrl"></drag>
  </div>
</template>
<script lang="ts" setup>
  import { reactive, toRefs, onMounted } from 'vue';
  import drag from '@c/drag.vue';
  import { useRouter, useRoute } from 'vue-router';
  const router = useRouter();
  const route = useRoute();

  const data = reactive({
    show: true,
    imgUrl: 'https://images.unsplash.com/photo-1612142186636-3e65d8a446fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2100&q=80'
  });

  onMounted(() => {
    console.log('useRouter: ', router);
    console.log('useRoute: ', route.params);
  })

  const { show, imgUrl } = toRefs(data);
</script>

<style scoped>
.dropdown:hover .dropdown-menu, .dropdown:active .dropdown-menu {
  display: block;
}
</style>
