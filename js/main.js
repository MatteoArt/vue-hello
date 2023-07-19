
const app = Vue.createApp({
    data() {
        //la funzione ritorna un oggetto
        return {
            messaggio: "Hello VueJs!",
            image: "images/img2.jpg",
            classes: "pic"
        }

    }
});

app.mount("#app");