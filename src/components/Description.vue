<template>
  <MDBCard id="Home" class="card">
    <MDBRow>
      <MDBCol md="4">
        <img src="@/assets/Portfolio.png" class="img-fluid myImg" alt="..." />
      </MDBCol>
      <MDBCol md="1"></MDBCol>
      <MDBCol md="7">
        <div class="description font">
          <div class="description-text">
            <h1>Hi, my name is</h1>
            <h1>Mohammad Dallah.</h1>
          </div>

          <h5 class="blod">Full-Stack Developer</h5>
          <br />

          <div class="font">
            <MDBRow>
              <MDBCol class="blod" md="4">Origin:</MDBCol>
              <MDBCol class="align-self-end" md="8">Palestine</MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol class="blod" md="4">Born in:</MDBCol>
              <MDBCol class="align-self-end" md="8">Damascus, Syria</MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol class="blod" md="4">Born on:</MDBCol>
              <MDBCol class="align-self-end" md="8">01.01.1997</MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol class="blod" md="4">Live in:</MDBCol>
              <MDBCol class="align-self-end" md="8">Lonsee, Germany</MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol class="blod" md="4">Email:</MDBCol>
              <MDBCol
                class="align-self-end navbtn"
                md="8"
                @click="navToContactMe()"
              >
                muhammaddallah093@gmail.com
              </MDBCol>
            </MDBRow>
          </div>
        </div>
      </MDBCol>
    </MDBRow>
  </MDBCard>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MDBCol, MDBRow, MDBCard } from "mdb-vue-ui-kit";

export default defineComponent({
  components: {
    MDBCol,
    MDBRow,
    MDBCard,
  },
  methods: {
    navToContactMe() {
      const ContactMe: any = document.getElementById("ContactMe");
      ContactMe.scrollIntoView({ behavior: "auto" });
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

  .description-text h1:nth-child(2) {
    font-size: 2em !important;
  }

  .myImg {
    margin-top: -3.5em !important;
    width: 16em;
  }

  .description {
    padding-top: 0em !important;
  }
}

@media screen and (min-width: 769px) and (max-width: 1200px) {
  .font {
    font-size: 0.9rem !important;
  }

  .description {
    padding-top: 1em !important;
  }
}

@media screen and (min-width: 1201px) {
  .description {
    padding-top: 2em !important;
  }
}

.myImg {
  transform: scaleX(-1);
  /* filter: contrast(100%); */
  border-radius: 1em;
  margin-top: -5em;
}

.description {
  white-space: nowrap;
  padding-top: 3em;
  padding-left: 1em;
}
.description-text {
  display: inline-block;
  margin: 1em auto auto auto;
  text-align: left;
}

.description-text h1:nth-child(1) {
  color: #1c507c;
  font-family: "Fira Code", monospace;
  font-weight: 800;
  font-size: 20px;
  margin: 0;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  width: 170px;
  animation: type 2s steps(40, end) forwards;
}

.description-text h1:nth-child(2) {
  white-space: nowrap;
  opacity: 0;
  font-family: "Work Sans", sans-serif;
  margin: 0;
  background: linear-gradient(to right, #20c490, #028db0);
  font-weight: 800;
  font-size: 2em;
  width: 100%;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  overflow: hidden;
  animation: string-animation 2.2s steps(40, end) 2s forwards,
    blink 0.5s step-end infinite alternate;
}

@keyframes string-animation {
  0% {
    /* background-position: 0 0; */
    opacity: 0;
    width: 0;
  }
  1% {
    /* background-position: 0 0; */
    opacity: 1;
    border-right: 2px solid #a5a5a5;
  }
  50% {
    /*background-position: 150px 0;*/
    opacity: 1;
    border-right: 2px solid #a5a5a5;
  }
  100% {
    /* background-position: 400px 0; */
    opacity: 1;
    border-right: 2px solid #a5a5a5;
  }
}

@keyframes type {
  0% {
    width: 0;
  }
  1%,
  99% {
    border-right: 2px solid #a5a5a5;
  }
  100% {
    border-right: none;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

.navbtn:hover {
  color: #466682;
  text-decoration: underline;
}
</style>
