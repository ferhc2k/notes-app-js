import {  openPaletteColor, trashNote, archiveNote, duplicatedNote, recoveryNote, deleteNote, changeToNoteEdit, editNote, closeFromEdit } from "../../Helpers/Functions.js";

const CardActionsButton = (classIcon, callback, id) => {
    const button = document.createElement("i");
    button.addEventListener("click", () => callback(id));
    button.classList.add(classIcon);
    return button;
}

const CardActionsMain = (id) => {
    const container = document.createElement("div");
    container.classList.add("card-note-actions");
    container.appendChild(CardActionsButton("ri-palette-line", openPaletteColor, id));
    container.appendChild(CardActionsButton("ri-delete-bin-7-line", trashNote, id));
    container.appendChild(CardActionsButton("ri-archive-line", archiveNote, id));
    container.appendChild(CardActionsButton("ri-edit-line", changeToNoteEdit, id));
    container.appendChild(CardActionsButton("ri-file-copy-line", duplicatedNote, id));
    return container;
}

const CardActionsArchive = (id) => {
    const container = document.createElement("div");
    container.classList.add("card-note-actions");
    container.appendChild(CardActionsButton("ri-palette-line", openPaletteColor, id));
    container.appendChild(CardActionsButton("ri-delete-bin-7-line", trashNote, id));
    container.appendChild(CardActionsButton("ri-device-recover-line", recoveryNote, id));
    container.appendChild(CardActionsButton("ri-edit-line", changeToNoteEdit, id));
    container.appendChild(CardActionsButton("ri-file-copy-line", duplicatedNote, id));
    return container;
}

const CardActionsTrash = (id) => {
    const container = document.createElement("div");
    container.classList.add("card-note-actions");
    container.appendChild(CardActionsButton("ri-device-recover-line", recoveryNote, id));
    container.appendChild(CardActionsButton("ri-delete-bin-7-line", deleteNote, id));
    return container;
}

const CardActionsEdit = (id) => {
    const container = document.createElement("div");
    container.classList.add("card-note-actions");
    container.appendChild(CardActionsButton("ri-close-line", closeFromEdit, id));
    container.appendChild(CardActionsButton("ri-save-line", editNote, id));
    return container;
}

const setCardsAction = {
    notes: CardActionsMain,
    archive: CardActionsArchive,
    trash: CardActionsTrash,
    edit: CardActionsEdit,
}

export const CardNote = ({ id, title, content, color, date }) => {
    const currentPage = location.hash.split("/")[1] || "notes";
    const card = document.createElement("div");
    card.classList.add("card-note");
    card.setAttribute("id", id);
    card.style.backgroundColor = color;
    card.innerHTML = `
        <p class="title">${title}</p>
        <p class="excerpt">${content}</p>
        <p>Ultima actualización: ${moment(moment(date).format()).fromNow()}.</p>
    `;
    card.appendChild(setCardsAction[currentPage](id));
    return card;
}

export const CardNoteEdit = ({ id, title, content, color }) => {
    const card = document.createElement("div");
    card.classList.add("card-note");
    card.setAttribute("id", id);
    card.style.backgroundColor = color;
    card.innerHTML = `
        <form id="form-${id}" class="card-note-form">
            <input name="title" value="${title}" required>
            <textarea name="content" rows="2" required>${content}</textarea>
        </form>
    `;
    card.appendChild(setCardsAction.edit(id));
    return card;
}