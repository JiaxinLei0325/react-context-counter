import CounterDisplay from './components/CounterDisplay';
import CounterControls from './components/CounterControls';
import { CounterProvider } from './context/CounterContext';
import './App.css'

function App() {

  return (
<div className="container">
      <h1>React Context Counter</h1>

      <CounterDisplay />

      <CounterControls />

      <CounterDisplay />
    </div>
  )
}

export default App
