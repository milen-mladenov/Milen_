import { deleteOffer, getJobById } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";


const detailsTemplate = (job, onDelete, jobOwner, isLogged) => html`

<section id="details">
  <div id="details-wrapper">
    <img id="details-img" src=${job.imageUrl} alt="example1" />
    <p id="details-title">${job.title}</p>
    <p id="details-category">
      Category: <span id="categories">IT, Developer, WEB</span>
    </p>
    <p id="details-salary">
      Salary: <span id="salary-number">${job.salary}</span>
    </p>
    <div id="info-wrapper">
      <div id="details-description">
        <h4>Description</h4>
        <span
          >${job.description}</span
        >
      </div>
      <div id="details-requirements">
        <h4>Requirements</h4>
        <span
          >${job.requirements}</span
        >
      </div>
    </div>
    <p>Applications: <strong id="applications">1</strong></p>

    <div id="action-buttons">
    ${jobOwner
    ? html`
        <a href="/edit/${job._id}" id="edit-btn">Edit</a>
        <a href="javascript:void(0)" @click=${onDelete} id="delete-btn">Delete</a>`
    : ""
  }
    ${isLogged && !jobOwner ?
    html`<a href="" id="apply-btn">Apply</a>`
    : ""
  }
    </div>
  </div>
</section>
`

export async function detailsView(ctx) {
  const job = await getJobById(ctx.params.id)
  const user = getUserData()
  const jobOwner = user?.id == job._ownerId
  const isLogged = user ? true : false

  async function onDelete() {
    const choice = confirm('Are you sure you want to delete this meme?')

    if (choice) {
      await deleteOffer(job._id)
      ctx.page.redirect('/dashboard')
    }
  }
  ctx.render(detailsTemplate(job, onDelete, jobOwner, isLogged))
}