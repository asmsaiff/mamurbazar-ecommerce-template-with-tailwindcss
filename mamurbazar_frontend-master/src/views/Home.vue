<template>
  <app-layout>
    <!-- Hero section -->
    <div class="">
      <img src="/media/cover/2186.jpg" alt="" srcset="" class="h-144 w-full" />
    </div>
    <featureItems :items="items" class="container mx-auto" />
    <featureCategory />
    <div class="h-screen"></div>
  </app-layout>
</template>

<script>
import appLayout from "../layouts/appLayout";
import featureItems from "../components/features/featureItems";
import featureCategory from "../components/features/featureCategory";
export default {
  components: {
    appLayout,
    featureItems,
    featureCategory,
  },
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6],
    };
  },
};
</script>
