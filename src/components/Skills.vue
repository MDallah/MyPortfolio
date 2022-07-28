<template>
  <MDBCard id="Skills" class="card">
    <div class="font">
      <h5 class="blod">Skills</h5>
      <br />
      <div class="skills">
        <MDBCard
          id="skillscard"
          class="skillscard blod"
          v-for="(skill, index) in skills"
          :key="index"
        >
          <img :src="'/img/logos/' + skill.logo" class="logos" />
          {{ skill.name }}
        </MDBCard>
      </div>
    </div>
  </MDBCard>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MDBCard } from "mdb-vue-ui-kit";
import skills from "@/Skills.json";

export default defineComponent({
  components: {
    MDBCard,
  },
  data() {
    return {
      skills,
    };
  },
});
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .font {
    font-size: 0.9rem !important;
  }

  .card {
    padding: 1em !important;
  }
  .skillscard#skillscard {
    margin: 0.5em !important;
  }
}

@media screen and (min-width: 769px) and (max-width: 1200px) {
  .font {
    font-size: 0.9rem !important;
  }
}

.skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.skillscard#skillscard {
  display: flex;
  justify-content: space-around;
  background-color: #ffffff09;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  border: #00000038 solid 1px;
  text-align: center;
  width: 8em;
  padding: 0.1em;
  margin: 2em;
  opacity: 1;
  word-wrap: initial;
  border-radius: 3px;
}

.logos {
  margin: 1em;
  opacity: 1;
  max-height: 6em
}
</style>
