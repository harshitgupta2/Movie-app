import React from "react"
import { router } from "./app.route"
import { RouterProvider } from "react-router"
import {Authprovider} from "./Context/AuthProvider"

function App() {

  return (
 <Authprovider>
  <RouterProvider router={router} />
 </Authprovider>
  )
}

export default App
