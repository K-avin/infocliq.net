<template>
  <div class="wrapper">
    <!-- Navbar -->
    <TheNavbar />

    <!-- Content Wrapper. Contains page content -->
    <router-view></router-view>

    <!-- Main Footer -->
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from "@/views/Components/TheNavbar";
import TheFooter from "@/views/Components/TheFooter";

export default {
  components: {
    TheNavbar,
    TheFooter,
  },

  mounted() {},

  methods: {},
};
</script>