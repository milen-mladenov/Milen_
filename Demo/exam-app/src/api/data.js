import * as api from './api.js'

//get all items 
export async function getAllJobs() {
    return api.get('/data/offers?sortBy=_createdOn%20desc')
}
//get item by id
export async function getJobById(id) {
    return api.get('/data/offers/' + id)
}

//create item
export async function createOffer(job) {
    return api.post('/data/offers', job)
}
//edit item
export async function edit(id, job) {
    return api.put('/data/jobs/' + id, job)
}
//delete item
export async function deleteOffer(id) {
    return api.del('/data/offers/' + id)
}

export async function like(jobId) {
    return api.post('/data/likes', {
        bookId
    })
}
