import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../public/animation_ll6mnwur.json'

const forgot3 = () => {
  return (
    <div>
      <div>
        <div className=' bg-transparent'>
          <Lottie
           animationData={animationData}
           loop={true}
           autoplay={true}
          />
        </div>
        <div className='flex flex-row justify-center items-center'>
          Resetting Password..
        </div>
      </div>
    </div>
  )
}

export default forgot3