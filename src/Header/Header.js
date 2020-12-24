import React,{ useState } from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

import Navigation from './Navigation/Navigation';
import  Logo  from "../img/logo.png"

import "./Header.scss";


const Header = () => {

    const { t,i18n } = useTranslation();

    const [activeHamburger,setActiveHamburger] = useState(false);

    return (

    <>

        <header className={activeHamburger?"header header--active":'header'} >

        <div className="header__logo">
              <a href="/#article"> <img src={Logo}  alt="logo ogrodzenia z wikliny oraz leszczyny"/></a> 
        </div>

        <Navigation />

        <div class="header__languages">
            <button className="header__languages-language">pl</button>
            <button className="header__languages-language" onClick={()=>i18n.changeLanguage('en')}>eng</button>
            <button className="header__languages-language">{t('ita')}</button>
            <button className="header__languages-language">de</button>
            <button className="header__languages-language">ukr</button>
            <button className="header__languages-language">rus</button>
        </div>

        <div className="header__hamburger">
            <button className={activeHamburger ? "header__hamburger-btn header__hamburger-btn--active":"header__hamburger-btn"} onClick={()=>setActiveHamburger(!activeHamburger)}>
                <span className="header__hamburger-btn_line"></span>
            </button>
        </div>

        </header>

    </>
     );

}
 
export default Header;