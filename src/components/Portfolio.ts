import { defineComponent, ref } from 'vue';
import {
    MDBCol, MDBRow, MDBCard,
    MDBBtn, MDBSwitch, MDBNavbar,
    MDBNavbarBrand, MDBIcon, MDBInput,
    MDBCheckbox, MDBTextarea
} from "mdb-vue-ui-kit";
import { magicMouse } from "magicmouse.js";
import emailjs from '@emailjs/browser';
import projects from './Projects.json';
import skills from './Skills.json';

export default defineComponent({
    name: 'Portfolio',
    components: {
        MDBCol,
        MDBRow,
        MDBCard,
        MDBBtn,
        MDBSwitch,
        MDBNavbar,
        MDBNavbarBrand,
        MDBIcon,
        MDBInput,
        MDBCheckbox,
        MDBTextarea
    },
    data() {
        return {
            skills,
            projects,
            imgIndex: 0,
            displayModal: false,
            btnValue: "Send",
        };
    },
    methods: {
        displayModalfunc(index: any) {
            this.$data.imgIndex = index;
            this.displayModal = true;
            window.document.body.style.overflow = "hidden";
        },
        hideModalfunc() {
            this.displayModal = false;
            window.document.body.style.overflow = "auto";
        },

        onClickOutside(e: any) {
            if (e.target.localName !== "button") {
                this.displayModal = false;
                window.document.body.style.overflow = "auto";

            }
        },
        navToHome() {
            const Home: any = document.getElementById('Home');
            Home.scrollIntoView({ behavior: 'auto' });
        },
        navToSkills() {
            const Skills: any = document.getElementById('Skills');
            Skills.scrollIntoView({ behavior: 'auto' });
        },
        navToProjects() {
            const Projects: any = document.getElementById('Projects');
            Projects.scrollIntoView({ behavior: 'auto' });
        },
        navToContactMe() {
            const ContactMe: any = document.getElementById('ContactMe');
            ContactMe.scrollIntoView({ behavior: 'auto' });
        },
        sendEmail() {
            this.$data.btnValue = "Sending...";
            // muhammaddallah093
            // const serviceID = 'default_service';
            // const templateID = 'template_md-p';
            // const publicKey = '0_ilaRpHbRPu01w1f';

            // mdtest093
            const serviceID = 'service_md-p-test';
            const templateID = 'template_uoqrl6n';
            const publicKey = 'zNe5aa_VaIq88vNDi';

            this.formMsg = this.formMsg.replace(/\n/g, "<br />",)

            //wait 1 seconds before sending email
            setTimeout(() => {
                emailjs.sendForm(serviceID, templateID, this.$refs.form as HTMLFormElement, publicKey)
                    .then((result: any) => {
                        console.log('SUCCESS!', result.text);
                        this.$data.btnValue = "Email sent";
                        // alert('Sent!');
                    }, (error: any) => {
                        console.log('FAILED...', error.text);
                        alert(JSON.stringify(error));
                    });
            }, 500);

            //wait 5 seconds 
            setTimeout(() => { this.$data.btnValue = "Send"; }, 10000);

        }

    },
    mounted() {
        window.addEventListener("click", this.onClickOutside);

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
    setup() {
        const switchDM = ref(true);
        const formName = ref("");
        const formEmail = ref("");
        const formMsg = ref("");

        return {
            switchDM,
            formName,
            formEmail,
            formMsg,
        }
    },
});