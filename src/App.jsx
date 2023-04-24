import { useNavigate } from "react-router-dom";
import { foods } from "./data";
import Card from "./Card";
import { useEffect } from "react";

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.length === 0) {
      foods.forEach(element => {
        localStorage.setItem(element.name, String(0));
      })
    }
  }, [])

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gray-900">
    <div className='h-[15%] w-screen border-b-2 border-orange-200 flex justify-between px-10 items-center'>
      <div className='text-white text-xl font-semibold'>Restaurant</div>
      <div onClick={() => navigate('/order')}><img src='/icon.svg' className='h-[55px] cursor-pointer' /></div>
    </div>
    <div className='grid grid-cols-3 gap-5 h-[85%] w-[100%] mt-5 items-center justify-items-center'>
      {
        foods.map((element, index) => {
          return <Card props={element} key={index} />
        })
      }
    </div>
    </div>
  )
}

export default App
