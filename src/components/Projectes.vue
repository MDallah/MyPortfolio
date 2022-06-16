<template>
  <MDBCard id="Projects" class="card">
    <div class="font">
      <h5 class="blod">Projects</h5>
      <br />
      <div>
        <MDBCard
          id="p-card"
          class="p-card"
          v-for="(project, index) in projects"
          :key="index"
        >
          <h5 class="blod">{{ project.name }}</h5>
          {{ project.by }}
          <br />
          <br />
          <MDBRow>
            <MDBCol md="4">
              <img
                :src="'/img/' + project.img"
                v-bind:alt="project.img"
                class="img-fluid p-img"
                @click.stop="displayModalfunc(index)"
              />
              <div id="modal" v-if="displayModal && index === imgIndex">
                <div>
                  <img id="modal-img" :src="'/img/' + project.img" />
                  <img
                    id="modal-close"
                    src="../assets/X.png"
                    @click.stop="hideModalfunc()"
                  />
                </div>
              </div>
            </MDBCol>
            <MDBCol md="8">
              {{ project.discription }}
              <br />
              <br />
              ({{ project.languages }})
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </div>
    </div>
  </MDBCard>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MDBCol, MDBRow, MDBCard } from "mdb-vue-ui-kit";
import projects from "@/Projects.json";

export default defineComponent({
  components: {
    MDBCard,
    MDBCol,
    MDBRow,
  },
  data() {
    return {
      projects,
      imgIndex: 0,
      displayModal: false,
    };
  },
  mounted() {
    window.addEventListener("click", this.onClickOutside);
  },
  methods: {
    onClickOutside(e: any) {
      if (e.target.localName !== "button") {
        this.displayModal = false;
        window.document.body.style.overflow = "auto";
      }
    },
    displayModalfunc(index: any) {
      this.$data.imgIndex = index;
      this.displayModal = true;
      window.document.body.style.overflow = "hidden";
    },
    hideModalfunc() {
      this.displayModal = false;
      window.document.body.style.overflow = "auto";
    },
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
}

@media screen and (min-width: 769px) and (max-width: 1200px) {
  .font {
    font-size: 0.9rem !important;
  }
}

.p-card#p-card {
  background-color: #ffffff09;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  border: #00000038 solid 1px;
  width: auto;
  margin-bottom: 2em;
  padding: 1em;
  word-wrap: initial;
  border-radius: 6px;
}

.p-img {
  /* width: 20em;
  height: 20em; */
  margin-top: 0.4em;
  border-radius: 3px;
  border: #00000055 solid 0.2em;
}

.p-img:hover {
  border-color: #028db0;
}

#modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* border: 3px solid rgb(64, 64, 64); */
  background-color: rgba(255, 255, 255, 0.204);
  padding: 3em;
  z-index: 1;
}

#modal-img {
  justify-content: center;
  max-width: 95vw;
  max-height: 95vh;
  z-index: 2;
  border-radius: 0.5em;
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

#modal-close {
  opacity: 0.7;
  position: fixed;
  top: 2em;
  right: 2em;
  height: 2em;
  width: 2em;
  border-radius: 5px;
  background-color: #ffffff7f;
  z-index: 3;
}
</style>
