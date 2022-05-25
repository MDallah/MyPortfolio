import { defineComponent, ref } from 'vue';
import {
    MDBCol, MDBRow, MDBCard, MDBBtn, MDBSwitch, MDBNavbar, MDBNavbarBrand, MDBIcon
} from "mdb-vue-ui-kit";
import { magicMouse } from "magicmouse.js";


const skills: any = [
    { name: "Vue.js", logo: "vuejs.png" },
    { name: "TypeScript", logo: "typescript.png" },
    { name: "Arduino", logo: "arduino.png" },
    { name: "Node.js", logo: "node.png" },
    { name: "HTML5", logo: "html5.png" },
    { name: "CSS3", logo: "css3.png" },
    { name: "JavaScript", logo: "javascript.png" },
    { name: "C#", logo: "csharp.png" },
    { name: "Golang", logo: "golang.png" },
    { name: "Windows", logo: "windows.png" },
    { name: "Linux", logo: "linux.png" },
    { name: "Raspberry PI", logo: "raspberrypi.png" },
    { name: "Electron", logo: "electron.svg" },
    { name: "Ionic", logo: "ionic.png" },
    { name: "Capacitor", logo: "capacitor.png" },
    { name: "Cordova", logo: "cordova.png" },
    { name: "MySQL", logo: "mysql.png" },
    { name: "NoSQL", logo: "nosql.png" },
    { name: "LoRa", logo: "lora.png" },
    { name: "LoRaWAN", logo: "lorawan.svg" },
    { name: "Git", logo: "git.png" },
    { name: "Github", logo: "github.png" },
    { name: "Gitlab", logo: "gitlab.png" },
];

const projects: any = [
    {
        name: "Portfolio",
        languages: "Vue.js",
        img: "comming-soon.jpg",
        discription: "DISCRIPTION",
    },
    {
        name: "PROJEKT-NAME",
        languages: "L1 - L2",
        img: "comming-soon.jpg",
        discription: "DISCRIPTION",
    },
    {
        name: "PROJEKT-NAME",
        languages: "L1 - L2",
        img: "comming-soon.jpg",
        discription: "DISCRIPTION",
    },
];

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
    },
    data() {
        return {
            skills,
            projects,
            imgIndex: 0,
            displayModal: false,
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
        return {
            switchDM
        }
    },
});