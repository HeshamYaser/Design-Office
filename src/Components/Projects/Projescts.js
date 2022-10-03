import React from 'react'
import Footer from "../Footer/Footer"
import "./Projects.css"
import proImg from "../../Assets/z3-01.jpg"
import img1 from "../../Assets/n10-01.jpeg"
import img2  from "../../Assets/n11-01.jpeg"
import img3  from "../../Assets/n12-01.jpeg"
import img4  from "../../Assets/n13-01.jpeg"
import img5  from "../../Assets/t5.jpg"
import img6  from "../../Assets/t6.jpg"
import img7  from "../../Assets/t7.jpg"
import img8  from "../../Assets/t8.jpg"
import img9  from "../../Assets/t9.jpg"
import img10 from "../../Assets/z1-02.jpg"
import img11  from "../../Assets/z2-01.jpg"
import img12  from "../../Assets/z3-01.jpg"
import img13  from "../../Assets/z4-01.jpg"
import img14 from "../../Assets/t12.jpg"
import img15 from "../../Assets/1661071917178.jpg"


const Projescts = () => {
  return (
    <div className='projects'>
        <div className='pro-img'>
            <img src={proImg} />
        </div>

        <div className='images'>
            <img src={img1} alt="" />
            <img src={img2}alt="" />
            <img src={img3}alt="" />
            <img src={img4}alt="" />
            <img src={img5}alt="" />
            <img src={img6}alt="" />
            <img src={img7}alt="" />
            <img src={img8}alt="" />
            <img src={img9}alt="" />
            <img src={img10}alt="" />
            <img src={img11}alt="" />
            <img src={img12}alt="" />
            <img src={img13}alt="" />
            <img src={img14}alt="" />
            <img src={img15}alt="" />
        </div>
          <Footer className="footer-pro" />
    </div>
  )
}

export default Projescts