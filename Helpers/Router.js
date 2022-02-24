import { data } from "./ProcessData.js";
import { Main } from "../Components/Main/Main.js";
import { Archive } from "../Components/Archive/Archive.js";
import { Trash } from "../Components/Trash/Trash.js";

export const Router = () => {
    const {hash} = location;
    if(!hash || hash === "#/notes") {
        return Main(data.filter(notes => notes.state === "main"));
    }else if (hash === "#/archive") {
        return Archive(data.filter(notes => notes.state === "archive"));
    }else {
        return Trash(data.filter(notes => notes.state === "trash"));
    }
}