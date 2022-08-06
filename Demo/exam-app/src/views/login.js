import { html } from "../lib.js";
import { login } from "../api/users.js";

const loginTemplate = (onSubmit) => html`
<!--Login Page-->
<section id="loginPage">
    <form @submit=${onSubmit} class="loginForm">
        <img src="./images/logo.png" alt="logo" />
        <h2>Login</h2>

        <div>
            <label for="email">Email:</label>
            <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
        </div>

        <div>
            <label for="password">Password:</label>
            <input id="password" name="password" type="password" placeholder="********" value="">
        </div>

        <button class="btn" type="submit">Login</button>

        <p class="field">
            <span>If you don't have profile click <a href="/register">here</a></span>
        </p>
    </form>
</section>
`

export function loginView(ctx) {
    ctx.render(loginTemplate(onSubmit))
    async function onSubmit(e) {
        e.preventDefault()

        const data = new FormData(e.target)

        const email = data.get('email')
        const password = data.get('password')


        if (email == "" || password == "") {
            return alert("All fields are required!")
        }

        await login(email, password)
        ctx.updateNav()
        ctx.page.redirect("/")
    }
}