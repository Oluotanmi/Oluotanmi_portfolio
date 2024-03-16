import React from 'react'

const Footer =()=>{
    return(
        <div className='justify-center text-center bg-yellow-300 m-3 p-5'>
          <div>
           <h1 className='font-bold text-green-400 text-4xl p-3'>Getstall</h1>
          </div>

          <div >
            <ul className='lg:flex justify-around text-white font-bold lg:p-5 sm:inline '>
                <li>OverView</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Foods</li>
                <li>Help</li>
                <li>Privacy</li>
            </ul>
          </div>

          <div className='flex justify-around p-10 sm:justify-between'>
            <div>
                <input type='text' className='rounded-full p-1' />
                <button className='bg-green-400 w-30 p-1 rounded-full text-white'>Subscribe</button>
            </div>

            <div>
                <p className='text-green-400'>@Getsall.All right reserved</p>
            </div>
          </div>
        </div>
    )
}

export default Footer 