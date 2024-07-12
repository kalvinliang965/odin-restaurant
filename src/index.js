import "./style.css";
import displayHome from "./home.js";
import displayMenu from "./menu.js";
import displayContact from "./contact.js";

function main() {
    const container = document.getElementById("content");
    const home = document.getElementById("home");
    const menu = document.getElementById("menu");
    const about = document.getElementById("about");

    home.addEventListener("click", () => {
        clean(container, home, menu, about);
        home.className = "active";
        displayHome(container);
    });

    menu.addEventListener("click", ()=> {
        clean(container, home, menu, about);
        menu.className = "active";
        displayMenu(container);
    });

    about.addEventListener("click", ()=>{
        clean(container, home, menu, about);
        about.className = "active";
        displayContact(container);
    });
    clean(container, home, menu, about);
    home.className = "active";
    displayHome(container);
}

function clean(container, home, menu, about) {
    home.className = "";
    menu.className = "";
    about.className = "";
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

main();