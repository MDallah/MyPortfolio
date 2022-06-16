<template>
  <MDBCard class="card navbar blod">
    <MDBNavbar id="navbar" light bg="light" container>
      <div class="navbtn" @click="navToHome()">Home</div>
      <div class="navbtn" @click="navToSkills()">Skills</div>
      <div class="navbtn" @click="navToProjects()">Projects</div>
      <div class="navbtn" @click="navToContactMe()">Contact</div>
      <div class="space"></div>
      <div class="d-flex input-group w-auto">
        <div class="navIcon">
          <MDBIcon
            icon="language"
            iconStyle="fas"
            size="lg"
            style="margin: 0.3em 0"
          />
        </div>
        <div class="navIcon">
          <MDBIcon
            icon="moon"
            iconStyle="fas"
            size="lg"
            style="margin: 0.3em 0"
          />
          <MDBSwitch v-model="switchDM" style="margin: 0.3em" />
        </div>
      </div>
    </MDBNavbar>
  </MDBCard>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { MDBSwitch, MDBNavbar } from "mdb-vue-ui-kit";

export default defineComponent({
  components: {
    MDBSwitch,
    MDBNavbar,
  },
  methods: {
    navToHome() {
      const Home: any = document.getElementById("Home");
      Home.scrollIntoView({ behavior: "auto" });
    },
    navToSkills() {
      const Skills: any = document.getElementById("Skills");
      Skills.scrollIntoView({ behavior: "auto" });
    },
    navToProjects() {
      const Projects: any = document.getElementById("Projects");
      Projects.scrollIntoView({ behavior: "auto" });
    },
    navToContactMe() {
      const ContactMe: any = document.getElementById("ContactMe");
      ContactMe.scrollIntoView({ behavior: "auto" });
    },
  },
  setup() {
    const switchDM = ref(true);
    return {
      switchDM,
    };
  },
});
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .navbar {
    padding: 1em 0 !important;
    justify-content: left !important;
  }

  .card {
    padding: 1em !important;
  }
}

@media screen and (min-width: 769px) and (max-width: 1200px) {
  .navbar {
    padding: 1em 0 !important;
    justify-content: left !important;
  }
}

@media screen and (min-width: 1201px) {
  .navbar {
    padding: 1em 0 !important;
    justify-content: left !important;
  }
}

.navbar {
  padding: 1em 0 !important;
  justify-content: left;
}

.navbar div {
  padding: 0 0.5em !important;
}

#navbar {
  background: transparent !important;
  display: contents;
}

.navbtn:hover {
  color: #466682;
  text-decoration: underline;
}

.space {
  width: 30em;
}

.navIcon {
  /* display: flex; */
  display: none;
  /* margin: 0 1em !important; */
}
</style>
