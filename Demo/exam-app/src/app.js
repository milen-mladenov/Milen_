import { render, page } from './lib.js'
import { logout } from './api/users.js'
import { getUserData, clearUserData } from './util.js'

const main = document.querySelector('main')

document.getElementById("logoutBtn").addEventListener("click", onLogout)


page(decorationCtx)
page('/', () => console.log("home"))
page('/memes', () => console.log("home"))
page('/login', () => console.log("login"))
page('/register', () => console.log("register"))
page('/', () => console.log("home"))

page.start()


function renderMain(templateResult) {
    render(templateResult, main)
}

function decorationCtx(ctx, next) {
    ctx.render = renderMain;
    ctx.updateNav = updateNav;
    next()
}

function updateNav() {
    const userData = getUserData()

    if (userData) {
        document.getElementById("user").style.display = "block";
        document.getElementById("guest").style.display = "none";
    } else {
        document.getElementById("user").style.display = "none";
        document.getElementById("guest").style.display = "block";
    }
}

function onLogout() {
    logout()
    clearUserData()
    updateNav()
    page.redirect('/')
}

