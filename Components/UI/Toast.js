const toastContainer = document.querySelector(".toast-container");
const Toast = (msg, id) => {
    const message = document.createElement("div");
    message.setAttribute("id", id);
    message.classList.add("toast");
    message.innerHTML = `
        <i class="ri-checkbox-circle-fill"></i>
        <span>${msg}</span>
    `;
    return message;
}

export const generateToast = (msg) => {
    const id = Date.now().toString(36) + Math.random().toString(36).substring(2);
    toastContainer.appendChild(Toast(msg, id));
    document.getElementById(id).classList.add("toast-active");
    setTimeout(() =>  toastContainer.removeChild(document.getElementById(id)), 5000);
}