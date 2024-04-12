import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { logoutUserAction } from '../store/userSlice'
import {useNavigate} from 'react-router-dom'
function ProfilePage() {

    const {myUser} = useSelector((state) => state.userStore)
    const dispatch = useDispatch();
    const navigate=useNavigate();
    function handleLogout(){
        //obrisi tj logout user
        dispatch(logoutUserAction())
        //prebaci me na register
        setTimeout(()=>{
            navigate('/register')
        },3000)
    }
  return (
    <div className='container mx-auto flex flex-col justify-center items-center md:flex-row mt-[50px] gap-5'>
        <img className='w-[300px] h-[300px] rounded-full object-cover' src={myUser.image} alt="slika" />
        <div className='bg-slate-300 w-full p-5 rounded-[20px] flex flex-col gap-5 items-start'>
            <h3 className='text-2xl'>FirstName: {myUser.firstName}</h3>
            <h3 className='text-2xl'>LastName: {myUser.lastName}</h3>
            <h3 className='text-2xl'>Email: {myUser.email}</h3>
            <h3 className='text-2xl'>BirthDate: {myUser.birthDate}</h3>
            <h3 className='text-2xl'>Gender: {myUser.gender}</h3>
            <button onClick={handleLogout} className='px-[20px] py-[8px] bg-blue-600 rounded-lg'>Logout User</button>
        </div>
    </div>
  )
}

export default ProfilePage