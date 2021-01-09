import { createApp } from "vue";
import App from "./App.vue";
import DemoBox from "./components/DemoBox.vue";

createApp(App).component("demo-box", DemoBox).mount("#app");
