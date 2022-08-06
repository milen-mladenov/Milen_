import { editOffer,getJobById } from "../api/data.js";
import { html } from "../lib.js";


const editTemplate = (offer, onSubmit) => html`

<section id="edit">
  <div class="form">
    <h2>Edit Offer</h2>
    <form @submit=${onSubmit} class="edit-form">
      <input
        type="text"
        name="title"
        id="job-title"
        placeholder="Title"
        .value=${offer.title}
      />
      <input
        type="text"
        name="imageUrl"
        id="job-logo"
        placeholder="Company logo url"
        .value=${offer.imageUrl}
      />
      <input
        type="text"
        name="category"
        id="job-category"
        placeholder="Category"
        .value=${offer.category}
      />
      <textarea
        id="job-description"
        name="description"
        placeholder="Description"
        rows="4"
        cols="50"
        .value=${offer.description}
      ></textarea>
      <textarea
        id="job-requirements"
        name="requirements"
        placeholder="Requirements"
        rows="4"
        cols="50"
        .value=${offer.requirements}
      ></textarea>
      <input
        type="text"
        name="salary"
        id="job-salary"
        placeholder="Salary"
        .value=${offer.salary}
      />

      <button type="submit">post</button>
    </form>
  </div>
</section>
`

export async function editView(ctx) {
    const job = await getJobById(ctx.params.id)
    ctx.render(editTemplate(job, onSubmit))

    async function onSubmit(e) {
        e.preventDefault()

        const data = new FormData(e.target)

        const offer = {
            title: data.get("title"),
            imageUrl: data.get("imageUrl"),
            category: data.get("category"),
            description: data.get("description"),
            requirements: data.get("requirements"),
            salary: data.get("salary"),
        }


        if (offer.title == "" ||
            offer.description == "" ||
            offer.imageUrl == "" ||
            offer.category == "" ||
            offer.requirements == "" ||
            offer.salary == ""
        ) {
            return notify("All fields are required!")
        }
        
        await editOffer(job._id, offer)
        e.target.reset()
        ctx.page.redirect('/details/' + job._id)
    }
}