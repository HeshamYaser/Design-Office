import React from 'react'
import "./Work.css";
import Pic1 from"../../Assets/1655215835400.jpeg"
import Pic2 from "../../Assets/1661021775116.jpg"
import pic3 from "../../Assets/666666-01.jpg"
import pic4 from "../../Assets/n11-01.jpeg"



const Work = () => {
  return (
    <div className='work-img'>
        <img src={Pic1} />
        <img src={Pic2} className='pic'/>
        <img src={pic3}  />
        {/* <img src={pic4}/> */}
    </div>
  )
}

export default Work