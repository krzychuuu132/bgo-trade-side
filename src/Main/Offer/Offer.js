import React,{useRef,useState,useEffect} from 'react';
import {isMobile} from 'react-device-detect';


import OfferEcoProduct from "../../img/offer_eco_product.svg";

import "./Offer.scss";


const Offer = ({counter,setCounter,offerProducts}) => {

    

    const offerRef = useRef(null);

   



    return ( 
        <section className="offer section" id="offer">

                <div className="section-wrapper">
                    <h2 className="section__title offer__title">oferta</h2>

                    <div className="offer__products">
               

                     {
                            offerProducts.map(({ofertaProduktTitle,ofertaProductImg},index)=>(

                               <a  href={isMobile  ? "/#products":"JavaScript:void(0)"} onClick={()=>false} ref={offerRef}> 
                               
                               <div className="offer__products-product" onClick={()=>setCounter(index)} key={index} >
                                    <img src={ofertaProductImg.url} alt="zdjęcie produktu ogrodzeń z wikliny i leszczyny" class="offer__products-product-img"/>
                                    <span className="offer__products-product-title">{ofertaProduktTitle}</span>
                                    <span className="offer__products-product-bgc" style={index===counter ? {backgroundColor:"#4FB950",boxShadow:"0px 16px 36px rgba(22, 109, 23, 0.5)"}:null}></span>
                                </div>
                                
                                </a>

                            ))
                     }


                    </div>

                    <div className="offer__eco-product">
                        <img src={OfferEcoProduct} alt="ekologiczne produkty ogrodzeń z wikliny i leszczyny" className="offer__eco-product-img"/>
                      
                    </div>

                </div>

              </section>
     );

}
 
export default Offer;