import React from 'react'

const data =[
  {
    id:1,
    img:'pexels-photo-699953.jpeg',
    title: 'Food One',
    status: 'Available'
  },
  {
    id:2,
    img:'pexels-photo-70497.jpeg',
    title: 'Food One',
    status: 'Available'
  },
  { 
    id:3,
    img:'pexels-photo-262959.jpeg',
    title: 'Food One',
    status: 'Available'
  },
]

  const data2=[
  {
    id:4,
    img:'pexels-photo-323682.jpeg',
    title: 'Food One',
    status: 'Available'
  },
  {
    id:5,
    img:'pexels-photo-958545.jpeg',
    title: 'Food One',
    status: 'Available'
  },
  {
    id:6,
    img:'pexels-photo-1099680.jpeg',
    title: 'Food One',
    status: 'Available'
  },

]

const data3=[
  {
    id:4,
    img:'pine.jpg',
    title: 'Food One',
    status: 'Available'
  },
  {
    id:5,
    img:'pexels-photo-1640777.jpeg',
    title: 'Food One',
    status: 'Available'
  },
  {
    id:6,
    img:'pexels-photo-1667427.jpeg',
    title: 'Food One',
    status: 'Available'
  },

]

const Food =()=>{
    return(
        <div className='p-4'>
         <div className=' '>
            <input
                className='w-30 h-10 rounded-md bg-green-100 p-2 text-white sm:text-center '
                name='search'
                type='text'
                value='Search'
            />
            <h1 className='p-2 font-bold'>What would you eat today?</h1>

            <div className=' lg:grid lg:grid-cols-3 sm:grid sm:grid-cols-1  md:grid-cols-3 lg:mx-10 p-6 sm:mx-20'>
            {
             data.map((item) => (
              <div key={item.id} className='rounded-lg w-30   border m-1'>
                  <img className='w-30' src={item.img} alt='photo' />
                  <p className='font-bold p-1'>{item.title}</p>
                  <p className='text-sm px-1'>{item.status}</p>
              </div>
             ))}
            </div>

            <h1 className='font-bold'>Top favorite restaurants</h1>
            <div className='lg:mx-10 p-6 sm:mx-20'>
              <div className=' lg:grid lg:grid-cols-3 sm:grid sm:grid-cols-1  md:grid-cols-3 h-full'>
            {
             data2.map((item) => (
              <div key={item.id} className='rounded-lg w-30  border m-3 '>
                  <img className='w-30 h-30 ' src={item.img} alt='photo' />
                  <p className='font-bold p-1'>{item.title}</p>
                  <p className='text-sm px-1'>{item.status}</p>
              </div>
             ))}
            </div>
            </div>

             <h1 className='font-bold'>Your favourite restaurant</h1>
            <div className='lg:mx-10 p-6 sm:mx-20'>
            <div>
              <div className=' lg:grid lg:grid-cols-3 sm:grid sm:grid-cols-1  md:grid-cols-3'>
            {
             data3.map((item) => (
              <div key={item.id} className='rounded-lg border m-2 sm:w-30'>
                  <img className='w-40 h-30 sm:w-30'  src={item.img} alt='photo' />
                  <p className='font-bold p-1'>{item.title}</p>
                  <p className='text-sm px-1'>{item.status}</p>
              </div>
             ))}
            </div>
            </div>
            </div>
         </div>  
         
        </div>
    )
}

export default Food;