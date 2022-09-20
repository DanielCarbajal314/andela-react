import './App.css';
import { events } from './events/source'

function App() {
  return (
    <div className="App">
      {events.map(({id}) => (<p key={id}>{id}</p>))}
    </div>
  );
}

export default App;
