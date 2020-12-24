import React from 'react';


import AboutFirst from "../../img/about_first.jpg";
import AboutSecond from "../../img/about_second.jpg";

import "./About_me.scss";

import {ReactComponent as About_list_icon}from '../../img/list_item_img.svg';

const About_me = ({aboutData:{sekcjaOpis,section_features}}) => {

    console.log(sekcjaOpis)

    return ( 

        <section class="about section" id="about-as">

        <h2 class="about__title section__title">Witamy w  BGO TRADE WOOD</h2>

            <div class="section-wrapper">

                <div class="about__description">

                    <div class="about__picture">
                            <img src={AboutFirst} alt="ogordzenia z wikliny - o nas" class="about__picture-img"/>
                    </div>

                    <div class="about__description-content">
                        <p class="about__description-content-text" dangerouslySetInnerHTML={{__html: sekcjaOpis.html}}></p>
                    </div>

                </div>

                <div class="about__features">
                        <ul class="about__features-list">
                           {
                               section_features.map((feature,index)=>(
                                    <li class="about__features-item" key={index}><About_list_icon src="" alt=""/>{feature}</li>
                               ))
                           }
                        </ul>

                        <div class="about__picture">
                            <img src={AboutSecond} alt="ogordzenia z wikliny - o nas" class="about__picture-img"/>
                        </div>
                </div>
            </div>

      </section>

     );

}
 
export default About_me;