import React,{ useRef,useEffect,useState } from 'react';
import gsap from 'gsap';
import Swiper from "react-id-swiper";
import ReactHtmlParser from 'react-html-parser';

import "./Products.scss";
import HtmlParser from 'react-html-parser';



const showProductsSizes  = (wymiaryLiczby,wymiaryZdjecie,wymiaryZdjecieTytul,counter) =>{

    if(wymiaryLiczby.length !== 0){
      
        return(

            wymiaryLiczby.map((number,index)=>(

                <div class="products__details-element" key={index}>{number}</div>
       
            ))
        )

    }
    else{

      return( 
    
        
            wymiaryZdjecie.map((picture,index)=>(

                <div class="products__details-element" key={index} >

                    <img src={picture.url} alt="Płoty leszczynowe na czterech podstawach" class="products__details-element-img"/>
                    <span className="products__details-element-title">{wymiaryZdjecieTytul[index]}</span>

                </div>

            ))
        )

    }

}

const Products = ({products,counter,setCounter}) => {

    const productsWrapperRef = useRef(null);
    const productDescriptionRef = useRef(null);

    const [swiper, updateSwiper] = useState(null);
    const [swiperThumbs, updateSwiperThumbs] = useState(null);

    const gallerySwiperRef = useRef(null);
    const thumbnailSwiperRef = useRef(null);

    const activeProduct  = products[counter];

    const sizes = activeProduct.details.productsTypes;
   

    const {wymiaryLiczby, wymiaryTytulZdjecia, wymiaryTytulZdjecie  ,wymiaryZdjecie,wymiaryZdjecieTytul } = sizes;
   

    const basics = activeProduct.details.productsTypyPodstawy;
   
    if(counter){
        gsap.fromTo(productsWrapperRef.current,{opacity:0},{opacity:1,ease:'EaseInOut',duration:.7})
    }



    
    useEffect(() => {
        if (swiper && swiperThumbs) {
          swiper.controller.control = swiperThumbs;
          swiperThumbs.controller.control = swiper;
        }
      }, [swiper, swiperThumbs]);

      useEffect(() => {
         const link =  document.querySelector(".products__details-download > p > a");


        if(link !== null){

            link.setAttribute('download',"");
        }
          
      }, [counter])

    const gallerySwiperParams = {
      
        preloadImages: false,
        lazy: true,
        pagination: {
           
            clickable: false
          },
          loop: false,
          spaceBetween: 30,
          getSwiper: updateSwiper 
      };


      const thumbnailSwiperParams = {
  
       
        slidesPerView: "5",
      
        spaceBetween: 10,
       
      };

     // Bind swiper and swiper thumbs
 
      const text  = activeProduct.details.detailsOpis.html;

    if(counter){
        gallerySwiperRef.current.swiper.slideTo(0, 200)
    }

    return (  

        
        <section class="products section" id="products">

         <div class="section-wrapper" ref={productsWrapperRef}>

            <div class="products__slider">

          

                <div class="products__slider-slider">

                <div className="products__slider-main">

                <Swiper
                ref={gallerySwiperRef}
                {...gallerySwiperParams} 
                >

                   {
                        activeProduct.productsGallery.zdjecia_galerii.map((zdjecie,index)=>(

                            <div><img src={zdjecie.url} alt="produkt pierwszy w ogrodzeniach z wikliny i leszczyny" class="products__slider-img"/></div>
                        ))
                  
                    }

                    

                </Swiper>

                <div className="products__slider-btns">
                        <button className="products__slider-btn" onClick={()=>gallerySwiperRef.current.swiper.slidePrev()}><span className="fas fa-chevron-left"></span></button>
                        <button className="products__slider-btn" onClick={()=>gallerySwiperRef.current.swiper.slideNext()}><span className="fas fa-chevron-right"></span></button>
                </div>


                </div>

                  <div class="products__slider-gallery">

                       <Swiper
                         ref={thumbnailSwiperRef}
                         {...thumbnailSwiperParams} 
                         
                          
                            
                            >
                    {
                        activeProduct.productsGallery.zdjecia_galerii.map((zdjecie,index)=>(

                           <div key={index} onClick={()=> gallerySwiperRef.current.swiper.slideTo(index, 200)}> <img src={zdjecie.url} alt="galeria pierwszego produktu w ogrodzeniach z wikliny i leszczyny" class="products__slider-gallery-img" key={index}/></div>
                        ))
                  
                    }
                        </Swiper>
                  
                </div>

                  
                </div>

              
            </div>

            <h2 class="products__title">{activeProduct.details.productTitle}</h2>

            <div class="products__details">
            {  sizes !== null && counter !== 2?   <div class="products__details-sizes">
                        <h3 class="products__details-title">
                          <img src={wymiaryTytulZdjecie.url} alt="zdjęcie wymiarów w ogrodzeniach z wikliny i leszczyny"  class="products__details-title-img"/>  
                            {wymiaryTytulZdjecia}</h3>

                        <div class="products__details-elements">
                            {
                                showProductsSizes(wymiaryLiczby,wymiaryZdjecie,wymiaryZdjecieTytul,counter)
                            }
                        </div>
                    </div>:null
                    }

                   {  basics !== null ?<div class="products__details-sizes">

                        <h3 class="products__details-title">
                            
                            <img src={basics.podstawyTytulZdjecie.url} alt="zdjęcie podstaw w ogrodzeniach z wikliny i leszczyny" class="products__details-title-img"/>  
                            
                            {basics.podstawy_tytul_zdjecia}
                        </h3>

                        <div class="products__details-elements">

                        {
                                showProductsSizes([],basics.podstawyZdjecie,basics.podstawyTytul,counter)
                        }

                           

                        </div>
                    </div>:null
                    }

                    <p class="products__details-description" dangerouslySetInnerHTML={{__html: text}}>
                       
                    </p>
            </div>

        </div>
        
      </section>

    );

}
 
export default Products;