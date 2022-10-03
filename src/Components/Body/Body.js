import React from "react";
import "./Body.css";
import bodyimg from "../../Assets/66666666-01.jpg";
import nextImage from "../../Assets/1661071917201.jpg";

const Body = () => {
  return (
    <div className="Body">

      <div className="inbody">

        <div className="props">
          <h5>احلامك تحقق على ارض الواقع</h5>
          <h2>نصمم ونبتكر بمعايير احترافيه</h2>
        </div>

        <div className="bodyimg">
          <img src={bodyimg} alt=""></img>
          
        </div>

        
      </div>

      <div className="nextbody">
        <img src={nextImage} alt="" />
        <p>
          المكتب متخصص فى تصميم جميع أنواع المبانى سواء السكنية، العامة، الخدمية
          الطبية والترفيهية وحتى المتخصصة 
        </p>
      </div>

    </div>
  );
};

export default Body;
