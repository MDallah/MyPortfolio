<template>
  <section>
    <!-- Auto Deployment -->
    <div class="container">
      <nav-bar />
      <description />
      <Skills />
      <Projectes />
      <contact-me />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { magicMouse } from "magicmouse.js";

import NavBar from "@/components/NavBar.vue";
import Description from "@/components/Description.vue";
import Skills from "@/components/Skills.vue";
import Projectes from "@/components/Projectes.vue";
import ContactMe from "@/components/ContactMe.vue";

export default defineComponent({
  name: "Portfolio",
  components: {
    NavBar,
    Description,
    Skills,
    Projectes,
    ContactMe,
  },

  mounted() {
    window.document.body.style.backgroundColor = "#b08b78";
    window.document.body.style.width = "100%";
    window.document.body.style.overflowX = "hidden";

    // magicMouse .................................
    const options: any = {
      cursorOuter: "circle-basic",
      hoverEffect: "pointer-blur",
      hoverItemMove: false,
      defaultCursor: false,
      outerWidth: 41,
      outerHeight: 41,
    };
    magicMouse(options);

    const Cursor = document.getElementById("magicMouseCursor");
    const Pointer = document.getElementById("magicPointer");
    if (Cursor != null) {
      Cursor.style.border = "1px solid #555";
    }
    if (Pointer != null) {
      Pointer.style.background = "#555";
      Pointer.style.zIndex = "2";
    }
    // magicMouse .................................
  },
});
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .container {
    width: 100% !important;
  }
}

@media screen and (min-width: 769px) and (max-width: 1200px) {
  .container {
    width: 90% !important;
  }
}

.container {
  font-family: "Fira Code", monospace;
  word-wrap: initial;
  text-align: start;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 1em 1em;
  margin: 0 auto;
  width: 70%;
}

.container .card {
  position: relative;
  width: 100%;
  background: rgba(8, 8, 8, 0.05);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  padding: 3em;
  margin-bottom: 4em;
  opacity: 1;
  word-wrap: initial;
}

/* Background ................................. */
section::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(#1bdcdc, #9733ee);
  clip-path: circle(30% at right 80%);
  z-index: -1;
}

section::after {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(#e55d87, #5fc3e4);
  clip-path: circle(20% at 10% 10%);
  z-index: -1;
}
/* Background ................................. */
</style>
