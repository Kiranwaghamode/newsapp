import React  from 'react'
import loading from './loading.gif'



const Loading = () => {
  
    return (
      <div className='text-center w-2 h-2'>
        <img src={loading} alt="Loading" />
      </div>
    )
  }

export default Loading;

