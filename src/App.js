import './App.css';
import Form from './Component/Form'
import Parent from './Component/Props/Parent';
import Toggle from './Component/Toggle';
import StateComponent from './Component/stateComponent';
import StateHook from './Component/Hooks/StateHook';
import EffectHook from './Component/Hooks/EffectHook';

function App() {
  return (
    <div className="App">
      <StateComponent age={20}/>
      <Parent>This is child as Props</Parent>
      <Toggle/>
      <Form/>
      <StateHook/>
      <EffectHook/>
    </div>
  );
}

export default App;
