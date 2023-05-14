import React from 'react'
import img1 from '../img/1.jpg'
import img2 from '../img/2.jpg'
import img3 from '../img/3.jpg'
import { Link } from 'react-router-dom'

const MainPage = () => {
  return (
    <div>
    <div className='main'>
    <Link to={'/pg1'}> <img  className='col' src={img1} alt="" /></Link> 
      <Link to={'/pg2'}><img className='col' src={img2} alt="" /></Link>
      <Link to={'/pg3'}> <img className='col' src={img3} alt="" /></Link>
    </div>

  </div>

  )
}

export default MainPage
