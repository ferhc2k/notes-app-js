import { generateToast } from "./Toast.js";
import { addNodo } from "../../Helpers/Functions.js";
import { createNote } from "../../Helpers/ProcessData.js";
import { CardNote } from "./CardNote.js";

const Form = () => {
    const form = document.createElement("form");
    form.addEventListener("submit", handleSubmit)
    form.classList.add("form");
    form.innerHTML = `
        <div class="form-input">
            <input name="title" placeholder="Titulo" required="true">
        </div>
        <div class="form-input">
            <textarea name="content" rows="10" placeholder="Añade una nota" required="true"></textarea>
        </div>
        <button class="button-primary">Crear nota <i class="ri-save-line"></i></button>
    `;
    return form;
}

export const Modal = () => {
    const modalContainer = document.createElement("div");
    const modal = document.createElement("div");
    modalContainer.setAttribute("id", "modal-container");
    modalContainer.classList.add("modal-container");
    modalContainer.addEventListener("click", closeModal);
    modal.classList.add("modal");
    modal.innerHTML = "<h1>Crear nota</h1>";
    modal.appendChild(Form());
    modalContainer.appendChild(modal);
    return modalContainer;
}

const closeModal = (e) => {
    if (e.target === e.currentTarget) {
        e.currentTarget.classList.remove("modal-container-visible");
    } 
};

const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const note = createNote(formData.get("title"), formData.get("content"), "main");
    e.currentTarget.reset();
    addNodo(CardNote(note, "main"));
    generateToast("Nota creada");
    document.getElementById("modal-container").classList.remove("modal-container-visible");
};