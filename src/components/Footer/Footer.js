import React from 'react'

const Footer =()=> {
    return(
     <div className='bg-green-400 w-full p-10'>
      
        <p className='text-center font-bold text-3xl text-gray-400'>Portfolio</p>
        <div className='flex justify-around p-4 text-gray-400 font-semibold'>
            <p>About us</p>
            <p>Support</p>
            <p>Contact</p>
            <p>Feature</p>
        </div>
        <div>
           <p className='text-center text-gray-400 font-bold'>@2024_RayTech</p>
        </div>
      
     </div>
    )
}

export default Footer;