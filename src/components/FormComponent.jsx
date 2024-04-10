import React from 'react'
import { useFormik } from 'formik'
import { FileParser } from '../utils/FileParser';
import * as Yup from 'yup'
function FormComponent() {

    //Validacija image

    //type
    const VALID_TYPE = ['image/png','image/jpg', 'image/jpeg']

    //size
    const KB = 1024;
    const MB = KB * 1024

    const formik = useFormik({
        //1. initialValues
        initialValues:{
            firstName:'', 
            lastName:'',
            email:'',
            password:'',
            gender:'',
            image:'',
            birthDate:'',

        },
        //2.validacija YUP
        validationSchema:Yup.object({
            firstName:Yup.string().required('Filed is required'),
            lastName:Yup.string().required('Filed is required'),
            email:Yup.string().email('Invalid email').required('Filed is required'),
            password:Yup.string().min(6).required('Filed is required'),
            gender:Yup.string().required('Filed is required'),
            birthDate:Yup.string().required('Filed is required'),
            image:Yup.mixed()
                    .required('Image is required')
                    .test('fileSize','Wrong file size under 2MB',(value) => value.size < MB*2)
                    .test('file_type','Wrong file type',(value)=>VALID_TYPE.includes(value.type))
        }),
        //3.onSubmit
        onSubmit: (values) => {
            
            FileParser(values.image)
            .then(res=>{
                console.log({...values,image:res})
            })
            .catch(err=>console.log(err))
            formik.resetForm();
        }
    })

    const showError = (name) => formik.errors[name] && formik.touched[name] && formik.errors[name]

  return <form onSubmit={formik.handleSubmit} className='bg-slate-300 p-[20px] rounded-lg mt-5 flex flex-col gap-3 w-[500px]'>
    {/* firstName */}
    <div className='flex flex-col'>
        <label htmlFor="firstname" className='text-[14px] text-gray-600 '>FirstName
            <span className='text-[12px] ml-2 text-red-500'>
                {showError('firstName')}    
            </span>
        </label>
        <input
         id='firstname'
          type="text" 
          placeholder='Insert firstname'
          name='firstName'
          value={formik.values.firstName}
          onChange={formik.handleChange}
          className='outline-none px-4 py-2 rounded-lg'
          />
    </div>
    {/* lastName */}
    <div className='flex flex-col'>
        <label htmlFor="lastname" className='text-[14px] text-gray-600 ' >LastName
        <span className='text-[12px] ml-2 text-red-500'>
                {showError('lastName')}    
            </span>
            </label>
        <input type="text" 
        placeholder='insert lastname' 
        id="lastname"
        name='lastName'
        value={formik.values.lastName}
        onChange={formik.handleChange}
        className='outline-none px-4 py-2 rounded-lg'
        />
    </div>

     {/* email */}
     <div className='flex flex-col'>
        <label htmlFor="email" className='text-[14px] text-gray-600 '>Email
        <span className='text-[12px] ml-2 text-red-500'>
                {showError('email')}    
            </span>
        </label>
        <input
         id='email'
          type="text" 
          placeholder='Insert email'
          name='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          className='outline-none px-4 py-2 rounded-lg'
          />
    </div>
    {/* password */}
    <div className='flex flex-col'>
        <label htmlFor="password" className='text-[14px] text-gray-600 ' >Password
        <span className='text-[12px] ml-2 text-red-500'>
                {showError('password')}    
            </span>
        </label>
        <input type="text" 
        placeholder='insert password' 
        id="password"
        name='password'
        value={formik.values.password}
        onChange={formik.handleChange}
        className='outline-none px-4 py-2 rounded-lg'
        />
    
         {/* gender */}
    <div className='flex flex-col'>
        <label htmlFor="gender" className='text-[14px] text-gray-600 '>Gender
        <span className='text-[12px] ml-2 text-red-500'>
                {showError('gender')}    
            </span>
            </label>
       <select
        name="gender"
         id="gender" 
         value={formik.values.gender}
         onChange={formik.handleChange}
          className='outline-none px-4 py-2 rounded-lg'>
        <option value="" defaultChecked>Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
       </select>
    </div>
    {/* image */}
    <div className='flex flex-col'>
        <label htmlFor="image" className='text-[14px] text-gray-600 ' >Image
        <span className='text-[12px] ml-2 text-red-500'>
                {showError('image')}    
            </span>
            </label>
        <input 
        type="file" 
        id="image"
        name='image'
        value={formik.values.files}
        onChange={(e)=>
            formik.setFieldValue(e.target.name,e.target.files[0])
        }
        className='outline-none px-4 py-2 rounded-lg'
        />
    </div>

     {/* birthDate */}
     <div className='flex flex-col'>
        <label htmlFor="birthDate" className='text-[14px] text-gray-600 '>BirthDate
        <span className='text-[12px] ml-2 text-red-500'>
                {showError('birthDate')}    
            </span>
            </label>
        <input
         id='birthDate'
          type="date" 
          name='birthDate'
          onChange={formik.handleChange}
          className='outline-none px-4 py-2 rounded-lg'
          />
    </div>
    </div>
    <button type='submit' className='bg-green-400 text-black px-4 py-2 mt-5 rounded-lg'>Register me</button>
  </form>
  
}

export default FormComponent