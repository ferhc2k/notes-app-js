export let data = JSON.parse(localStorage.getItem("dataAppNotes")) || [];

class Note {
    constructor(id, title, content, state, color, date) {
        this.id = id || Date.now().toString(36) + Math.random().toString(36).substring(2);
        this.title = title;
        this.content = content;
        this.state = state;
        this.color = color || "#c0dde0";
        this.date = date || Date.now();
    }
    edit(title, content) {
        this.title = title;
        this.content = content;
        this.date = Date.now();
        updateData();
    }
    archive() {
        this.state = "archive";
        updateData();
    }
    trash() {
        this.state = "trash";
        updateData();
    }
    delete() {
        const noteIndex = data.findIndex((item) => item.id === this.id);
        data.splice(noteIndex, 1);
        updateData();
    }
    recovery() {
        this.state = "main";
        updateData();
    }
    setColor(color) {
        this.color = color;
        updateData();
    }

}

data = data.map((note) => new Note(note.id, note.title, note.content, note.state, note.color, note.date));

export const createNote = (title, content, state) => {
    const note = new Note(undefined, title, content, state, undefined, undefined);
    data.push(note);
    updateData();
    return note;
};

const updateData = () => localStorage.setItem("dataAppNotes", JSON.stringify(data));
