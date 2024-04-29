import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logOutUserAction } from '../store/userSlice'

function ProfilePage() {

    const {myUser} = useSelector(state=>state.userStore)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function handleLogout(){
        dispatch(logOutUserAction())
        setTimeout(() => {
            navigate('/register')
        }, 3000);
        
    }
  return (
    <div className='container mx-auto flex items-center flex-col md:flex-row mt-[50px] gap-[20px]'>
        <img className='w-[200px] h-[200px] rounded-full object-cover' src={myUser.image} alt="" />
        <div className='bg-slate-300 w-full p-5 rounded-2xl flex flex-col gap-5 items-start'>
            <h3>FirstName: {myUser.firstName}</h3>
            <h3>LastName: {myUser.lastName}</h3>
            <h3>Email: {myUser.email}</h3>
            <h3>BirthDate: {myUser.birthDate}</h3>
            <h3>Gender: {myUser.gender}</h3>
            <button className='px-5 py-2 rounded-lg bg-blue-600 text-white' onClick={handleLogout}>Logout User</button>
        </div>
    </div>
  )
}

export default ProfilePage