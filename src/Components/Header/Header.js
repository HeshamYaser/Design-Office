import React from 'react'
import image from "../../Assets/kuala-lumpur-malaysia-petronas-towers-megalopolises-big-cities.jpg"
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    <div className='Header'>
        <div className='img'>
            <img src={image} alt="" />
        </div>
        <div className='text'>
            <h2>نقدم خدمات التصميم الهندسي والديكور وكذلك الاستشارات عبر موقعنا الالكتروني</h2>
            <h5>نعمل من اجل ان يجد كل شخص التصميم الذي يحلم به </h5>
            <button><Link to="/projects">استعرض مشروعاتنا</Link></button>
        </div>
    </div>
  )
}

export default Header