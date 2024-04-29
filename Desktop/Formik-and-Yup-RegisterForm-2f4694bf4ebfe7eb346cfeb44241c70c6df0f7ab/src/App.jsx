import { Outlet } from "react-router-dom"
import FormComponent from "./components/FormComponent"
import NavbarComponent from "./components/NavbarComponent"
import ProfilePage from "./pages/ProfilePage"
import { useDispatch } from "react-redux"
import { restoreUserAction } from "./store/userSlice"
import { useEffect } from "react"


function App() {

  const dispatch = useDispatch()
  useEffect(()=>{
    let user = JSON.parse(localStorage.getItem('redux_user'))
    dispatch(restoreUserAction(user))
  },[])

  return (
    <div className=" h-[100vh] bg-neutral-800 px-5 container mx-auto">
     
      <NavbarComponent />
      
      <Outlet />
    </div>
  )
}

export default App
