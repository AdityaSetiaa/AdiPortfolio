'use client'
import Content from "./Content"

const Mainpage = () => {
  return (
   <div 
  className='absolute z-3 top-0 left-0 h-full w-full pt-17'
  style={{
    animation: 'fadeIn 0.6s ease-out both'
  }}
>
  <style jsx>{`
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `}</style>
  <div className="flex justify-center ">   
    <Content/>
  </div>
</div>
  )
  
}

export default Mainpage
