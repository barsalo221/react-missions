import React from 'react'
import VideoBg from './images/Logo.png'

const GifBack = () =>  {
  return (
    <div className='gifback'>
      <video src={VideoBg} autoPlay loop muted></video>
      
    </div>
  )
}
export default GifBack;