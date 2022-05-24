<template>
  <section>
    <div class="container">
      <MDBCard class="card">
        <MDBRow>
          <MDBCol md="4">
            <img
              src="../assets/developer.png"
              class="img-fluid myImg"
              alt="..."
            />
          </MDBCol>
          <MDBCol md="2"></MDBCol>
          <MDBCol md="6">
            <div class="description font">
              <div class="description-text">
                <h1>Hi, my name is</h1>
                <h1>Mohammad Dallah.</h1>
              </div>

              <h5 class="blod">Developer</h5>
              <br />

              <div class="font">
                <MDBRow>
                  <MDBCol class="blod" md="4">Comes from:</MDBCol>
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
                  <MDBCol class="align-self-end" md="8">
                    muhammaddallah093@gmail.com
                  </MDBCol>
                </MDBRow>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBCard>

      <MDBCard class="card">
        <div class="font">
          <h5 class="blod">Skills</h5>
          <br />
          <div class="skills">
            <MDBCard
              id="skillscard"
              class="skillscard blod"
              v-for="skill in skills"
              :key="skill.index"
            >
              {{ skill.name }}
            </MDBCard>
          </div>
        </div>
      </MDBCard>

      <MDBCard class="card">
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
              <h5 class="blod">{{ project.name }} ({{ project.languages }})</h5>
              <br />
              <MDBRow>
                <MDBCol md="6">
                  <img
                    :src="'/img/' + project.img"
                    v-bind:alt="project.img"
                    class="img-fluid p-img"
                    @click.stop="displayModalfunc(index)"
                  />
                  <div id="modal" v-if="displayModal && index === imgIndex">
                    <!-- <h1 @click="displayModal = false">x</h1> -->
                    <div>
                      <img id="modal-img" :src="'/img/' + project.img" />
                      <img
                        id="modal-close"
                        src="../assets/X.png"
                        @click.stop="hideModalfunc()"
                      />
                    </div>
                  </div>
                  <!-- <button @click.stop="displayModal = true">open modal</button> -->
                </MDBCol>
                <MDBCol md="6">{{ project.discription }}</MDBCol>
              </MDBRow>
            </MDBCard>
          </div>
        </div>
      </MDBCard>
    </div>
  </section>
</template>

<script lang="ts" src="./Portfolio.ts" />

<style scoped src="./Portfolio.css" />
