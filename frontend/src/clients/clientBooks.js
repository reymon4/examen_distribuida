import axios from 'axios';

const ip = process.env.VUE_APP_HOST;
const port = process.env.VUE_APP_PORT;
const path = process.env.VUE_APP_PATH;

axios.defaults.headers.common['Content-Type'] = 'application/json';

const createBook = async (body) => {
    const data = axios.post(`http://${ip}:${port}/${path}`, body)
        .then(response => response.data);
    return data;
};

const getBooks = async () => {
    const data = axios.get(`http://${ip}:${port}/${path}`)
        .then(response => response.data);
    return data;
};

const getBook = async (id) => {
    const data = axios.get(`http://${ip}:${port}/${path}/${id}`)
        .then(response => response.data);
    return data;
    console.log( "Libro: " + data);
};

const updateBook = async (id, body) => {
    const data = axios.put(`http://${ip}:${port}/${path}/${id}`, body)
        .then(response => response.data);
    return data;
};

const deleteBook = async (id) => {
    const data = axios.delete(`http://${ip}:${port}/${path}/${id}`)
        .then(response => response.data);
    return data;
};

export const createBookFacade = async (body) => {
    return await createBook(body);
};

export const getBooksFacade = async () => {
    return await getBooks();
};

export const getBookFacade = async (id) => {
    return await getBook(id);
};

export const updateBookFacade = async (id, body) => {
    return await updateBook(id, body);
};

export const deleteBookFacade = async (id) => {
    return await deleteBook(id);
};