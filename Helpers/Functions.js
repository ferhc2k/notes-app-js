import { Router } from "./Router.js";
import { data, createNote } from "./ProcessData.js";
import { generateToast } from "../Components/UI/Toast.js";
import { CardNote, CardNoteEdit } from "../Components/UI/CardNote.js";

const $ = (select) => document.querySelector(select);

export const renderPage = () => {
    $("#app").innerHTML = "";
    $("#app").appendChild(Router())
}

const replaceNodo = (newNodo, oldNodo) => $(`.section-data`).replaceChild(newNodo, oldNodo);

export const addNodo = (nodo) => $(`.section-data`).appendChild(nodo);

const removeNodo = (nodo) => $(`.section-data`).removeChild(nodo);

export const openPaletteColor = (id) => {
    const paletteColor = $(".palette-color-container");
    paletteColor.setAttribute("data-id", id);
    paletteColor.classList.add("palette-color-visible");
}

export const setColorNote = (id, color) => {
    const note = data.find(item => item.id === id);
    note.setColor(color);
    replaceNodo(CardNote(note), $(`#${id}`));
    generateToast("Color cambiado");
    $(".palette-color-container").classList.remove("palette-color-visible");
}

export const changeToNoteEdit = (id) => {
    const note = data.find(item => item.id === id);
    replaceNodo(CardNoteEdit(note), $(`#${id}`));
}

export const closeFromEdit = (id) => {
    const note = data.find(item => item.id === id);
    replaceNodo(CardNote(note), $(`#${id}`));
}

export const editNote = (id) => {
    const note = data.find(item => item.id === id);
    const formData = new FormData($(`#form-${id}`));
    note.edit(formData.get("title"), formData.get("content"));
    replaceNodo(CardNote(note), $(`#${id}`));
    generateToast("Se ha modificado la nota");
}

export const archiveNote = (id) => {
    data.find(item => item.id === id).archive();
    removeNodo($(`#${id}`));
    generateToast("Nota movida al archivo");
}

export const trashNote = (id) => {
    data.find(item => item.id === id).trash();
    removeNodo($(`#${id}`));
    generateToast("Nota movida a la papelera");
}

export const duplicatedNote = (id) => {
    const { title, content, state } = data.find(item => item.id === id);
    const newNote = createNote( title, content, state );
    addNodo(CardNote(newNote));
    generateToast("Se duplico correctamente");
}

export const deleteNote = (id) => {
    data.find(item => item.id === id).delete();
    removeNodo($(`#${id}`));
    generateToast("Nota eliminada");
}

export const recoveryNote = (id) => {
    data.find(item => item.id === id).recovery();
    removeNodo($(`#${id}`));
    generateToast("Nota recuperada");
};