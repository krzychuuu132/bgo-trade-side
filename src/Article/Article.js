import React,{useEffect,useRef,useState} from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y,EffectCoverflow,Autoplay } from 'swiper';

import { ReactComponent as EcoPicture } from '../img/eco.svg';
import { ReactComponent as ContactTelephone } from '../img/contact_telephone.svg';
import { ReactComponent as ContactPost } from '../img/contact_post.svg';
import { ReactComponent as GatePicture } from '../img/gate.svg';

import firstSlide from '../img/article_bg.jpg';
import secondSlide from '../img/article_bg_two.jpg';
import thirdSlide from '../img/article_bg_three.jpg';

import './Article.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';



SwiperCore.use([ Pagination, Scrollbar, A11y,Autoplay,EffectCoverflow]);

const Article = () => {

    const gateFirst = useRef(null);
    const gateSecond = useRef(null);
    const articleNumbersRef = useRef(null);
    const swiperRef = useRef(null);

    const [activeSlide,setActiveSlide] = useState(0);

    useEffect(()=>{
        document.addEventListener('scroll',()=>{


            const scrollY = window.scrollY /3;

            if(scrollY < 400){
            
                const device_width = window.innerWidth < 1200 ? 300: 170;

                gateFirst.current.style.transform = `translateY(270px) translateX(${scrollY +device_width}px)`;
                gateSecond.current.style.transform = `translateY(270px) translateX(${scrollY *-1 -device_width}px)`;

            } 
        })

        return () =>{
          //  document.removeEventListener('scroll',)
        }
    },[])

    const { t } = useTranslation();

    const handleSlideChange = activeIndex =>{
      
        const articleNumbers = articleNumbersRef.current.children;
        const articleNumberLines = [articleNumbers[0],articleNumbers[4]];
   
        const [firstLine,secondLine]  = articleNumberLines;

        if(activeIndex === 0){
            firstLine.style.flexGrow = "1";
           secondLine.style.flexGrow = ".5";
        }

        else if(activeIndex === 1 ){

           firstLine.style.flexGrow = ".5";
           secondLine.style.flexGrow = "1";
        }
        else{
            firstLine.style.flexGrow = "1";
            secondLine.style.flexGrow = "1";
        }
    }

    return ( 

         <article class="article" id="article">
             <Swiper
                effect="coverflow"
                autoplay
                onSlideChange={(swiper)=>handleSlideChange(swiper.activeIndex)}
                speed={600}
                ref={swiperRef}
              >
                <SwiperSlide style={{backgroundImage:`url(${firstSlide})`}}/>
                <SwiperSlide style={{backgroundImage:`url(${secondSlide})`}}/>
                <SwiperSlide style={{backgroundImage:`url(${thirdSlide})`}}/>
            </Swiper>


                <EcoPicture alt="100% eco produkt" class="article__img"/>

                <div class="article__contact">
                     <a href="tel:+48793391051"> <ContactTelephone  alt="trade wood telephone" class="article__contact-img"/> </a>
                     <a href="mailto:lubomir-oligradski@wp.pl">  <ContactPost  alt="trade wood contact" class="article__contact-img"/> </a>
                </div>

                <div class="article__content">
                    <h2 class="article__content-sub-title"><span class="article__content-sub-title_important">bgo</span> trade wood</h2>
                    <h1 class="article__content-title"> ogrodzenia z 
                        <span class="article__content-title_important"> wikliny </span> oraz 
                        <span class="article__content-title_important"> leszczyny</span>
                    </h1>

                    <a href="/#offer" class="article__content-btn">oferta</a>
                </div>

                <div class="article__numbers" ref={articleNumbersRef}>
                    <span className="article__numbers-line"></span>
                    <span class="article__numbers-number" onClick={()=>swiperRef.current.swiper.slideTo(1, 200)}>02</span>
                    <span class="article__numbers-number" onClick={()=>swiperRef.current.swiper.slideTo(2, 200)}>03</span>
                    <span class="article__numbers-number" onClick={()=>swiperRef.current.swiper.slideTo(0, 200)}>01</span>
                    <span className="article__numbers-line"></span>
                </div>

                <div class="article__gate article__gate-first" ref={gateFirst}><GatePicture alt="brama" class="article__gate-img"/></div>
                <div class="article__gate article__gate-second" ref={gateSecond}><GatePicture  alt="brama" class="article__gate-img"/></div>
        </article>

     );
}
 
export default Article;