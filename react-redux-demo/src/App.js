
import './App.css';
import { Provider } from "react-redux"
import CakeContainer from './Componant/CakeContainer';
import store from './redux/store';
import HookCakeContainer from './Componant/HookCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer></CakeContainer>
        <HookCakeContainer></HookCakeContainer>
      </div>
    </Provider>
  );
}

export default App;
