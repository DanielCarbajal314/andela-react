import { useContext } from "react"
import { EventsContext } from "./events-context";

export const EventFilter = () => {
    const { filterEvents, setFilters } = useContext(EventsContext)

    const handleCityChange = (event) => {
        setFilters(filters => ({...filters, city: event.target.value}));
    }

    const handlePriceChange = (event) => {
        setFilters(filters => ({...filters, price: event.target.value}))
    }

    const handleOperationChange = (event) => {
        setFilters(filters => ({...filters, isAnd: event.target.checked}))
    }

    const handleCheapesChange = (event) => {
        setFilters(filters => ({...filters, showCheapes: event.target.checked}))
    }

    return(
        <div>
            <label>City</label>
            <input onChange={handleCityChange} type="text"></input>
            <label>Price</label>
            <input onChange={handlePriceChange} type="number"></input>
            <label>Use And</label>
            <input onChange={handleOperationChange} type="checkbox"></input>            
            <label>Only The Cheapes</label>
            <input onChange={handleCheapesChange} type="checkbox"></input>
            <button onClick={() => filterEvents()}>Filter</button>
        </div>
    )
}