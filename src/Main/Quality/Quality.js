import React from 'react';

import "./Quality.scss";


import { ReactComponent as Quality_picture_one } from "../../img/quality_img_one.svg";
import { ReactComponent as Quality_picture_two } from "../../img/quality_img_two.svg";
import { ReactComponent as Quality_picture_three } from "../../img/quality_img_three.svg";
import { ReactComponent as Quality_picture_four } from "../../img/quality_img_four.svg";


const Quality = () => {

    return ( 

            <article class="quality section">

                <aside class="section-wrapper">

                    <div class="quality__container">

                        <h2 class="quality__container-title">nasz produkt to</h2>

                        <div class="quality__products">

                            <div class="quality__products-product">

                                    <div class="quality__products-product-picture">
                                        <Quality_picture_one  alt="jakość firmy  ogrodzenia z wikliny i leszczyny" class="quality__products-product-img"/>
                                    </div>

                                    <span class="quality__products-product-title">najdłuższa żywotność</span>
                            </div>

                            <div class="quality__products-product">

                                <div class="quality__products-product-picture">
                                    <Quality_picture_two  alt="jakość firmy  ogrodzenia z wikliny i leszczyny" class="quality__products-product-img"/>
                                </div>
                                
                                <span class="quality__products-product-title">jakość premium</span>
                            </div>

                            <div class="quality__products-product">

                                <div class="quality__products-product-picture">
                                    <Quality_picture_three  alt="jakość firmy  ogrodzenia z wikliny i leszczyny" class="quality__products-product-img"/>
                                </div>
                                
                                <span class="quality__products-product-title">niepowtarzalny wygląd</span>
                            </div>

                            <div class="quality__products-product">

                                <div class="quality__products-product-picture">
                                    <Quality_picture_four  alt="jakość firmy  ogrodzenia z wikliny i leszczyny" class="quality__products-product-img"/>
                                </div>
                                
                                <span class="quality__products-product-title">naturalany materiał</span>
                            </div>

                        </div>

                    </div>

                </aside>

              </article>

     );
}
 
export default Quality;