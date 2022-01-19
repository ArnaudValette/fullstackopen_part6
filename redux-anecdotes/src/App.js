import React, {useEffect} from "react";
import Anecdotes from "./components/Anecdotes";
import FilterForm from "./components/FilterForm";
import NewAnecdote from "./components/NewAnecdote";
import Notification from "./components/Notification";
import anecdoteServices from './services/anecdote'
import { initState } from "./reducers/anecdotesReducer";
import { useDispatch } from "react-redux";


function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    
      dispatch(initState())
      
    
    
  },[dispatch])


  return (
    <div >
      <h1>Anecdotes</h1>
      <Notification />
      <FilterForm />
      <Anecdotes />
      <NewAnecdote />
    </div>
  );
}

export default App;
