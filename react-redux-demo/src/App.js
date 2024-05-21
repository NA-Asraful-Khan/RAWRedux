
import './App.css';
import { Provider } from "react-redux"
import CakeContainer from './Componant/CakeContainer';
import store from './redux/store';
import HookCakeContainer from './Componant/HookCakeContainer';
import IceCreameContainer from './Componant/IceCreameContainer';
import HookIceCreamContainer from './Componant/HookIceCreamContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer></CakeContainer>
        <HookCakeContainer></HookCakeContainer>
        <IceCreameContainer></IceCreameContainer>
        <HookIceCreamContainer></HookIceCreamContainer>
      </div>
    </Provider>
  );
}

export default App;
