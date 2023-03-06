<template>
  <Panner />
  <Home />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Home from '@/pages/Home.vue';
import Panner from '@/components/Panner.vue';

export default defineComponent({
  name: 'App',
  components: {
    Home,
    Panner
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1c507c;
  /* margin-top: 60px; */
}

.font {
  color: #1c507c;
  font-size: 1rem;
}

.blod {
  font-weight: bold;
}
</style>
