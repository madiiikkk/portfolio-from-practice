import './MainDiv.css';
import Img from './logo/madi_pic.jpg';

function MainDiv({ translations }) {
return (
    <div className="mainInfoDiv">
    <div className="profile__avatar">
        <img src={Img} alt="Madi Pic" className='img__item' />
    </div>
    <div className="main__info">
        <h1>{translations.mainDivName}</h1>
        <h2>{translations.mainDivAge}</h2>
    </div>
    </div>
    );
}

export default MainDiv;
