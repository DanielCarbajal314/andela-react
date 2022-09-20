import { useContext } from "react";
import { EventsContext } from './events-context'

export const EventTable = () => {
    const { filteredEvents } = useContext(EventsContext);
    
    return (<table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>City</th>
                        <th>Price</th>
                        <th>Artist</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredEvents.map(event=>(
                        <tr key={event.id}>
                            <td>{event.id}</td>
                            <td>{event.city}</td>
                            <td>{event.price}</td>
                            <td>{event.name}</td>
                        </tr>))
                    }
                </tbody>
            </table>);
}