const Message = (msg) => {
    const message = document.createElement("div");
    message.classList.add("message");
    message.textContent = msg;
    return message;
}

export const generateMessage = (msg) => {
    document.body.appendChild(Message(msg));
    setTimeout(() => document.querySelector(".message").classList.add("message-active"), 250)
    setTimeout(() => document.querySelector(".message").remove(), 5000);
}