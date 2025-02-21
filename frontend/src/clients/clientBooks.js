import axios from 'axios';

const ip = process.env.VUE_APP_API_BOOKS_SERVER;
const port = process.env.VUE_APP_API_BOOKS_PORT;
const path = process.env.VUE_APP_API_BOOKS_PATH;

const createBook = async (body) => {
    const data = axios.post(`${ip}:${port}/${path}`, body)
        .then(response => response.data);
    return data;
};

const getBooks = async () => {
    const data = axios.get(`${ip}:${port}/${path}`)
        .then(response => response.data);
    return data;
};

const getBook = async (id) => {
    const data = axios.get(`${ip}:${port}/${path}/${id}`)
        .then(response => response.data);
    return data;
};

const updateBook = async (id, body) => {
    const data = axios.put(`${ip}:${port}/${path}/${id}`, body)
        .then(response => response.data);
    return data;
};

const deleteBook = async (id) => {
    const data = axios.delete(`${ip}:${port}/${path}/${id}`)
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