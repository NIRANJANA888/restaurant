import React, { useState } from 'react'
 
export default function Card({ props }) {

  const [view, setView] = useState(false)
  const [count, setCount] = useState(0)

    const AddToCart = () => {
      const item = localStorage.getItem(props.name);
      localStorage.setItem(props.name, String(Number(item) + 1));
      setCount(prev => prev + 1);
    }

  return (
    <div style={{ '--image-url': `url(${props.image})` }} className={`h-[200px] w-[200px] flex justify-center items-end bg-cover bg-center bg-[image:var(--image-url)] cursor-pointer rounded-lg`} onMouseEnter={() => setView(true)} onMouseLeave={() => setView(false)}>
        { 
        view && 
        <div className=' bg-white bg-opacity-60 h-[80%] w-[100%] rounded-lg p-2 flex flex-col justify-between'>
          <div className='text-xl'>{props.name}</div>
          <div className='flex justify-between'>
            <div className='bg-orange-500 w-fit px-2 text-white rounded-md cursor-pointer'>{props.price}</div>
            {
            location.pathname === '/' ? 
            count === 0 ?
            <div className='bg-green-500 w-fit px-2 text-white rounded-md cursor-pointer hover:bg-green-400' onClick={AddToCart}>Add To Cart</div> 
            :
            <div className='bg-green-500 w-fit px-2 text-white rounded-md cursor-pointer hover:bg-green-400 flex items' onClick={AddToCart}>{count} +</div> 
            : 
            <div className='bg-green-500 w-fit px-2 text-white rounded-md cursor-pointer hover:bg-green-400 flex items'>{localStorage.getItem(props.name)}</div> 
            }
          </div>
        </div>
        }
    </div>
  )
}
