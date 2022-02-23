export const Title = (name) => {
    const title = document.createElement("h1");
    title.classList.add("section-header-title");
    title.textContent = name;
    return title;
}