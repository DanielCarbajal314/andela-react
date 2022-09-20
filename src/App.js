import './App.css';
import { EventsProvider } from './events/events-context';
import { EventTable } from './events/event-table';
import { EventFilter } from './events/event-filter';

function App() {
  return (
    <div className="App">
      <EventsProvider>
        <EventFilter></EventFilter>
        <EventTable></EventTable>
      </EventsProvider>
    </div>
  );
}

export default App;
