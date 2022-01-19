import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes"


const getAll = async () => {

    const response = await axios.get(baseUrl)
    
    return response.data
}

const newAnecdote = async (content) => {
    const newObj = {content, important : false}

    const response = await axios.post(baseUrl, newObj)
    return response.data
}

const voteAnecdote = async (a) => {
    const newObj = {
        content: a.content, 
        vote : a.vote + 1,
        id : a.id    
    }

    const response = await axios.put(`${baseUrl}/${a.id}`, newObj)
    return response.data
}

export default {
    getAll,
    newAnecdote,
    voteAnecdote
}