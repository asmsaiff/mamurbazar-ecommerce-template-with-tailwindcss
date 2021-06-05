<template>
  <div class="">
    <div class="uppercase font-bold text-xl my-3"># Top selling items</div>
    <div class="grid grid-cols-6 gap-5">
      <router-link
        to=""
        v-for="(item, index) in items"
        :key="index"
        class="group relative border border-gray-300 rounded overflow-hidden px-5"
      >
        <div
          class="absolute top-0 end-0 bg-red-600 text-white px-2 font-medium "
        >
          -10%
        </div>
        <img
          class="group-hover:hidden"
          src="/media/products/product1.jpg"
          alt=""
        />
        <img
          class="hidden group-hover:block"
          src="/media/products/product2.jpg"
          alt=""
        />
        <router-link
          to=""
          class="absolute bg-3 bottom-7 w-full text-center start-0 py-1 font-medium transition-all hidden group-hover:block"
        >
          Quick view
        </router-link>
        <div class="text-center font-semibold text-xl text-red-500">
          100 USD
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["items"],
};
</script>
