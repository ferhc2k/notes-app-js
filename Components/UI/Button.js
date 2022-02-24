export const Button = (name, classIcon, callback) => {
    const button = document.createElement("button");
    button.classList.add("button-primary");
    button.addEventListener("click", callback);
    button.innerHTML = `
        <span>${name}</span>
        <i class="${classIcon}"></i>
    `;
    return button;
}