import React, { useEffect, useRef, useState } from 'react'
import Contact from '../Contact/Contact';
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import { motion, scroll, useScroll, useTransform } from 'framer-motion';

const Content = () => {

 const [ isVisible, setVisible ]= useState(false);
 const [ elementTop, setElementTop ]= useState(null) 

 const handleScroll = () =>{
   const scrollPosition = window.scrollY + window.innerHeight;
   if( elementTop && scrollPosition >= elementTop  ){
      setVisible(true)
   }
 }

 useEffect(() => {
  const element = 
      document.getElementById("fade-in-element");
      setElementTop(element.getBoundingClientRect().top + window.scrollY) ;

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.addEventListener('scroll', handleScroll)
      };
 },[elementTop])
    return(
        <div >
          <nav className='bg-white flex sm:text-center p-5 sm:py-3'>
            <div className='text-center'>
             <HashLink to='#contact' smooth className='text-green-400 text-sm font-semibold p-3 m-4 hover:underline'>
               Contact
             </HashLink>
            </div>
            <div>
             <HashLink to='#about' smooth className='text-green-400 text-sm font-semibold p-3 m-4 hover:underline'>
               About Me
             </HashLink>
            </div>
            <div>
             <HashLink to='#projects' smooth className='text-green-400 text-sm font-semibold p-3 m-4 hover:underline'>
               Projects
             </HashLink>
            </div>
          </nav>

          <div className='xl:flex sm:inline-block text-center  xl:p-10 justify-around w-full'>
            <div className='py-20'>
              <h1 className='font-semibold text-black'>
                Hello, i'm 
              </h1>
              <h1 className='font-bold text-4xl p-3 text-green-400 hover:underline'> OLUOTANMI Oluwabukunmi Gideon</h1> 
              
              <h4 className="text-black">Front-end developer based in Nigeria</h4>
              <HashLink to='#contact' smooth>
                <button className='p-4 m-5 text-white bg-green-400 rounded-md shadow-2xl '>Contact me</button>
              </HashLink>

            </div>
              
              <motion.div 
                className='sm:flex sm:justify-center sm:items-center sm:p-3 rounded-md'
                id='fade-in-element' 
                initial={{ opacity: 0, x: 100 }}
                animate={ isVisible ? {opacity: 1, x: 0}:{} }
                transition={{ duration: 3 }}
                >
                <img 
                  src='WhatsApp Image 2024-04-10 at 10.43.49_34cd1ab2.jpg' 
                  className=' xl:w-40 xl:h-[500px] sm:w-[300px] rounded-[400px] transition-transform duration-100 shadow-2xl'
                  alt='img'    />
                </motion.div>  
        
            </div>

          
           <div className='xl:flex xl:justify-around bg-black xl:p-20 sm:inline-block sm:w-full '>
            
                <motion.div
                 className='bg-green-400 text-right p-5 rounded-sm '
                 id='fade-in-element' 
                 initial={{ opacity: 0, x: 100 }}
                 animate={ isVisible ? {opacity: 1, x: 0}:{} }
                 transition={{ duration: 5 }}
                 >
                  <img src='./settings.png' className='w-10' />
                  <h3 className='font-bold text-white'>Deeper Skillset</h3>
                  <p data-aos="fade-up">I am a highly skilled software developer with extensive experience in a wide range of programming languages and technologies. I am confident in my ability to learn new technologies quickly and efficiently, and I am always looking for ways to improve my skills and stay up-to-date with the latest developments in the industry.</p>
                </motion.div>
              

              <motion.div 
                className='bg-green-400 text-right p-10 rounded-sm'
                id='fade-in-element' 
                initial={{ opacity: 0, x: -100 }}
                animate={ isVisible ? {opacity: 2, x: 0}:{} }
                transition={{ duration: 6 }}
                >
                 <img src='./bags.png' className='w-10' />
                <h3 className='font-bold text-white'>Creative Work</h3>
                <p>I am a highly creative software developer who enjoys finding innovative solutions to complex problems. I am always looking for new and unique ways to approach software development, and I am not afraid to think outside the box to find the best solution. I am confident in my ability to come up with creative and effective solutions to even the most challenging problems.</p>
              </motion.div>

              <motion.div 
               className='bg-green-400 text-right p-5 rounded-sm'
               id='fade-in-element' 
               initial={{ opacity: 0, x: 100 }}
               animate={ isVisible ? {opacity: 1, x: 0}:{} }
               transition={{ duration: 7 }}
               >
                 <img src='./diamond.png' className='w-10' />
                <h3 className='font-bold text-white'>Strong Dedication</h3>
                <p>I am a highly dedicated software developer who is committed to delivering high-quality code and solutions. I am willing to put in the lot of effort and time to ensure that my work is of the highest standard, and I am always looking for ways to improve my skills and knowledge. I am passionate about software development and am committed to delivering the best possible results for my clients and employers.</p>
              </motion.div>

            </div>
          
        
            <div className='text-center my-5 rounded-sm' id='about'>
                 <div className='bg-black' ><h5 className='font-bold text-[30px] text-green-400'>About me</h5></div>
            </div>

            <div className='xl:flex justify-around  sm:inline-block w-full'>
              <motion.div 
                className='flex justify-center items-center'
                id='fade-in-element' 
                initial={{ opacity: 0 }}
                animate={ isVisible ? {opacity: 1 }: {} }
                transition={{ duration: 6 }}
               >
                <img className='xl:w-50 sm:w-40 rounded-lg m-10 shadow-2xl' src='./Raymond2.jpg' />   
              </motion.div>

              <motion.div 
                className='xl:py-40 text-black sm:text-center sm:py-10'
                id='fade-in-element' 
                initial={{ opacity: 0, x: 100 }}
                animate={ isVisible ? {opacity: 1, x: 0}:{} }
                transition={{ duration: 6 }}
                >
               <div>
                 <h1>A Passionate Developer <br />Who loves To Code</h1>
                </div>
                <h2 className='text-4xl font-bold text-green-400 p-2 text-center'>My Bio</h2>
                <p>My name is Oluotanmi Oluwabukunmi Gideon</p>
                <a href='new Oluotanmi Oluwabukunmi Resume.docx'>
                  <button className=' text-center p-3 m-5 bg-green-400 text-white rounded-md shadow-xl'>Download CV</button>
                </a>
              </motion.div>
            </div>

            <hr />

            <div className='bg-black p-10'>
                 <h5 className='font-bold text-[30px] text-green-400 text-center'>Skills</h5>
            </div>

            <div className='xl:flex justify-around bg-black sm:inline-block w-full'>

              <motion.div 
                className='bg-green-400 p-2 text-center m-10 rounded-md xl:w-full'
                id='fade-in-element' 
                initial={{ opacity: 0, x: 100 }}
                animate={ isVisible ? {opacity: 1, x: 0}:{} }
                transition={{ duration: 7 }}
                >
                <h3 className='text-white text-center'>H.T.M.L</h3>
                <p className='text-xl font-bold'>100%</p>
              </motion.div>
              <motion.div 
                className='bg-green-400 p-2 text-center m-10 rounded-md xl:w-full'
                id='fade-in-element' 
                initial={{ opacity: 0, x: -100 }}
                animate={ isVisible ? {opacity: 1, x: 0}:{} }
                transition={{ duration: 7 }}
                >
                <h3  className='text-white text-center'>C.S.S</h3>
                <p  className='text-xl font-bold' >90%</p>
              </motion.div>
              <motion.div 
                className='bg-green-400 p-2 text-center m-10 rounded-md xl:w-full'
                id='fade-in-element' 
                initial={{ opacity: 0, x: 100 }}
                animate={ isVisible ? {opacity: 1, x: 0}:{} }
                transition={{ duration: 7 }}
                >
                <h3  className='text-white text-center'>JAVASCRIPT</h3>
                <p  className='text-xl font-bold'>90%</p>
              </motion.div>
              <motion.div 
                className='bg-green-400 p-2 text-center m-10 rounded-md xl:w-full'
                id='fade-in-element' 
                initial={{ opacity: 0, x: -100 }}
                animate={ isVisible ? {opacity: 1, x: 0}:{} }
                transition={{ duration: 7 }}
                >
                <h3  className='text-white text-center'>React</h3>
                <p  className='text-xl font-bold'>90%</p>
              </motion.div>
              <motion.div 
                className='bg-green-400 p-2 text-center m-10 rounded-md xl:w-full'
                id='fade-in-element' 
                initial={{ opacity: 0, x: 100 }}
                animate={ isVisible ? {opacity: 1, x: 0}:{} }
                transition={{ duration: 8 }}
                >
                <h3  className='text-white text-center'>Tailwind</h3>
                <p  className='text-xl font-bold'>90%</p>
              </motion.div>
            </div>

             <hr />

            <div className='text-center bg-black p-2 my-5' id='projects'>
               <h1 className='text-green-400 text-[30px] font-bold'>Projects</h1>
            </div>

           

          <div className=' sm:p-10 xl:flex text-center  justify-between'>

            <div className=' sm:m-[20px]'>
                <img src='lotus.png ' className='xl:w-[300px] hover:m-2 rounded-lg justify-center xl:mx-[100px]'/>
                <p className=' py-5 text-sm font-semibold text-green-400'>Lotus-music is a website created with react library for the frontend and node,express for the backend</p>
                <NavLink to='https://lotus-music-1.onrender.com/'>
                  <button className='bg-green-400 text-white p-3 rounded-md transition duration-300 ease-in-out font-bold'>Lotus-Music</button>
                </NavLink>
              </div>

              <div className=' sm:m-[20px]'>
                <img src='Screenshot 2024-05-16 182920.png ' className='xl:w-[400px] hover:m-2 rounded-lg'/>
                <p className=' py-5 text-sm font-semibold text-green-400'> Search your favourite books on Book-Hub </p>
                <NavLink to='https://book-hub-5u1f.onrender.com'>
                  <button className='bg-green-400 text-white p-3 rounded-md transition duration-300 ease-in-out font-bold'>Book-Hub</button>
                </NavLink>
              </div>

              <div className=' sm:m-[20px] '>
                <img src='Screenshot getsall.png ' className='xl:w-[400px] hover:m-2 rounded-lg'/>
                <p className=' py-5 text-sm font-semibold text-green-400'> A Getsall stactic website using react and tailwind</p>
                <NavLink to='https://gestalll.onrender.com'>
                  <button className='bg-green-400 text-white p-3 rounded-md transition duration-300 ease-in-out font-bold'>Getsall</button>
                </NavLink>
              </div>

              <div className=' sm:m-[20px]'>
                <img src='Screenshot 2024-04-20 222824.png' className='xl:w-[300px] hover:m-2 rounded-lg'/>
                <p className=' py-5 text-sm font-semibold text-green-400'> A movie website using react and tailwind with router to display lastest movies</p>
                <NavLink to='https://magix-movies.onrender.com'>
                  <button className='bg-green-400 text-white p-3 rounded-md transition duration-300 ease-in-out font-bold'>Magix-Movies</button>
                </NavLink>
              </div>
            </div>

            <hr />
            
            <Contact />
        </div>
    )
}

export default Content; 