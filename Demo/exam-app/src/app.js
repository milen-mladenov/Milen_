import { render, page } from './lib.js'
import { login, logout } from './api/users.js'
import { getUserData, clearUserData } from './util.js'

import { homeView } from './views/home.js'
import { dashboardView } from './views/dashboard.js'
import { loginView } from './views/login.js'
import { registerView } from './views/register.js'
import { createView } from './views/create.js'
import { detailsView } from './views/details.js'
import { editView } from './views/edit.js'

const main = document.querySelector('main')

document.getElementById("logoutBtn").addEventListener("click", onLogout)

page(decorationCtx)
updateNav()
page('/', homeView)
page('/dashboard', dashboardView)
page('/login', loginView)
page('/register', registerView)
page('/create', createView)
page('/details/:id', detailsView)
page('/edit/:id', editView)
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
        document.querySelector(".user").style.display = "block";
        document.querySelector(".guest").style.display = "none";
    } else {
        document.querySelector(".user").style.display = "none";
        document.querySelector(".guest").style.display = "block";
    }
}

function onLogout() {
    logout()
    clearUserData()
    updateNav()
    page.redirect('/')
}

