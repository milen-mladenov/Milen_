import { html } from "../lib.js";
import { register } from '../api/users.js'

const registerTemplate = (onSubmit) => html`
<!-- Register Page (Only for Guest users) -->
<section id="register">
  <div class="form">
    <h2>Register</h2>
    <form @submit=${onSubmit} class="login-form">
      <input
        type="text"
        name="email"
        id="register-email"
        placeholder="email"
      />
      <input
        type="password"
        name="password"
        id="register-password"
        placeholder="password"
      />
      <input
        type="password"
        name="re-password"
        id="repeat-password"
        placeholder="repeat password"
      />
      <button type="submit">register</button>
      <p class="message">Already registered? <a href="#">Login</a></p>
    </form>
  </div>
</section>
`

export function registerView(ctx) {
    ctx.render(registerTemplate(onSubmit))

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