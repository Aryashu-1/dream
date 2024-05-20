import React from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import SignupPage from "./Pages/SignupPage/SignupPage"
import SigninPage from "./Pages/SigninPage/SigninPage"
import RootLayout from "./Components/RootLayout/RootLayout"


function App() {

  const router = createBrowserRouter([
    {
      path:'',
      element:<RootLayout/>,
      children:[
        {
          path:'/signup',
          element:<SignupPage/>
        },
        {
          path:'/signin',
          element: <SigninPage/>
        },
      ]
    }
  ])


  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App