import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import React from "react"
import { voteUp } from "../reducers/anecdotesReducer"
import { rmNotif, setNotif } from "../reducers/notificationReducer"


const Anecdote = ({handleClick, note}) => {
    return(
        <li>
            <p>{note.content}</p>
            <div>has {note.vote} <button onClick={handleClick}>vote</button></div>
        </li>
    )
}

const Anecdotes = () => {
    const dispatch = useDispatch()
    const filter = useSelector(state => state.filter)
    const notes = useSelector(state => state.anecdotes.filter(a => a.content.toLowerCase().includes(filter.toLowerCase())))
    
    const voteForAnecdote = (n) => {
        dispatch(voteUp(n))
        dispatch(setNotif(`You voted for ${n.content}`, 3))
        
        

    }
    

    return(<div>
        
            
        <ul>
            {notes.map(n => <Anecdote 
                                        handleClick={()=>voteForAnecdote(n)}
                                        note={n}
                                        key={n.id}
                            />)}        
        </ul>
        </div>
    )
}



export default Anecdotes