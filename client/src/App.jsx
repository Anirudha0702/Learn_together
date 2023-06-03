
import './App.scss';
import About from './pages/about/About';
import Home from "./pages/home/Home"
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import User from './pages/user/User';
import Login from "./pages/login/Login"
import Register from './pages/register/Register';
import { useSelector } from 'react-redux';
import Setting from './pages/setting/Setting';
function App() {
  const user=useSelector(state=>state.user.user)
  const router=createBrowserRouter([
    {
      path:"/",
      element: user!=null?<Home/>:<Login/>,
    },
    {
      path:"/login",
      element:user!=null?<Home/>:<Login/>
    },
    {
      path:"/user",
      element:<User/>,
    },
    {
      path:"/setting",
      element:<Setting/>,
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
