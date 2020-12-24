import React,{useState,useRef} from 'react';

import "./Navigation.scss";

const Navigation = () => {

    const listRef = useRef(null);

    const handleLinkClick  = (e) =>{
  
     [...listRef.current.children].forEach(item=>item.firstChild.classList.remove("navigation__link--active"));

     e.target.classList.add("navigation__link--active");

    }

    return (  

        <nav class="navigation">

                    <ul class="navigation__list" ref={listRef}>
                        
                        <li class="navigation__item">
                            <a href="#about-as" class="navigation__link navigation__link--active" onClick={handleLinkClick}>o nas</a>
                        </li>

                        <li class="navigation__item">
                            <a href="#offer" class="navigation__link" onClick={handleLinkClick}>oferta</a>
                        </li>
                        
                        <li class="navigation__item">
                           <a href="#contact" class="navigation__link" onClick={handleLinkClick}>kontakt</a>
                        </li>
                      
                    </ul>
        </nav>
    );

}
 
export default Navigation;