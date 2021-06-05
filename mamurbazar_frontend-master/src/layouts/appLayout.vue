<template>
  <div class="" dir="ltr">
    <top-header />
    <headerMain />
    <nav-bar />
    <slot />
  </div>
</template>

<script>
import topHeader from "../components/header/topHeader";
import headerMain from "../components/header/headerMain";
import navBar from "../components/header/navBar";
export default {
  components: {
    topHeader,
    headerMain,
    navBar,
  },
};
</script>
