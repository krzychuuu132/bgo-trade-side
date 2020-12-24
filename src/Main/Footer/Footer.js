import React from 'react';

import './Footer.scss';

import  Logo_white  from "../../img/logo_white.png"

const Footer = () => {
    return ( 
        <footer class="footer">
                  <header class="header">

                    <div class="header__logo">
                        <a href="/#article"><img  src={Logo_white} alt="logo ogrodzenia z wikliny oraz leszczyny"/></a>
                    </div>

                    <nav class="navigation">
                        <ul class="navigation__list">
                            
                            <li class="navigation__item">
                                <a href="#about-as" class="navigation__link navigation__link--active">o nas</a>
                            </li>
                            <li class="navigation__item">
                                <a href="#offer" class="navigation__link">oferta</a>
                            </li>
                            <li class="navigation__item">
                               <a href="#contact" class="navigation__link">kontakt</a>
                            </li>
                          
                        </ul>
                    </nav>

                    <div class="header__languages">
                        <button class="header__languages-language">pl</button>
                        <button class="header__languages-language">eng</button>
                        <button class="header__languages-language">ita</button>
                        <button class="header__languages-language">de</button>
                        <button class="header__languages-language">ukr</button>
                        <button class="header__languages-language">rus</button>
                    </div>

                  </header>

                  <div class="footer__info">
                      <p class="footer__info-copyright footer__info-element">© 2020 Copyright by BGO TRADE WOOD. All Rights Reserved.</p>
                      <p class="footer__info-programmer footer__info-element">development strony : Krzysztof Urban</p>
                      <p class="footer__info-grapher footer__info-element">Projekt graficzny strony: jrprojekty.pl</p>
                     
                  </div>

            </footer>
     );
}
 
export default Footer;