import React, { useEffect, useState, useContext } from 'react'
import { foods } from './data';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

export default function Order() {

    const [items, setItems] = useState([]);
    const [price, setPrice] = useState(0);
    const [fetch, setFetch] = useState(false);

    const navigate = useNavigate()

    useEffect(() => {
      if (!fetch) {
        foods.forEach(element => {
          const item = localStorage.getItem(element.name);
          if (item !== '0'){
            setItems(prev => [...prev, element])  
            setPrice(prev => prev + element.price * Number(item))
          }
          console.log(items)
        })
        setFetch(true)
      }
    }, []);

    const order = () => {
      localStorage.clear()
      alert('Order Placed')
      setPrice(0)
      navigate('/')
    }

  return (
    <>
      <div className="h-screen w-screen flex flex-col justify-center items-center bg-gray-900">
      <div className='h-[15%] w-screen border-b-2 border-orange-200 flex justify-between px-10 items-center'>
      <div className='text-white text-xl font-semibold'>Restaurant</div>
      <div className='flex justify-between w-[50%] sm:w-[15%] items-center text-lg'>
        <div className='text-white'>Rs.{price}</div>
        <div onClick={order} className='bg-green-500 hover:bg-green-400 cursor-pointer text-white px-5 py-2 rounded-md'>Order</div>
      </div>
      </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 h-[85%] w-[100%] mt-5 items-center justify-items-center'>
    {
        items.map((element, index) => {
          return <Card props={element} key={index} />
        })
    }
    </div>
    </div>
    </>
  )
}
