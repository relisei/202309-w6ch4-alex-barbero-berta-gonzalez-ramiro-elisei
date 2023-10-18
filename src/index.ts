import App from "./components/App/App.js";

const appComponent = document.querySelector("div")!;

const app = new App(appComponent, "div", "container");
app.render();
