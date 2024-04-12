import { Outlet } from 'react-router-dom'
import NavbarComponents from './components/NavbarComponents'
import {useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { restoreUserAction } from './store/userSlice'
import axios from 'axios'

//token
axios.interceptors.request.use((config)=>{
  //localStorage token
  config.headers.Authorization = '112uib2ub2uib12';
  return config;
})

function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    let user = JSON.parse(localStorage.getItem('redux_user'))
    dispatch(restoreUserAction(user))
  },[])

  return (
    <div className="h-screen bg-neutral-800 px-[20px]">
      <NavbarComponents />
      <Outlet />
    </div>
  )
}

export default App
