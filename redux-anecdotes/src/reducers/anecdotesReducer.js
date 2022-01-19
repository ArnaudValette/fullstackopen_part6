import anecdoteServices from '../services/anecdote'


const anecdotesReducer = (state= [], action) => {
    switch(action.type){
        case "NEW_ANECDOTE" :
            return state.concat(action.data)
        case "VOTE_UP" : {
            const id = action.data.id
            const anecdoteToChange = state.find(n => n.id === id)
            const newAnecdote = {
                ...anecdoteToChange, vote : anecdoteToChange.vote + 1
            }
            return state.map(a => a.id === id ? newAnecdote : a)
        }
        case "INIT_STATE": {
            return action.data
        }
        default :
        return state
    }
}

const generateId = () => {
    return Math.floor(Math.random() * 100000)
}

export const addAnecdote = (data) => {
    return async dispatch => {
        const newAnec = await anecdoteServices.newAnecdote(data)
        dispatch({
            type: 'NEW_ANECDOTE',
            data:newAnec
        })
    }
    


}

export const voteUp = (a) => {
    return async dispatch => {
        const newAnec = await anecdoteServices.voteAnecdote(a)
        dispatch({
            type:'VOTE_UP',
            data: {id : newAnec.id}
        })
    }
    
}

export const initState = () => {
    return async dispatch => {
        const anecdotes = await anecdoteServices.getAll()
        dispatch({
            type: "INIT_STATE",
            data : anecdotes
        })
    }
    
}



export default anecdotesReducer