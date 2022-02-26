const Header = () => {
    const header = document.createElement("div");
    const icon = document.createElement("i");
    const title = document.createElement("h1");
    header.classList.add("sidebar-header");
    icon.classList.add("sidebar-header-icon", "ri-menu-line");
    title.classList.add("sidebar-title");
    icon.setAttribute("id", "toggle-sidebar");
    icon.addEventListener("click", toggleSidebar);
    title.textContent = "Keep";
    header.appendChild(icon);
    header.appendChild(title)
    return header;
}


const LineIndicator = () => {
    const line = document.createElement("div");
    line.classList.add("line-indicator");
    return line;
}

const Link = (name, url, classIcon) => {
    const link = document.createElement("a");
    const span = document.createElement("span");
    const icon = document.createElement("i");
    link.classList.add("sidebar-menu-item");
    icon.classList.add("sidebar-icon", classIcon);
    span.classList.add("sidebar-tooltip");
    link.setAttribute("href", url);
    link.addEventListener("click", openMenuItem);
    span.textContent = name;
    link.appendChild(icon);
    link.appendChild(span);
    return link;
}

const Menu = () => {
    const menu = document.createElement("div");
    menu.classList.add("sidebar-menu");
    menu.appendChild(LineIndicator());
    menu.appendChild(Link("Notes", "#/notes", "ri-booklet-line"));
    menu.appendChild(Link("Archived notes", "#/archive", "ri-archive-line"));
    menu.appendChild(Link("Trash", "#/trash", "ri-delete-bin-7-line"));
    return menu;
}

export const Sidebar = () => {
    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");
    sidebar.appendChild(Header());
    sidebar.appendChild(Menu());
    return sidebar;
}

export const setLineIndicator = (element) => {
    const lineIndicator = document.querySelector(".line-indicator");
    lineIndicator.style.cssText = `top: ${element.getBoundingClientRect().top}px; height: ${element.clientHeight}px`;
    element.classList.add("sidebar-menu-item-select");
};

const openMenuItem = (e) => {
    const sidebarMenu = document.querySelector(".sidebar-menu");
    Array.from(sidebarMenu.children, (item) => item.classList.remove("sidebar-menu-item-select"));
    setLineIndicator(e.currentTarget);
};

const toggleSidebar = () => {
    const toggle = document.getElementById("toggle-sidebar");
    const sidebar = document.querySelector(".sidebar");
    const sidebarMenuItem = document.querySelectorAll(".sidebar-menu-item");

    sidebar.classList.toggle("sidebar-active");
    for (let menuItem of sidebarMenuItem) {
        if (sidebar.classList.contains("sidebar-active")) {
            toggle.classList.replace("ri-menu-line", "ri-close-fill");
            menuItem.querySelector("span").removeAttribute("class");
        } else {
            toggle.classList.replace("ri-close-fill", "ri-menu-line");
            menuItem.querySelector("span").classList.add("sidebar-tooltip");
        }
    }
}