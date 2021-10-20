<template>
  <router-view></router-view>
</template>

<script>

import { nextTick } from "vue";

export default {
  name: "App",

  components: {},

  data() {
    return {
      
    };
  },

  mounted() {
    this.ready();
  },

  methods: {
    addScriptFile(file) {
      if (file) {
        let recaptchaScript = document.createElement("script");
        recaptchaScript.setAttribute("src", file);
        document.body.appendChild(recaptchaScript);
      }
    },

    addClassToApp() {
      var element = document.getElementById("app");
      element.classList.add("hold-transition");
      element.classList.add("sidebar-mini");
      element.classList.add("layout-footer-fixed");
    },

    ready: function () {
      var self = this;
      nextTick(() => {
        setTimeout(function () {
          self.addClassToApp();
        }, 1000);
      });
    },
  },
};
</script>
