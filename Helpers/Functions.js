import { Router } from "./Router.js";
import { data, createNote } from "./ProcessData.js";
import { generateMessage } from "../Components/UI/Message.js";
import { CardNote } from "../Components/UI/CardNote.js";

const $ = (select) => document.querySelector(select);

export const renderPage = () => {
    $("#app").innerHTML = "";
    $("#app").appendChild(Router())
}

const renderNodo = (newNodo, oldNodo) => $(`.section-data`).replaceChild(newNodo, oldNodo);

export const addNodo = (nodo) => $(`.section-data`).appendChild(nodo);

const removeNodo = (nodo) => nodo.remove();

export const openPaletteColor = (id) => {
    const paletteColor = $(".palette-color");
    paletteColor.classList.toggle("palette-color-active");
    paletteColor.setAttribute("data-id", id);
}

export const setColorNote = (id, color) => {
    const note = data.find(item => item.id === id);
    note.setColor(color);
    generateMessage("Color cambiado correctamente");
    renderNodo(CardNote(note), $(`#${id}`));
    $(".palette-color").classList.remove("palette-color-active");
}

export const archiveNote = (id) => {
    data.find(item => item.id === id).archive();
    generateMessage("Nota archivada correctamente");
    removeNodo($(`#${id}`));
}

export const trashNote = (id) => {
    data.find(item => item.id === id).trash();
    generateMessage("Se movio a la papelera correctamente");
    removeNodo($(`#${id}`));
}

export const duplicatedNote = (id) => {
    const { title, content, state } = data.find(item => item.id === id);
    const note = createNote( title, content, state );
    generateMessage("Se duplico correctamente");
    addNodo(CardNote(note));
}

export const deleteNote = (id) => {
    data.find(item => item.id === id).delete();
    generateMessage("Nota eliminada correctamente");
    removeNodo($(`#${id}`));
}

export const recoveryNote = (id) => {
    data.find(item => item.id === id).recovery();
    generateMessage("Nota recuperada correctamente");
    removeNodo($(`#${id}`));
};