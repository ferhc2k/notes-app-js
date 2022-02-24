import { setColorNote } from "../../Helpers/Functions.js";

const colors = ["#8e9aaf", "#CBC0D3", "#EFD3D7", "#FEEAFA", "#FEEAFA", "#c2d8b9", "#e4f0d0", "#fffcf7", "#a1b5d8","#f1e3d3", "#cae9ff"];

const colorComponent = (color) => {
    const item = document.createElement("div");
    item.setAttribute("data-color", color);
    item.classList.add("palette-color-item");
    item.style.backgroundColor = color;
    item.addEventListener("click", (e) => {
        setColorNote(e.target.parentElement.parentElement.dataset.id, e.target.dataset.color);
    })
    return item;
}

export const PaletteColor = () => {
    const container = document.createElement("div");
    const palette = document.createElement("div");
    const fragment = document.createDocumentFragment();
    container.classList.add("palette-color-container");
    container.addEventListener("click", closePaletteColor);
    palette.classList.add("palette-color");
    colors.map(color => fragment.appendChild(colorComponent(color)));
    palette.appendChild(fragment);
    container.appendChild(palette);
    return container;
}

const closePaletteColor = (e) => {
    if (e.target === e.currentTarget) {
        e.currentTarget.classList.remove("palette-color-visible");
    } 
};