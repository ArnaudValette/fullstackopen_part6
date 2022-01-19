import { useDispatch, useSelector } from "react-redux"
import { addAnecdote } from "../reducers/anecdotesReducer"
import { rmNotif, setNotif } from "../reducers/notificationReducer"
import anecdoteService from '../services/anecdote'

const NewAnecdote = () => {

    const dispatch = useDispatch()

    const handleSubmit = async (event) => {
        event.preventDefault()

        const content = event.target.contenu.value
        event.target.contenu.value = ""

        dispatch(addAnecdote(content))


        dispatch(setNotif(`You added ${content}`, 3))

        
    }

    return(<form onSubmit={handleSubmit}>
        <input name="contenu"/>
        <button type="submit">add</button>
    </form>)
}


export default NewAnecdote