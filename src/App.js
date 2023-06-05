import './App.css';
import Form from './Component/Form'
import Parent from './Component/Props/Parent';
import Toggle from './Component/Toggle';
import StateComponent from './Component/stateComponent';
import StateHook from './Component/Hooks/StateHook';
import EffectHook from './Component/Hooks/EffectHook';
import A from './Component/Hooks/ContextHook/A';
import ReducerHook from './Component/Hooks/ReducerHook';
import MemoHook from './Component/Hooks/MemoHook';

function App() {
  return (
    <div className="App">
      <StateComponent age={20} />
      <Parent>This is child as Props</Parent>
      <Toggle />
      <Form />
      <StateHook />
      <EffectHook />
      <A/>
      <ReducerHook/>
      <MemoHook/>
    </div>
  );
}

export default App;
