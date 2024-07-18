import './App.css';
import MainDiv from './components/MainDiv';
import Modal from './components/modals/ContactModal';
import FirstTab from './components/tabs/FirstTab';
import SecondTab from './components/tabs/SecondTab';
import ThirdTab from './components/tabs/ThirdTab';
import { useState, useEffect } from 'react';
import translations from './translations.json';

const App = () => {
  const [toggle, setToggle] = useState(1);
  const [modalActive, setModalActive] = useState(false);
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');


  const updateToggle = (value:number) => {
    setToggle(value);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'ru' : 'en'));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const t = translations[language];


  const handleDownload = () => {
    const url = '/src/cv/Nurly Madi.pdf';

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Nurly Madi CV.pdf'); 

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
};

  return (
    <>
      <div className={`wrapper ${theme}`}>
        <header className='header'>
          <div className="container">
            <div className="header__wrapper">
              <a className='logo'>MadiNurly</a>
              <nav className='nav'>
                <ul className="nav__list">
                  <li className='nav__item'>
                    <a className='nav__link' onClick={() => updateToggle(1)}>{t.aboutMe}</a>
                  </li>
                  <li className='nav__item'>
                    <a className='nav__link' onClick={() => updateToggle(2)}>{t.skills}</a>
                  </li>
                  <li className='nav__item'>
                    <a className='nav__link' onClick={() => updateToggle(3)}>{t.education}</a>
                  </li>
                </ul>
              </nav>
              <button className='header__modal' onClick={() => setModalActive(true)}>
                {t.contacts}
              </button>
              <div className="checkbox-wrapper-5">
                <div className="check">
                  <input
                    id="check-5"
                    type="checkbox"
                    checked={theme === 'dark'}
                    onChange={toggleTheme}
                  />
                  <label htmlFor="check-5"></label>
                </div>
              </div>
              <button className="language__switcher" onClick={toggleLanguage}>
                {t.language}
              </button>
            </div>
          </div>
        </header>
        <Modal active={modalActive} setActive={setModalActive} translations={t} />
        <div className="main__Div">
          <MainDiv translations={t} />
          <div className="all__divs">
            <div className={toggle === 1 ? "show__content" : "content"}>
              <FirstTab translations={t} />
            </div>
            <div className={toggle === 2 ? "show__content" : "content"}>
              <SecondTab translations={t} />
              <button className="cvdownloader" onClick={handleDownload}>
                {t.resume}
              </button>
            </div>
            <div className={toggle === 3 ? "show__content" : "content"}>
              <ThirdTab translations={t} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
