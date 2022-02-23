const Header = () => {
    const header = document.createElement("div");
    const icon = document.createElement("i");
    const title = document.createElement("h1");
    header.classList.add("sidebar-header");
    icon.setAttribute("id", "action-sidebar");
    icon.classList.add("sidebar-header-icon");
    icon.classList.add("ri-menu-line");
    icon.setAttribute("onclick", "actionSidebar(event)")
    title.classList.add("sidebar-title");
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
    link.href = url;
    link.setAttribute("onclick", "openMenuItem(event)")
    link.classList.add("sidebar-menu-item");
    icon.classList.add("sidebar-icon");
    icon.classList.add(classIcon);
    span.classList.add("sidebar-tooltip");
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

