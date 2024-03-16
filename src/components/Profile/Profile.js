import React from 'react'

const Profile =()=>{
    return(
        <div className='bg-green-400 p-5  rounded-lg sm:flex sm:justify-between lg:inline'>
            <div>
              <p className='text-center lg:p-9 sm:p-2 sm:text-sm text-white font-bold'>Getstall Delivery</p>
              <div className='justify-center'>
                <img src='Ray.jpg' className='lg:w-30 sm:w-20 rounded-full lg:mx-8' alt='profile' />
              </div>
            </div>

           

            <div className='lg:p-5 sm:text-sm sm:my-10'>
               <p className='text-center  text-white font-bold'>Hello James</p>
               <p className='text-center  text-white'>its 2hours</p>
            </div>

            <div className='text-center lg:m-3 justify-start text-white sm:text-sm sm:p-2'>
                <ul>
                    <div className='sm:my-2'>
                       <li>Dashboard</li>
                    </div>
                    <div className='sm:my-2'>
                       <li>Orders</li>
                    </div>
                    <div className='sm:my-2'>
                       <li>Finance</li>
                    </div>
                    <div className='sm:my-2'>
                       <li>Restaurant</li>
                    </div>
                    <li className='sm:my-2'>Logout</li>
                </ul>
            </div>

            <div className='lg:p-8'>
                <button className='bg-yellow-300 lg:w-30 lg:p-2 lg:rounded-full text-white font-bold sm:text-sm sm:p-1 sm:my-10  sm:rounded-sm'>Start new order</button>
            </div>
        </div>
    )
}

export default Profile;