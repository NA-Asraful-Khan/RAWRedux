
import './App.css';
import { Provider } from "react-redux"
import CakeContainer from './Componant/CAKEANDICECREAME/CakeContainer';
import store from './redux/store';
import HookCakeContainer from './Componant/CAKEANDICECREAME/HookCakeContainer';
import IceCreameContainer from './Componant/CAKEANDICECREAME/IceCreameContainer';
import HookIceCreamContainer from './Componant/CAKEANDICECREAME/HookIceCreamContainer';
import UserContainer from './Componant/USERCONTAINR/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer></CakeContainer>
        <HookCakeContainer></HookCakeContainer>
        <IceCreameContainer></IceCreameContainer>
        <HookIceCreamContainer></HookIceCreamContainer>
        <UserContainer></UserContainer>
      </div>
    </Provider>
  );
}

export default App;
