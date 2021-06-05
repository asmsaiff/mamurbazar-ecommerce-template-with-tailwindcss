<template>
  <div class="border-b border-gray-300">
    <div class="container mx-auto flex justify-between font-mavenpro py-3">
      <div class="self-center">
        <img src="/media/site/logo.png" alt="" class="w-48" />
      </div>
      <label for="" class="flex relative border border-yellow-400 rounded-3xl">
        <div class="absolute top-2 left-2">search</div>
        <input
          type="search"
          class="self-center w-80 focus-visible:border-transparent focus-visible:ring-transparent"
        />
        <i class="fas fa-search self-center"></i>
      </label>

      <div class="flex justify-end space-x-5">
        <div class="flex space-x-2">
          <i class="fas fa-shopping-cart text-3xl self-center"></i>
          <div class="flex flex-col font-medium">
            <span class="bg-3 w-9 rounded-2xl text-center ">10</span>
            Cart
          </div>
        </div>
        <div class="flex justify-end space-x-2">
          <i class="far fa-user text-3xl self-center"></i>
          <div class="text-sm font-medium">
            <div class="">Login or Register</div>
            <div class="">My Account</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
