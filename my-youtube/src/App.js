import { Provider } from 'react-redux';
import './App.css'
import Body from './Components/Body/Body.js';
import Header from './Components/Header/Header';
import store from './Utils/store.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainComponent from './Components/Body/MainComponet.js'
import WatchPage from './Components/Body/WatchPage.js';


const appRouter =createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[ 
    {
      path:'/',
      element:<MainComponent/>
    },
    {
      path:'watch',
      element:<WatchPage/>
    }
  ]
}])
function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Header/>
      <RouterProvider router={appRouter}/>
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
