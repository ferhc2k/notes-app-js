import { Title } from "../UI/Title.js";
import { CardNote } from "../UI/CardNote.js";

export const Header = () => {
    const header = document.createElement("header");
    header.classList.add("section-header");
    header.appendChild(Title("Trash"));
    return header;
}

const Data = (dataFilter) => {
    const fragment = document.createDocumentFragment();
    const data = document.createElement("div");
    data.classList.add("section-data");
    if(dataFilter.length > 0) {
        dataFilter.forEach(note => fragment.appendChild(CardNote(note, "trash")));
        data.appendChild(fragment);
    }else {
        data.innerHTML = "<p>Vacio</p>";
    }
    return data;
}

export const Trash = (dataFilter) => {
    const main = document.createElement("div");
    main.classList.add("section-container");
    main.appendChild(Header());
    main.appendChild(Data(dataFilter));
    return main;
}



