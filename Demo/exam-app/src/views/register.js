import { html } from "../lib.js";
import {register} from '../api/users.js'

const registerTemplate = () => html`
<!--Register Page-->
<section id="registerPage">
    <form class="registerForm">
        <img src="./images/logo.png" alt="logo" />
        <h2>Register</h2>
        <div class="on-dark">
            <label for="email">Email:</label>
            <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
        </div>

        <div class="on-dark">
            <label for="password">Password:</label>
            <input id="password" name="password" type="password" placeholder="********" value="">
        </div>

        <div class="on-dark">
            <label for="repeatPassword">Repeat Password:</label>
            <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
        </div>

        <button class="btn" type="submit">Register</button>

        <p class="field">
            <span>If you have profile click <a href="#">here</a></span>
        </p>
    </form>
</section>
`

export function registerView(ctx) {
    ctx.render(registerTemplate())

    async function onSubmit(e) {
        e.preventDefault()

        const data = new FormData(e.target)

        const email = data.get('email')
        const password = data.get('password')
        const rePass = data.get('repeatPassword')


        if (email == "" || password == "") {
            return alert("All fields are required!")
        }

        if (password !== rePass) {
            return alert("Passwords don't match!")
        }

        await register(email, password)
        ctx.updateNav()
        ctx.page.redirect("/")
    }
}