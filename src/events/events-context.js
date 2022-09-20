import React, { createContext, useState } from "react";
import { events } from './source';

const EventsContext = createContext(undefined);

const EventsProvider = ({ children }) => {
    const [filteredEvents, setFilteredEvents] = useState(events);
    const [filters, setFilters] = useState({
        isAnd: false,
        city: null,
        price: null,
        showCheapes: false,
    })
    const filterEvents = () => {
        const cityContains = node => filters.city ? node.city.includes(filters.city) : false;
        const priceIsLessThanOrEqual = node => filters.price? node.price<=parseFloat(filters.price)  : false;
        const filterFunc = (node) => {
            const cityNameContains = cityContains(node);
            const priceIsLower = priceIsLessThanOrEqual(node);
            const filtersAreEmpty = !filters.city && !filters.price;
            const evaluation = filters.isAnd ? priceIsLower && cityNameContains : priceIsLower || cityNameContains;
            return filtersAreEmpty || evaluation;
        };
        const filteredValues = events.filter(filterFunc);
        const cheapesOne = filteredValues.sort((a,b) => a.price-b.price)[0];
        const cheapesArray = cheapesOne? [ cheapesOne ] : [];
        setFilteredEvents(filters.showCheapes? cheapesArray : filteredValues);
    }
    return (
      <EventsContext.Provider value={{filteredEvents, filterEvents, setFilters}}>
          {children}
      </EventsContext.Provider>
    );
  }

export { EventsContext, EventsProvider }