
import './App.scss';
import About from './pages/about/About';
import Home from "./pages/home/Home"
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import User from './pages/user/User';
function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Home/>,
    },
    {
      path:"/login",
      element:<User/>,
    },
    {
      path:"/about",
      element:<About/>,
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
