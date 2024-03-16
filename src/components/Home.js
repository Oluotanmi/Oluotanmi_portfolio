import React from 'react'
import Profile from './Profile/Profile.js'
import Main from './Main/Main'


const Home=()=>{
  return(
    <>
    <div className='flex justify-around'>
      

       <div>
         <p className='font-bold lg:text-2xl sm:text-xl text-green-300 text-center'>Getstall</p>
       </div>

       <div className='lg:m-3 lg:p-3 sm:p-3'>
        
         <input
           className='w-60 h-30 border-4 border-green-200 rounded-md bg-green-100 p-2 text-white'
           name='search'
           type='text'
           value='Search'
         />
        
       </div>
    </div>

    

     <div className='bg-background-img bg-cover bg-center w-full p-7  text-white flex justify-around'>
        <div>
            <h2 className='text-2xl font-bold'>Providing Healthy Food</h2>
            <p className='text-sm m-2'>From reserved forms around world</p>
            <button className='font-bold bg-green-300 p-2 rounded-sm'>Shop Now</button>
        </div>
        <div className=' justify-items-end'>
            {/* <img className='w-50  rounded-3xl' src='pexels-robin-stickel-70497.jpg' /> */}
        </div>
     </div>

    <div className=' m-3 sm:inline lg:flex '>
      <Profile  />
      <Main />
   
    </div>
    </>
  )
}

export default Home