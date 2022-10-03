import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChair, faMessage, faPager, faWallet } from '@fortawesome/free-solid-svg-icons'
import "./Services.css"


const Services = () => {
  return (
    <div className='services'>
        <h3>العديد من الخدمات تقدم بسهولة عن طريق الانترنت ـــــــــــــ</h3>
        <div>
            <FontAwesomeIcon icon={faPager} />
            <p>تصميمات هندسيه</p>
        </div>
        <div>
            <FontAwesomeIcon icon={faChair} />
           <p> تصميم الديكور</p>
        </div>
        <div>
            <FontAwesomeIcon icon={faWallet} />
            <p> حساب الكميات</p>
        </div>
        <div>
            <FontAwesomeIcon icon={faMessage} /> 
            <p> خدمات استشاريه</p>
        </div>
    </div>
  )
}

export default Services