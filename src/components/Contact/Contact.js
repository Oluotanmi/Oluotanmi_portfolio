import React from "react";

const Contact=()=>{
    return(
     <>
       <div id="contact" className='text-center p-10 bg-black' >
              <h1 className='text-green-400 text-2xl font-bold'>Contact Me</h1>
       </div>

        <form>
              <div className='text-center bg-black p-10'>
                <p className='font-semibold text-lg text-green-400 '>Name</p>
                <input
                  type='text'
                  className='appearance-none border border-gray-300 rounded w-40 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
                  
                />
                <p className='font-semibold text-lg text-green-400'>Contact</p>
                <input
                  type='text'
                  className='appearance-none border border-gray-300 rounded w-40 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
                  
                />
                <p className='font-semibold text-lg text-green-400'>Email</p>
                <input
                  type='text'
                  className='appearance-none border border-gray-300 rounded w-40 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
                  
                />
              </div>
              <div className='justify-center bg-black text-center'>
                <button className='text-white bg-green-400 p-5 m-4'>Send</button>
              </div>
         </form>
     </>
    )
}

export default Contact