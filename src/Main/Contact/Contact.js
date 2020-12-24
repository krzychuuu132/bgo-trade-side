import React from 'react';

import './Contact.scss';

import { ReactComponent as Contact_location_picture_one} from "../../img/contact_location_one.svg";
import { ReactComponent as Contact_location_picture_two} from "../../img/contact_location_two.svg";

import  Contact_person_picture_one from "../../img/contact_person_one.png";
import  Contact_person_picture_two from "../../img/contact_person_two.png";

import { ReactComponent as Contact_phone} from "../../img/contact_phone.svg";
import { ReactComponent as Contact_email} from "../../img/contact_email.svg";

const Contact = () => {

    return ( 
        
        <section class="contact section" id="contact">

            <div class="section-wrapper">

              <h2 class="contact__title section__title">kontakt</h2>

              <span class="contact__title-text">Masz pytanie? Potrzebujesz pomocy? Skontaktuj się z nami!</span>

              <div class="contact__container">

                  <div class="contact__container-content">

                      <div class="contact__container-content-adress">

                          <strong class="contact__container-content-adress_title">BGO TRADE WOOD Sp. z o.o.</strong>
                          
                          <address class="contact__container-content-adress-elements">
                                  <span class="contact__container-content-adress-elements_element">
                                      <Contact_location_picture_one  alt="bgo trade food ikona lokalizacji"/> Koziarnia 44, 37-418 Krzeszów</span>
                                  <span class="contact__container-content-adress-elements_element">
                                      <Contact_location_picture_two  alt="bgo trade food ikona tekst"/>NIP 602-013-29-89, REGON 360822170</span>
                          </address>

                      </div>

                      <div class="contact__container-content-contacts">

                          <div class="contact__container-content-contacts-contact">

                          <div class="contact__container-content-contacts-element">
                              <img src={Contact_person_picture_one} alt="BGO TRADE WOOD - kontakt do Lubomira Oligradski" class="contact__container-content-contacts-contact-img"/>
                          </div> 

                          <div class="contact__container-content-contacts-contact-details">
                              <strong class="contact__container-content-contacts-contact-details_name">Lubomir Oligradski</strong>
                              
                              <a href="tel:+48793391051" class="contact__container-content-contacts-contact-details_telephone">
                                  <Contact_phone  alt="BGO TRADE WOOD - telefon do Lubomira Oligradski" class="contact__container-content-contacts-contact-details_icon"/>   +48 793 391 051
                              </a>
                              
                              <a href="lubomir-oligradski@wp.pl" class="contact__container-content-contacts-contact-details_email">
                                  <Contact_email  alt="BGO TRADE WOOD - email do Lubomira Oligradski" class="contact__container-content-contacts-contact-details_icon"/>  lubomir-oligradski@wp.pl
                              </a>

                          </div>

                          </div>

                          <div class="contact__container-content-contacts-contact">

                          <div class="contact__container-content-contacts-element">
                                  <img src={Contact_person_picture_two} alt="BGO TRADE WOOD - kontakt do Lubomira Oligradski" class="contact__container-content-contacts-contact-img"/>
                          </div> 

                          <div class="contact__container-content-contacts-contact-details">
                              
                              <strong class="contact__container-content-contacts-contact-details_name">Oksana Medvedyuk</strong>
                              
                              <a href="tel:+48537800879" class="contact__container-content-contacts-contact-details_telephone">
                                  <Contact_phone  alt="BGO TRADE WOOD - telefon do Oksany Medvedyuk" class="contact__container-content-contacts-contact-details_icon"/>   +48 537 800 879
                              </a>
                              
                              <a href="bgo-tw@wp.pl" class="contact__container-content-contacts-contact-details_email">
                                  <Contact_email  alt="BGO TRADE WOOD - email do Oksany Medvedyuk" class="contact__container-content-contacts-contact-details_icon"/>  bgo-tw@wp.pl
                              </a>
                              
                          </div>

                        </div>
                      </div>
                  </div>

                  <div class="contact__container-map">
    
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2544.7707377309453!2d22.32220871589393!3d50.37082930097954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cd0117d6485b3%3A0x13d8f204f395e982!2sKoziarnia%2044%2C%2037-420%20Koziarnia!5e0!3m2!1spl!2spl!4v1608742360407!5m2!1spl!2spl" width={600} height={450} frameborder={0} style={{border:0}} allowfullscreen="" aria-hidden={false} tabindex={0}></iframe>
                     
                  </div>

              </div>

            </div>

        </section>
     );
}
 
export default Contact;