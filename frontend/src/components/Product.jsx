import React from 'react'
import Layout from './common/Layout'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import {Rating} from 'react-simple-star-rating'
import { Thumbs, FreeMode, Navigation } from 'swiper/modules';   
import 'swiper/css';    
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import ProductImgOne from '../assets/images/mens/five.jpg';
import ProductImgTwo from '../assets/images/mens/six.jpg';
import ProductImgThree from '../assets/images/mens/seven.jpg';
const Product = () => {
    const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
    const [rating, setRating] = React.useState(4);
  return (
    <Layout> 
        <div className='container product product-detail'> 
            <div className='row'>
                <div className='col-md-12'>
                    <nav aria-label="breadcrumb" className='py-4'>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page"><Link to="/shop">Shop</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Dummy Product Title</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-5'>
                    <div className='row'>
                        <div className='col-2'>
                            <Swiper
                                style={{
                                    '--swiper-navigation-color': '#000',
                                    '--swiper-pagination-color': '#000',
                                    }}
                                onSwiper={setThumbsSwiper}
                                loop={true}
                                direction={`vertical`}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Thumbs]}
                                className="mySwiper mt-2"
                            >
                                  
                                <SwiperSlide>
                                    <div className='content'>
                                        <img 
                                            src={ProductImgOne} 
                                            alt="" 
                                            height={100}
                                            className='w-100' />
                                    </div>                                      
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='content'>
                                        <img 
                                            src={ProductImgTwo} 
                                            alt="" 
                                            height={100}
                                            className='w-100' />
                                    </div>                                      
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='content'>
                                        <img 
                                            src={ProductImgThree} 
                                            alt="" 
                                            height={100}
                                            className='w-100' />
                                    </div>                                      
                                </SwiperSlide>
                            </Swiper>
                        </div>

                        <div className='col-10'>
                                    <Swiper
                                        style={{
                                        '--swiper-navigation-color': '#000',
                                        '--swiper-pagination-color': '#000',
                                        }}
                                        loop={true}
                                        spaceBetween={0}
                                        navigation={true}
                                        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                                        modules={[FreeMode, Navigation]}
                                        className="mySwiper2"
                                    >
                                         
                                        <SwiperSlide >
                                            <div className='content'>
                                            <img 
                                                src={ProductImgOne} 
                                                alt="" 
                                                className='w-100' />
                                            </div>
                                        </SwiperSlide>      

                                        <SwiperSlide >
                                            <div className='content'>
                                            <img 
                                                src={ProductImgTwo} 
                                                alt="" 
                                                className='w-100' />
                                            </div>
                                        </SwiperSlide>  

                                        <SwiperSlide >
                                            <div className='content'>
                                            <img 
                                                src={ProductImgThree} 
                                                alt="" 
                                                className='w-100' />
                                            </div>
                                        </SwiperSlide>      
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-7'>
                            <h1>Dummy Product Title</h1>

                            <div className='d-flex'>
                                <Rating>
                                    size={20}
                                    redonly={true}
                                      intialValue={rating}
                                    /*Available Props*/

                                </Rating>
                            </div>
                        </div>
            </div>
        </div>
    </Layout>
  )
}

export default Product