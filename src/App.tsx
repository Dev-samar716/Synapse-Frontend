import { Outlet, RouterProvider } from "react-router-dom"
import Navbar from "./components/Navbar"
import router from "./Router/router"

export function App_Layout() {
    return(
        <>
        <Navbar />
        <Outlet />
        </>
    )
}

function App() {
  
    return(
        <RouterProvider router={router} />
    )
}

export default App
