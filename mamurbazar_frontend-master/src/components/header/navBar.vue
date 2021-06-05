<template>
  <div class="container mx-auto flex justify-between font-mavenpro font-medium">
    <div class="flex justify-start space-x-5 text-sm">
      <div class="flex justify-between w-80 bg-gray-200 py-3 px-3">
        <div class="flex space-x-3">
          <i class="fas fa-bars text-xl self-center"></i>
          <span class="self-center text-lg font-semibold">CATEGORIES</span>
        </div>
        <span class="text-gray-600 font-light">View ...</span>
      </div>
      <div class="self-center space-x-5">
        <router-link to="" class="text-yellow-800 border-b border-3"
          >Home</router-link
        >
        <router-link to="" class="hover:border-b hover:border-3"
          >Shop</router-link
        >
        <router-link to="">Request Product</router-link>
        <router-link to="">How To Order</router-link>
      </div>
    </div>
    <div class="self-center">
      <i class="fab fa-facebook-square text-blue-800 text-lg"></i>
      LIKE US
    </div>
  </div>
</template>
