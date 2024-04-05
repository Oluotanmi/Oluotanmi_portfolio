import React from 'react'
import Contact from '../Contact/Contact';
import { HashLink } from 'react-router-hash-link';


const Content = () => {
    return(
        <div >
          <nav className='bg-black flex sm:text-center'>
            <div className='text-center'>
             <HashLink to='#contact' smooth className='text-green-400 text-lg font-semibold p-3 m-4 hover:underline'>
               Contact
             </HashLink>
            </div>
            <div>
             <HashLink to='#about' smooth className='text-green-400 text-lg font-semibold p-3 m-4 hover:underline'>
               About Me
             </HashLink>
            </div>
            <div>
             <HashLink to='#projects' smooth className='text-green-400 text-lg font-semibold p-3 m-4 hover:underline'>
               Projects
             </HashLink>
            </div>
          </nav>

          <div className='xl:flex sm:inline-block text-center  xl:p-10 justify-around bg-black w-full'>
            <div className='py-20'>
              <h1 className='font-semibold text-white'>
                Hello, i'm 
              </h1>
              <h1 className='font-bold text-4xl p-3 text-green-400 hover:underline'> OLUOTANMI Oluwabukunmi Gideon</h1> 
              
              <h4 className="text-white">A full stack developer based from Nigeria</h4>
              <HashLink to='#contact' smooth>
                <button className='p-4 m-5 text-white bg-green-400 rounded-md'>Contact me</button>
              </HashLink>
            </div>

            <div className='sm:flex sm:justify-center sm:items-center sm:p-3'>
              <img src='./raymond.jpg' className='w-40 rounded-full' alt='img' />
            </div>
          </div>

           <div className='xl:flex xl:justify-around bg-black xl:p-20 sm:inline-block sm:w-full '>

              <div className='bg-green-400 text-right p-5 rounded-sm '>
                <img src='./settings.png' className='w-10' />
                <h3 className='font-bold text-white'>Deeper Skillset</h3>
                <p>Skilled in the area of the frontend</p>
              </div>

              <div className='bg-green-400 text-right p-10 rounded-sm'>
                 <img src='./bags.png' className='w-10' />
                <h3 className='font-bold text-white'>Creative Work</h3>
                <p>Skilled in the area of the frontend</p>
              </div>

              <div className='bg-green-400 text-right p-5 rounded-sm'>
                 <img src='./diamond.png' className='w-10' />
                <h3 className='font-bold text-white'>Strong Dedication</h3>
                <p>Skilled in the area of the frontend</p>
              </div>

            </div>
        
            <div className='text-center' id='about'>
                 <div className='bg-black' ><h5 className='font-bold text-2xl text-green-400'>About me</h5></div>
            </div>

            <div className='xl:flex justify-around bg-black sm:inline-block w-full'>
              <div className='flex justify-center items-center'>
                <img className='xl:w-50 sm:w-40 rounded-lg m-10' src='./Raymond2.jpg' />   
              </div>

              <div className='xl:py-40 text-white sm:text-center sm:py-10'>
               <div>
                 <h1>A Passionate Developer <br />Who loves To Code</h1>
                </div>
                <h2 className='text-4xl font-bold text-green-400 p-2 text-center'>My Bio</h2>
                <p>My name is Oluotanmi Oluwabukunmi Gideon</p>
                <button className=' text-center p-3 m-5 bg-green-400'>Download CV</button>
              </div>
            </div>

            <hr />

            <div className='bg-black p-10'>
                 <h5 className='font-bold text-2xl text-green-400 text-center'>Skills</h5>
            </div>

            <div className='xl:flex justify-around bg-black sm:inline-block w-full'>

              <div className='bg-green-400 p-10 text-center m-10 rounded-md'>
                <h3 className='text-white text-center'>H.T.M.L</h3>
                <p className='text-2xl'>100%</p>
              </div>
              <div className='bg-green-400 p-10 text-center m-10 rounded-md'>
                <h3  className='text-white text-center'>C.S.S</h3>
                <p  className='text-2xl' >90%</p>
              </div>
              <div className='bg-green-400 p-10 text-center m-10 rounded-md'>
                <h3  className='text-white text-center'>JAVASCRIPT</h3>
                <p  className='text-2xl'>90%</p>
              </div>
              <div className='bg-green-400 p-10 text-center m-10 rounded-md'>
                <h3  className='text-white text-center'>React</h3>
                <p  className='text-2xl'>90%</p>
              </div>
              <div className='bg-green-400 p-10 text-center m-10 rounded-md'>
                <h3  className='text-white text-center'>Tailwind</h3>
                <p  className='text-2xl'>90%</p>
              </div>
            </div>

             <hr />

            <div className='text-center bg-black p-10' id='projects'>
               <h1 className='text-green-400 text-2xl font-bold'>Projects</h1>
            </div>

           

            <div className='bg-black p-10'>
              <div>
                <img src='Screenshot getsall.png ' className='w-40 hover:m-2'/>
                <p className=' py-5 text-sm font-semibold text-green-400'> A Getsall stactic website using react and tailwind</p>
                <button className='bg-green-400 text-white p-3 rounded-md transition duration-300 ease-in-out'>Check Out</button>
              </div>
            </div>

            <hr />
            
            <Contact />
        </div>
    )
}

export default Content; 