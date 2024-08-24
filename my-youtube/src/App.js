import { Provider } from 'react-redux';
import './App.css'
import Body from './Components/Body/Body.js';
import Header from './Components/Header/Header';
import store from './Utils/store.js';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Header/>
      <Body/>
      {/* 
      *
      *Header
      * Body
      *   SideBar
      *     MenuItems
      *   MainContainer
      *     ButtonsList
      *     VideoContainer
      *       VideoCard
      */}
    </div>
    </Provider>
    
  );
}

export default App;
