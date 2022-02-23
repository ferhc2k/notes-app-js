const toastContainer = document.querySelector(".toast-container");

const Toast = (msg, id) => {
    const message = document.createElement("div");
    message.classList.add("toast");
    message.setAttribute("id", id);
    message.innerHTML = `<i class="ri-checkbox-circle-fill"></i>`;
    message.innerHTML += `<span>${msg}</span>`;
    return message;
}

export const generateToast = (msg) => {
    const id = Date.now().toString(36) + Math.random().toString(36).substring(2);
    toastContainer.appendChild(Toast(msg, id));
    document.querySelector(".toast").classList.add("toast-active")
    setTimeout(() => document.querySelector(`#${id}`).remove(), 3000);
}