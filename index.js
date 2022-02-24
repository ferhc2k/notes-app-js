import { Sidebar } from "./Components/Sidebar/Sidebar.js";
import { ContainerApp } from "./Components/UI/ContainerApp.js";
import { Modal } from "./Components/UI/Modal.js";
import { Router } from "./Helpers/Router.js";
import { PaletteColor } from "./Components/UI/PaletteColor.js";
import { renderPage } from "./Helpers/Functions.js";

const root = document.getElementById("root");
const $ = (select) => document.querySelector(select);

const App = () => {
    root.appendChild(Sidebar());
    root.appendChild(ContainerApp());
    $("#app").appendChild(Router());
    document.body.appendChild(Modal());
    document.body.appendChild(PaletteColor());
}

document.addEventListener("DOMContentLoaded", App);
window.addEventListener("hashchange", renderPage);


