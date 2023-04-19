
import './App.scss';
import About from './pages/about/About';
import Home from "./pages/home/Home"
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import User from './pages/user/User';
import Login from "./pages/login/Login"
import Register from './pages/register/Register';
function App() {


  const user=JSON.parse(localStorage.getItem("User"))||null;
  console.log(user);
  const router=createBrowserRouter([
    {
      path:"/",
      element:user?<Home/>:<Login/>,
    },
    {
      path:"/login",
      element:user?<Home/>:<Login/>
    },
    {
      path:"/user",
      element:<User/>
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
