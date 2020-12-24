import React,{useEffect,useState} from 'react';
import { request } from 'graphql-request';

import About_me from './About_me/About_me';
import Contact from './Contact/Contact';
import Offer from './Offer/Offer';
import Products from './Products/Products';
import Quality from './Quality/Quality';

import './Main.scss';

const Main = () => {

    const [dataPage,setDataPage] = useState([]);
    const [counter,setCounter] = useState(0);

    useEffect(()=>{
        const fetchData = async () => {
            const  data  = await request(
              'https://api-eu-central-1.graphcms.com/v2/ckihs5z055hs401yu8x17dkym/master',
              `
              {
                product{
                  details{
                    productTitle
                    detailsOpis{
                      html
                    }
                    productsTypes{
                      wymiaryTytulZdjecie{
                        url
                      }
                      wymiaryTytulZdjecia
                      wymiaryLiczby
                      wymiaryZdjecie{
                        url
                      }
                      wymiaryZdjecieTytul
                      
                    }
                    productsTypyPodstawy{
                      podstawy_tytul_zdjecia
                      podstawyTytulZdjecie{
                        url
                      }
                      podstawyZdjecie{
                        url
                      }
                      podstawyTytul
                    }
                  }
                  glowne_zdjecie{
                    url
                      
                  }
                  productsGallery{
                    zdjecia_galerii{
                      url
                    }
                   
                  }
                }
                aboutas{
                  sekcjaOpis{
                    html
                  }
                    section_features
                  }

                  oferta_products{
                    ofertaProduktTitle
                    ofertaProductImg{
                      url
                    }
                  }
              }
          `
            );
      
            setDataPage(data);
          };
      
          fetchData();
    },[])

    const { product,aboutas: about_as,oferta_products } = dataPage;
    console.log(dataPage)
    
    return ( 
        <main className="main">
              {
                dataPage.length !== 0 ? (
                <>
                <About_me aboutData={about_as[0]}/>
                <Offer counter={counter} setCounter={setCounter} offerProducts={oferta_products}/>
                <Products products={product} counter={counter} setCounter={setCounter}/>
                <Quality />
                <Contact />
                </>
               ):null
           }
        </main>
 
     );
}
 
export default Main;