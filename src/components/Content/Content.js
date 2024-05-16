import React from 'react'
import Contact from '../Contact/Contact';
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';


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
              
              <h4 className="text-white">Full stack developer based in Nigeria</h4>
              <HashLink to='#contact' smooth>
                <button className='p-4 m-5 text-white bg-green-400 rounded-md'>Contact me</button>
              </HashLink>
            </div>

            <div className='sm:flex sm:justify-center sm:items-center sm:p-3'>
              <img src='WhatsApp Image 2024-04-10 at 10.43.49_34cd1ab2.jpg' className='w-40 h-70 rounded-xl' alt='img' />
            </div>
          </div>

           <div className='xl:flex xl:justify-around bg-black xl:p-20 sm:inline-block sm:w-full '>

              <div className='bg-green-400 text-right p-5 rounded-sm '>
                <img src='./settings.png' className='w-10' />
                <h3 className='font-bold text-white'>Deeper Skillset</h3>
                <p>I am a highly skilled software developer with extensive experience in a wide range of programming languages and technologies. I am confident in my ability to learn new technologies quickly and efficiently, and I am always looking for ways to improve my skills and stay up-to-date with the latest developments in the industry.</p>
              </div>

              <div className='bg-green-400 text-right p-10 rounded-sm'>
                 <img src='./bags.png' className='w-10' />
                <h3 className='font-bold text-white'>Creative Work</h3>
                <p>I am a highly creative software developer who enjoys finding innovative solutions to complex problems. I am always looking for new and unique ways to approach software development, and I am not afraid to think outside the box to find the best solution. I am confident in my ability to come up with creative and effective solutions to even the most challenging problems.</p>
              </div>

              <div className='bg-green-400 text-right p-5 rounded-sm'>
                 <img src='./diamond.png' className='w-10' />
                <h3 className='font-bold text-white'>Strong Dedication</h3>
                <p>I am a highly dedicated software developer who is committed to delivering high-quality code and solutions. I am willing to put in the lot of effort and time to ensure that my work is of the highest standard, and I am always looking for ways to improve my skills and knowledge. I am passionate about software development and am committed to delivering the best possible results for my clients and employers.</p>
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

           

            <div className='bg-black sm:p-10 xl:flex'>
            <div className='xl:m-10'>
                <img src='Screenshot 2024-05-16 182920.png ' className='w-40 hover:m-2'/>
                <p className=' py-5 text-sm font-semibold text-green-400'> Search your favourite books on Book-Hub </p>
                <NavLink to='https://book-hub-5u1f.onrender.com'>
                  <button className='bg-green-400 text-white p-3 rounded-md transition duration-300 ease-in-out'>Check it Out</button>
                </NavLink>
              </div>

              <div className='xl:m-10'>
                <img src='Screenshot getsall.png ' className='w-40 hover:m-2'/>
                <p className=' py-5 text-sm font-semibold text-green-400'> A Getsall stactic website using react and tailwind</p>
                <NavLink to='https://gestalll.onrender.com'>
                  <button className='bg-green-400 text-white p-3 rounded-md transition duration-300 ease-in-out'>Check it Out</button>
                </NavLink>
              </div>

              <div className='sm:py-10 '>
                <img src='Screenshot 2024-04-20 222824.png ' className='w-40 hover:m-2'/>
                <p className=' py-5 text-sm font-semibold text-green-400'> A movie website using react and tailwind with router<br /> to display lastest movies</p>
                <NavLink to='https://magix-movies.onrender.com'>
                  <button className='bg-green-400 text-white p-3 rounded-md transition duration-300 ease-in-out'>Check Out</button>
                </NavLink>
              </div>
            </div>

            <hr />
            
            <Contact />
        </div>
    )
}

export default Content; 