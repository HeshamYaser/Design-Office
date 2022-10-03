import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLink, faMessage, faPhoneFlip } from '@fortawesome/free-solid-svg-icons'
import contactimg from "../../Assets/contactimg.jpeg"
import Footer from "../Footer/Footer"
import "./Contact.css"


const Contact = () => {
  return (
    <div className='contact' >

      <div className='contact-img'>
          <img src={contactimg} />
      </div>

      <div className='contact-props'>
          <h3>كن على اتصال دائم بنا ــــــــ</h3>
          <p>يرحب المكتب بالتواصل مع العملاء على مختلف المستويات و بكل الطرق الممكنة مما يسهل عملية التواصل، لهذا
             نوفر كل الطرق للإستجابة لطلابات العملاء أو الإستفسارات
          </p>
      </div>

      <div className='info'>

        <div className='info-icon'>
          <FontAwesomeIcon icon={faMessage} className="icon" />
          <FontAwesomeIcon icon={faPhoneFlip} className="icon" />
          <FontAwesomeIcon icon={faLink} className="icon" />
        </div>

        <div className='info-p'>
          <p>+201028192306</p>
          <p>mahmoouudmoohameed@gmail.com</p> 
          <p>taha-design.netlify.com</p>
        </div>
 
      </div>
        <Footer className="footer" />
      </div>
  )
}

export default Contact