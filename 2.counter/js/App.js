import { Counter } from "./components/Counter.js";

class App {
  constructor() {
    const $app = document.querySelector("#app");
    new Counter($app);
  }
}

new App();
