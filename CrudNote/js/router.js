import home from "./views/home.js";
import login from "./views/login.js";
import register from "./views/register.js";
import dashboard from "./views/dashboard.js";
import notes from "./views/notes.js";

const routes = {
    "/": home,
    "/login": login,
    "/register": register,
    "/dashboard": dashboard,
    "/notes": notes,
}

export function router() {
    const path = location.hash.slice(1).split('?')[0] || '/';
    const view = routes[path] || home; 
    const app = document.getElementById("app");
    app.innerHTML = view();
}

window.addEventListener("hashchange", router);
router();