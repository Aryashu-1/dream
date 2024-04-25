
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Root_Layout from './Components/Root_Layout/Root_Layout';
import HomePage from './Pages/Home/HomePage';
import LoginPage from './Pages/LoginPage/LoginPage';
import SignupPage from './Pages/SignupPage/SignupPage';
function App() {

  let router=createBrowserRouter([
    {
      path:'',
      element:<Root_Layout/>,
      children:[
        {
          path:'',
          element:<HomePage/>
        },
        {
          path:'/login',
          element:<LoginPage/>
        },
        {
          path:"/signup",
          element:<SignupPage/>
        }
      ]
    },
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
