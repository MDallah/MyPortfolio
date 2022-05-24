import { defineComponent } from 'vue';
import { magicMouse } from "magicmouse.js";

export default defineComponent({
    name: 'Portfolio',
    props: {
        msg: String,
    },
    mounted() {
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