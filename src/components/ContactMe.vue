<template>
  <MDBCard id="ContactMe" class="card">
    <div class="font">
      <h5 class="blod">Contact me</h5>
      <br />
      <form ref="form" @submit.prevent="sendEmail">
        <!-- Name input -->
        <MDBInput
          type="text"
          label="Name"
          name="from_name"
          wrapperClass="mb-4"
          required
        />

        <!-- Email input -->
        <MDBInput
          type="email"
          label="Email address"
          name="from_email"
          wrapperClass="mb-4"
          required
        />

        <!-- Subject input -->
        <MDBInput
          type="text"
          label="Subject"
          name="subject"
          wrapperClass="mb-4"
          required
        />

        <!-- Message input -->
        <MDBTextarea
          label="Message"
          name="message"
          id="formMsg"
          v-model="formMsg"
          wrapperClass="mb-4"
          required
        />

        <!-- Submit button -->
        <MDBBtn color="primary" block class="mb-4" type="submit">
          {{ btnValue }}
        </MDBBtn>
      </form>
    </div>
    <div>
      <a
        class="contactIcon"
        href="https://www.linkedin.com/in/mohammad-dallah/"
        target="blank"
      >
        <MDBIcon
          icon="linkedin"
          iconStyle="fab"
          size="3x"
          style="margin: 0.3em 0"
        />
      </a>
      <a class="contactIcon" href="https://github.com/MDallah" target="blank">
        <MDBIcon
          icon="github-square"
          iconStyle="fab"
          size="3x"
          style="margin: 0.3em 0"
        />
      </a>
    </div>
  </MDBCard>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  MDBInput,
  MDBTextarea,
  MDBBtn,
  MDBIcon,
  MDBCard,
} from "mdb-vue-ui-kit";
import emailjs from "@emailjs/browser";

interface EmailjsConfig {
  account: string;
  serviceID: string;
  templateID: string;
  publicKey: string;
}

let emailjsConfig: EmailjsConfig[] = require("@/EmailjsConfig.json");
let serviceID = "";
let templateID = "";
let publicKey = "";

export default defineComponent({
  components: {
    MDBInput,
    MDBTextarea,
    MDBBtn,
    MDBIcon,
    MDBCard,
  },
  data() {
    return {
      btnValue: "Send",
    };
  },
  methods: {
    sendEmail() {
      this.$data.btnValue = "Sending...";

      emailjsConfig.find((item) => {
        if (item.account === "muhammaddallah093") {
          serviceID = item.serviceID;
          templateID = item.templateID;
          publicKey = item.publicKey;
        }
      });

      this.formMsg = this.formMsg.replace(/\n/g, "<br />");

      //wait half seconds before sending email
      setTimeout(() => {
        emailjs
          .sendForm(
            serviceID,
            templateID,
            this.$refs.form as HTMLFormElement,
            publicKey
          )
          .then(
            (result: any) => {
              console.log("SUCCESS!", result.text);
              this.$data.btnValue = "Email sent";
              // alert('Sent!');
              this.formMsg = "";
            },
            (error: any) => {
              console.log("FAILED...", error.text);
              alert(JSON.stringify(error));
            }
          );
      }, 500);

      //wait 10 seconds
      setTimeout(() => {
        this.$data.btnValue = "Send";
      }, 10000);
    },
  },
  setup() {
    const formName = ref("");
    const formEmail = ref("");
    const formMsg = ref("");
    const formSubject = ref("");
    return {
      formName,
      formEmail,
      formMsg,
      formSubject,
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
}

@media screen and (min-width: 769px) and (max-width: 1200px) {
  .font {
    font-size: 0.9rem !important;
  }
}

.contactIcon {
  margin: 0 1em 0 0;
}
</style>
