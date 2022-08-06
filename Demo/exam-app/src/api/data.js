import * as api from './api.js'

export const login = api.login
export const register = api.register
export const logout = api.logout

//get all items 
export async function getAll() {
    return api.get('/data/books?sortBy=_createdOn%20desc')
}
//get item by id
export async function getById(id) {
    return api.get('/data/books/' + id)
}
//get own items
export async function getMy(userId) {
    return api.get(`/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}
//create item
export async function create(book) {
    return api.post('/data/kooks', book)
}
//edit item
export async function edit(id, book) {
    return api.put('/data/books/' + id, book)
}
//delete item
export async function deleteItem(id) {
    return api.del('/data/books/' + id)
}

export async function like(bookId) {
    return api.post('/data/likes', {
        bookId
    })
}

export async function searchBooks(query) {
    return api.get('/data/books?where=' + encodeURIComponent(`title LIKE "${query}"`))
}