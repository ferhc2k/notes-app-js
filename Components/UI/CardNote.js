import {  openPaletteColor, trashNote, archiveNote, duplicatedNote, recoveryNote, deleteNote } from "../../Helpers/Functions.js";

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
    //container.appendChild(CardActionsButton("ri-edit-line"));
    container.appendChild(CardActionsButton("ri-file-copy-line", duplicatedNote, id));
    return container;
}

const CardActionsArchive = (id) => {
    const container = document.createElement("div");
    container.classList.add("card-note-actions");
    container.appendChild(CardActionsButton("ri-palette-line", openPaletteColor, id));
    container.appendChild(CardActionsButton("ri-delete-bin-7-line", trashNote, id));
    container.appendChild(CardActionsButton("ri-device-recover-line", recoveryNote, id));
    //container.appendChild(CardActionsButton("ri-edit-line"));
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

const setCardsAction = {
    notes: CardActionsMain,
    archive: CardActionsArchive,
    trash: CardActionsTrash,
}

export const CardNote = (data) => {
    let page = location.hash.split("/")[1];
    const card = document.createElement("div");
    card.style.background = data.color;
    card.classList.add("card-note");
    card.id = data.id;
    card.textContent = data.content;
    card.innerHTML += `<p>Ultima actualización: ${moment(moment(data.date).format()).fromNow()}.</p>`;
    card.appendChild(setCardsAction[page](data.id));
    return card;
}