import React from "react";
import insta from "../social-icons/icons/icons8-instagram-48.png";
import telegram from "../social-icons/icons/icons8-telegram-app-48.png";
import vk from "../social-icons/icons/icons8-vk-circled-48.png";
import whatsapp from "../social-icons/icons/icons8-whatsapp-48.png";
import madinumone from "../logo/madipics/madinum1.jpg";
import madinumtwo from "../logo/madipics/madinum2.jpg";


function FirstTab({ translations }) {
return (
    <div className="firsttabb">
        <h2>{translations.firstTabTitle}</h2>
        <p>{translations.firstTabContent}</p>
        <div className="all_container">
            <div className="imgs__aboutme">
                <img src={madinumone} alt="" className="img__found" />
                <img src={madinumtwo} alt="" className="img__found" />
            </div>
            <div className="socials">
                <a href="https://www.instagram.com/thestrokee3/" className="iconssss">
                    <img src={insta} alt="insta" className="soc__icons" />
                </a>
                <a href="https://t.me/madiiiikkkkk" className="iconssss">
                    <img src={telegram} alt="telegram" className="soc__icons" />
                </a>
                <a href="https://vk.com/madiiikkkk" className="iconssss">
                    <img src={vk} alt="vkontakte" className="soc__icons" />
                </a>
                <a href="https://wa.me/+77776315203" className="iconssss">
                    <img src={whatsapp} alt="whatsapp" className="soc__icons" />
                </a>
            </div>
        </div>
        
    </div>
);
}

export default FirstTab;
