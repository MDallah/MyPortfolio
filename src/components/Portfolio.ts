import { defineComponent } from 'vue';
import { MDBCol, MDBRow, MDBCard } from "mdb-vue-ui-kit";
import { magicMouse } from "magicmouse.js";


const skills: any = [
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "Node.js" },
    { name: "TypeScript" },
    { name: "JavaScript" },
    { name: "Vue.js" },
    { name: "Golang" },
    { name: "C#" },
    { name: "Arduino" },
    { name: "Raspberry PI" },
    { name: "Linux" },
    { name: "MySQL" },
    { name: "Ionic" },
    { name: "Capacitor" },
    { name: "Cordova" },
    { name: "IoT" },
    { name: "LoRa" },
    { name: "LoRaWAN" },
    { name: "Github" },
    { name: "Gitlab" },
    { name: "Electron" },
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
    }
});