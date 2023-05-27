import './App.css';
import Form from './Component/Form'
import Parent from './Component/Props/Parent';
import Toggle from './Component/Toggle';
import StateComponent from './Component/stateComponent';

function App() {
  return (
    <div className="App">
      <StateComponent age={20}/>
      <Parent/>
      <Toggle/>
      <Form/>
    </div>
  );
}

export default App;
