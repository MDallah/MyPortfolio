import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Portfolio',
    props: {
        msg: String,
    },
    mounted() {
        window.document.body.style.backgroundColor = "#b08b78";
        window.document.body.style.width = "100%";
        window.document.body.style.overflowX = "hidden";
    }
});