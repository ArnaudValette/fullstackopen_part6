import { useDispatch } from "react-redux"
import { setFilter } from "../reducers/filterReducer"
import React from "react"

const FilterForm = () => {

    const dispatch = useDispatch()

    const handleChange = (event) => {
        const filter = event.target.value
        dispatch(setFilter(filter))
        
    }

    return(<div>
        filter <input onChange={handleChange} />
    </div>)
}


export default FilterForm