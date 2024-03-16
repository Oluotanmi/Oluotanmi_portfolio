import React from 'react'
import Food from '../food/Food.js'

const data =[
  {
    img:'pexels-photo-1667427.jpeg',
    name:'Food one',   
  },
  {
    img:'pexels-photo-1667427.jpeg',
    name:'Food two',   
  },
  {
    img:'pexels-photo-1667427.jpeg',
    name:'Food three',   
  }
]

const Order =()=>{
    return(
      
        <div className='border-inherit rounded-lg bg-white border lg:justify-around p-10 h-full'>

          <div className='flex p-5 text-center '>
            <div>
                <h1 className=' font-bold px-10'>My Order</h1>
            </div>

            <div className=''>
                <a href='/Home' className='text-green-400 font-bold '>Edit</a>
            </div>
          </div>

          <div>
            <ul>
                <li>09:40 AM</li>
                <li>1234 Street Namo City Mano</li>
                <li>Orders must stay warm</li>
            </ul>
          </div>

          <hr className='m-7' />

          <div className=''>       
          {
            data.map( item => (
            <div key={item.name} className='m-3 flex justify-between'>
              <img className='w-10' src={item.img} alt={item.name} />
              <div className='mx-3 '>
                <p className='text-sm'>{item.name}</p>
                <div className='rounded-inherit ring-2 rounded-full  text-center'>- 1 +</div>
              </div>
              <div>
                <h1 className='text-sm'>250g</h1>
                <p className='font-bold'>$4.50</p>
              </div>
            </div>
          ))}
          </div>

         <hr className='m-6' />

          <div>
             <div className='bg-green-400 p-1 rounded-lg'>
                <p className='text-white'>*** *** *** 1234</p>
                <div className='flex justify-between m-2'>
                  <div className='m-7 text-sm  text-white'>
                    <p >AVAILABLE TUNES</p>
                    <p>$123.45</p>
                  </div>
                  <div className='m-7 text-sm  text-white'>
                    <p className=''>EXPRESS</p>
                    <p>11/24</p>
                  </div>
                  <div className='m-7 text-sm  text-white'>
                    <p className=' text-sm text-white'>CYY</p>
                    <p>123</p>
                  </div>
                </div>

             </div>
          </div>
          
          <div className='flex justify-between font-bold'>
            <p>Total</p>
            <p>$14.50</p>
          </div>
          <div className='text-center'>
           <button className='bg-green-400 p-2 w-40 rounded-full font-bold text-white'>Checkout</button>
          </div>
        </div>
      
    )
}

const Main=()=>{
    return(
        <div className='lg:flex sm:inline'>        
            <Food />
            <Order />
        </div>
    )
}

export default Main;