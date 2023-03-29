
import './App.scss';
import About from './pages/about/About';
import Home from "./pages/home/Home"
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import User from './pages/user/User';
import Login from "./pages/login/Login"
import Register from './pages/register/Register';
function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Home/>,
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/about",
      element:<About/>,
    },
    {
      path:"/register",
      element:<Register/>,
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
