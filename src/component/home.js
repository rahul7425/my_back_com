import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Css/Home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'animate.css';
import { Navigation, Pagination, EffectFade, A11y, Autoplay, EffectCards } from 'swiper/modules';
export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    return (
        <>
            <Swiper
                className="mySwiper"
                modules={[Navigation, Pagination, Autoplay, A11y, EffectFade]}
                spaceBetween={50}
                slidesPerView={1}
                effect={'fade'}
                fadeEffect={{ crossFade: true }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
            >
                <SwiperSlide>
                    <img src="/images/SL-1.jpg" class="d-block w-100" alt="1" height={700} />
                    <div className="home_page ">
                        <div className={`home_txt ${currentSlide === 0 ? 'fade-in' : ''}`}>
                            <p className="collection">Trusted by Thousands of Happy Customers</p>
                            <h2>Shop Best-Selling Electronics</h2>
                            <div className="home_label ">
                                <p>Shop our most popular electronics and see why customers love them!</p>
                            </div>
                            <button><a href="#sellers">Explore Now</a><i className='bx bx-right-arrow-alt'></i></button>
                            <div className="home_social_icons">
                                <a href="#"><i class="bi bi-facebook"></i></a>
                                <a href="#"><i class="bi bi-twitter-x"></i></a>
                                <a href="#"><i class="bi bi-pinterest"></i></a>
                                <a href="#"><i class="bi bi-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/SL-2.jpg" class="d-block w-100" alt="2" height={700} />
                    <div className="home_page ">
                        <div className={`home_txt ${currentSlide === 1 ? 'fade-in' : ''}`}>
                            <p className="collection ">Fresh Gadgets, Latest Innovations</p>
                            <h2>New Arrivals: Cutting-Edge Tech</h2>
                            <div className="home_label ">
                                <p>Explore the latest in tech—from smartwatches to home automation. Shop new arrivals now!</p>
                            </div>
                            <button><a href="#sellers">Explore Now</a><i className='bx bx-right-arrow-alt'></i></button>
                            <div className="home_social_icons">
                                <a href="#"><i class="bi bi-facebook"></i></a>
                                <a href="#"><i class="bi bi-twitter-x"></i></a>
                                <a href="#"><i class="bi bi-pinterest"></i></a>
                                <a href="#"><i class="bi bi-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/SL-3.jpg" class="d-block w-100" alt="3" height={700} />
                    <div className="home_page ">
                        <div className={`home_txt ${currentSlide === 2 ? 'fade-in' : ''}`}>
                            <p className="collection ">Save Big on Top-Selling Gadgets</p>
                            <h2>Unbeatable Tech Deals</h2>
                            <div className="home_label ">
                                <p>Huge discounts on smartphones, laptops, and more. Limited-time offers—shop now!</p>
                            </div>
                            <button><a href="#sellers">Explore Now</a><i className='bx bx-right-arrow-alt'></i></button>
                            <div className="home_social_icons">
                                <a href="#"><i class="bi bi-facebook"></i></a>
                                <a href="#"><i class="bi bi-twitter-x"></i></a>
                                <a href="#"><i class="bi bi-pinterest"></i></a>
                                <a href="#"><i class="bi bi-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <section className='container second-section mt-5'>
                <h2 class="discover-text semiBold">Discover more
                    <span class="">. </span>
                    <span class="text-neutral-500 dark:text-neutral-400">Good things are waiting for you</span>
                </h2>
                <div className='second-slider my-5'>
                    <Swiper
                        className="mySwiper"
                        slidesPerView={'auto'}
                        centeredSlides={false}
                        spaceBetween={30}
                        slidesOffsetBefore={100}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Pagination, Autoplay]}
                    >
                        <SwiperSlide className='bg-yellow col-md-4'>
                            <div className='row'>
                                <div className='bg-yellow-content col'>
                                    <span class="block mb-2 text-sm text-slate-700">Explore new arrivals</span>
                                    <h2 class="text-slate-900 font-semibold">Shop the latest <br /> from top brands</h2>
                                    <div class="mt-auto">
                                        <button class="slider-btn text-sm py-3 px-4 mt-4">
                                            Show me all
                                        </button>
                                    </div>
                                </div>
                                <div className='side-img col'>
                                    <img src='/images/banner-1.png' width={129} height={166} />
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className='bg-red col-md-4'>
                            <div className='row'>
                                <div className='bg-yellow-content col'>
                                    <span class="block mb-2 text-sm text-slate-700">Digital gift cards</span>
                                    <h2 class="text-slate-900 font-semibold">Give the gift <br /> of choice</h2>
                                    <div class="mt-auto">
                                        <button class="slider-btn text-sm py-3 px-4 mt-4">
                                            Show me all
                                        </button>
                                    </div>
                                </div>
                                <div className='side-img col'>
                                    <img src='/images/banner-1.png' width={129} height={166} />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='bg-blue col-md-4'>
                            <div className='row'>
                                <div className='bg-yellow-content col'>
                                    <span class="block mb-2 text-sm text-slate-700">Sell Collection</span>
                                    <h2 class="text-slate-900 font-semibold">Up to<br />80% off retail</h2>
                                    <div class="mt-auto">
                                        <button class="slider-btn text-sm py-3 px-4 mt-4">
                                            Show me all
                                        </button>
                                    </div>
                                </div>
                                <div className='side-img col'>
                                    <img src='/images/banner-1.png' width={129} height={166} />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='bg-green col-md-4'>
                            <div className='row'>
                                <div className='bg-yellow-content col'>
                                    <span class="block mb-2 text-sm text-slate-700">Digital gift cards</span>
                                    <h2 class="text-slate-900 font-semibold">Give the gift <br /> of choice</h2>
                                    <div class="mt-auto">
                                        <button class="slider-btn text-sm py-3 px-4 mt-4">
                                            Show me all
                                        </button>
                                    </div>
                                </div>
                                <div className='side-img col'>
                                    <img src='/images/banner-1.png' width={129} height={166} />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <hr style={{ margin: '5rem 2rem' }} />

            <section id="collection">
                <h2 class="container discover-text semiBold">New Arrivals
                    <span class="">. </span>
                    <span class="text-neutral-500 dark:text-neutral-400">REY backpacks & bags</span>
                </h2>
                <div className="collections container">
                    <div className="content">
                        <img src="https://i.postimg.cc/Xqmwr12c/clothing.webp" alt=" /img" />
                        <div className="img-content">
                            <p>Clothing Collections</p>
                            <a href='#sellers'>SHOP NOW</a>
                        </div>
                    </div>
                    <div className="content2">
                        <img src="/images/kitchen.png" alt="img /" />
                        <div className="img-content2 img-content">
                            <p>kitchen appliances</p>
                            <a href='#sellers'>SHOP NOW</a>
                        </div>
                    </div>
                    <div className="content3">
                        <img src="https://i.postimg.cc/MHv7KJYp/access.webp" alt="img" />
                        <div className="img-content3 img-content">
                            <p>Accessories</p>
                            <a href='#sellers'>SHOP NOW</a>
                        </div>
                    </div>
                </div>
            </section>
            <hr style={{ margin: '5rem 2rem' }} />
            {/* Product Section */}
            <section className='product-section'>
                <h2 class="container discover-text semiBold">Trending Products
                    <span class="">. </span>
                    <span class="text-neutral-500 dark:text-neutral-400">Electronics, Gadgets And More</span>
                </h2>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <div className='fx-product'>
                                <div class="card border-0">
                                    <div className='img-bg'>
                                        <img src="/images/fx-1.png" class="card-img-top" alt="..." />
                                        <div className='product-size'>
                                            <ul className='d-flex flex-direction-row justify-content-between'>
                                                <li><a>XS</a></li>
                                                <li><a>S</a></li>
                                                <li><a>M</a></li>
                                                <li><a>ML</a></li>
                                                <li><a>XL</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <ul className='d-flex flex-direction-row justify-content-between'>
                                            <li className='rounded-circle'><div className='product-color'></div></li>
                                            <li className='rounded-circle'><div className='product-color'></div></li>
                                            <li className='rounded-circle'><div className='product-color'></div></li>
                                            <li className='rounded-circle'><div className='product-color'></div></li>
                                            <li className='rounded-circle'><div className='product-color'></div></li>
                                        </ul>
                                        <h5 class="card-title mt-4">Campus Sutra</h5>
                                        <p class="card-text">Self-Design Sugarcane Regular Fit Shirt </p>
                                        <div className='d-flex justify-content-between align-items-baseline'>
                                            <a href="#" class="buy-btn">Buy Now</a>
                                            <div className='reviews'>
                                                <i class="bi bi-star-fill me-1"></i>
                                                <span>
                                                    4.9 (89 reviews)
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Second Product */}
                        <div className='col-md-3 mb-5'>
                            <div className='fx-product'>
                                <div class="card border-0">
                                    <div className='img-bg'>
                                        <img src="/images/fx-2.png" class="card-img-top" alt="..." />
                                        <div className='product-size btns'>
                                            <ul className='d-flex flex-direction-row justify-content-between'>
                                                <li><a className='btn cart-btn'><i class="bi bi-cart me-1"></i> Add To Bag</a></li>
                                                <li><a className='btn view-btn'><i class="bi bi-arrows-fullscreen me-1"></i> Quick View</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <ul className='d-flex flex-direction-row justify-content-between'>
                                            <li className='rounded-circle'><div className='product-color'></div></li>
                                            <li className='rounded-circle'><div className='product-color'></div></li>
                                            <li className='rounded-circle'><div className='product-color'></div></li>
                                            <li className='rounded-circle'><div className='product-color'></div></li>
                                            <li className='rounded-circle'><div className='product-color'></div></li>
                                        </ul>
                                        <h5 class="card-title mt-4">Xiaomi Pad 6</h5>
                                        <p class="card-text">Redmi Pad SE| All Day Battery</p>
                                        <div className='d-flex justify-content-between align-items-baseline'>
                                            <a href="#" class="buy-btn">Buy Now</a>
                                            <div className='reviews'>
                                                <i class="bi bi-star-fill me-1"></i>
                                                <span>
                                                    4.9 (89 reviews)
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='fx-product'>
                                <div class="card border-0">
                                    <div className='img-bg'>
                                        <img src="/images/fx-1.png" class="card-img-top" alt="..." />
                                        <div className='product-size'>
                                            <ul className='d-flex flex-direction-row justify-content-between'>
                                                <li><a>XS</a></li>
                                                <li><a>S</a></li>
                                                <li><a>M</a></li>
                                                <li><a>ML</a></li>
                                                <li><a>XL</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <ul className='d-flex flex-direction-row justify-content-between'>
                                            <li className='rounded-circle'><div className='product-color'></div></li>
                                            <li className='rounded-circle'><div className='product-color'></div></li>
                                            <li className='rounded-circle'><div className='product-color'></div></li>
                                            <li className='rounded-circle'><div className='product-color'></div></li>
                                            <li className='rounded-circle'><div className='product-color'></div></li>
                                        </ul>
                                        <h5 class="card-title mt-4">Campus Sutra</h5>
                                        <p class="card-text">Self-Design Sugarcane Regular Fit Shirt </p>
                                        <div className='d-flex justify-content-between align-items-baseline'>
                                            <a href="#" class="buy-btn">Buy Now</a>
                                            <div className='reviews'>
                                                <i class="bi bi-star-fill me-1"></i>
                                                <span>
                                                    4.9 (89 reviews)
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* forth Product */}
                        <div className='col-md-3 mb-5'>
                            <div className='fx-product'>
                                <div class="card border-0">
                                    <div className='img-bg'>
                                        <img src="/images/fx-2.png" class="card-img-top" alt="..." />
                                        <div className='product-size btns'>
                                            <ul className='d-flex flex-direction-row justify-content-between'>
                                                <li><a className='btn cart-btn'><i class="bi bi-cart me-1"></i> Add To Bag</a></li>
                                                <li><a className='btn view-btn'><i class="bi bi-arrows-fullscreen me-1"></i> Quick View</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <ul className='d-flex flex-direction-row justify-content-between'>
                                            <li className='rounded-circle'><div className='product-color'></div></li>
                                            <li className='rounded-circle'><div className='product-color'></div></li>
                                            <li className='rounded-circle'><div className='product-color'></div></li>
                                            <li className='rounded-circle'><div className='product-color'></div></li>
                                            <li className='rounded-circle'><div className='product-color'></div></li>
                                        </ul>
                                        <h5 class="card-title mt-4">Xiaomi Pad 6</h5>
                                        <p class="card-text">Redmi Pad SE| All Day Battery</p>
                                        <div className='d-flex justify-content-between align-items-baseline'>
                                            <a href="#" class="buy-btn">Buy Now</a>
                                            <div className='reviews'>
                                                <i class="bi bi-star-fill me-1"></i>
                                                <span>
                                                    4.9 (89 reviews)
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr style={{ margin: '5rem 2rem' }} />
            {/* Start Exploring Section */}
            <section className='container product-tabs'>
                <div className='heading'>
                    <h2>Start exploring.</h2>
                </div>
                <div className='tabs-section'>
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><i class="bi bi-gender-male me-2"></i>Man</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><i class="bi bi-gender-female me-1"></i>Woman</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"><i class="bi bi-person me-1"></i>Kids</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-sport-tab" data-bs-toggle="pill" data-bs-target="#pills-sport" type="button" role="tab" aria-controls="pills-sport" aria-selected="false"><i class="bi bi-dribbble me-1"></i>Sports</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-beauty-tab" data-bs-toggle="pill" data-bs-target="#pills-beauty" type="button" role="tab" aria-controls="pills-beauty" aria-selected="false"><i class="bi bi-heart me-1"></i>Beauty</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div className='tab-product'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <div className='f-product'>
                                            <div className='d-flex justify-content-between align-items-baseline'>
                                                <div className='tab-product-color w-20 h-20 rounded-circle mb-5'>
                                                    <img src='/images/fx-3.png' width={50} style={{ margin: " 17px 20px" }} />
                                                </div>
                                                <div className=''>
                                                    <p style={{ fontSize: "12px", }}>155 products</p>
                                                </div>
                                            </div>
                                            <div className='side-img'>
                                                <img src='/images/fx-4.svg' height={376} width={358} />
                                            </div>
                                            <p style={{ color: "#64748b", fontSize: ".875rem", lineHeight: "1.25rem" }}>Manufacturar</p>
                                            <h2 style={{ fontWeight: "600", fontSize: "1.875rem", lineHeight: "2.25rem", marginBottom: "6rem", }}>Backpack</h2>
                                            <Link className='see-collection-btn' href='#'><span>See Collection</span><i class="bi bi-arrow-right ms-2"></i></Link>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='f-product'>
                                            <div className='d-flex justify-content-between align-items-baseline'>
                                                <div className='tab-product-color w-20 h-20 rounded-circle mb-5'>
                                                    <img src='/images/fx-3.png' width={50} style={{ margin: " 17px 20px" }} />
                                                </div>
                                                <div className=''>
                                                    <p style={{ fontSize: "12px", }}>22 products</p>
                                                </div>
                                            </div>
                                            <div className='side-img'>
                                                <img src='/images/fx-5.png' height={200} />
                                            </div>
                                            <p style={{ color: "#64748b", fontSize: ".875rem", lineHeight: "1.25rem" }}>Manufacturar</p>
                                            <h2 style={{ fontWeight: "600", fontSize: "1.875rem", lineHeight: "2.25rem", marginBottom: "6rem", }}>Shoes</h2>
                                            <Link className='see-collection-btn' href='#'><span>See Collection</span><i class="bi bi-arrow-right ms-2"></i></Link>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='f-product'>
                                            <div className='d-flex justify-content-between align-items-baseline'>
                                                <div className='tab-product-color w-20 h-20 rounded-circle mb-5'>
                                                    <img src='/images/fx-3.png' width={50} style={{ margin: " 17px 20px" }} />
                                                </div>
                                                <div className=''>
                                                    <p style={{ fontSize: "12px", }}>122 products</p>
                                                </div>
                                            </div>
                                            <div className='side-img'>
                                                <img src='/images/fx-6.svg' height={376} width={358} />
                                            </div>
                                            <p style={{ color: "#64748b", fontSize: ".875rem", lineHeight: "1.25rem" }}>Manufacturar</p>
                                            <h2 style={{ fontWeight: "600", fontSize: "1.875rem", lineHeight: "2.25rem", marginBottom: "6rem", }}>Beauty</h2>
                                            <Link className='see-collection-btn' href='#'><span>See Collection</span><i class="bi bi-arrow-right ms-2"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div className='tab-product'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <div className='f-product'>
                                            <div className='d-flex justify-content-between align-items-baseline'>
                                                <div className='tab-product-color w-20 h-20 rounded-circle mb-5'>
                                                    <img src='/images/fx-3.png' width={50} style={{ margin: " 17px 20px" }} />
                                                </div>
                                                <div className=''>
                                                    <p style={{ fontSize: "12px", }}>155 products</p>
                                                </div>
                                            </div>
                                            <div className='side-img'>
                                                <img src='/images/fx-7.svg' height={200} style={{ transform: "rotate(90deg)" }} />
                                            </div>
                                            <p style={{ color: "#64748b", fontSize: ".875rem", lineHeight: "1.25rem" }}>Manufacturar</p>
                                            <h2 style={{ fontWeight: "600", fontSize: "1.875rem", lineHeight: "2.25rem", marginBottom: "6rem", }}>Backpack</h2>
                                            <Link className='see-collection-btn' href='#'><span>See Collection</span><i class="bi bi-arrow-right ms-2"></i></Link>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='f-product'>
                                            <div className='d-flex justify-content-between align-items-baseline'>
                                                <div className='tab-product-color w-20 h-20 rounded-circle mb-5'>
                                                    <img src='/images/fx-2.png' width={50} style={{ margin: " 17px 20px" }} />
                                                </div>
                                                <div className=''>
                                                    <p style={{ fontSize: "12px", }}>22 products</p>
                                                </div>
                                            </div>
                                            <div className='side-img'>
                                                <img src='/images/fx-8.svg' height={200} style={{ transform: "rotate(269deg)" }} />
                                            </div>
                                            <p style={{ color: "#64748b", fontSize: ".875rem", lineHeight: "1.25rem" }}>Manufacturar</p>
                                            <h2 style={{ fontWeight: "600", fontSize: "1.875rem", lineHeight: "2.25rem", marginBottom: "6rem", }}>Shoes</h2>
                                            <Link className='see-collection-btn' href='#'><span>See Collection</span><i class="bi bi-arrow-right ms-2"></i></Link>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='f-product'>
                                            <div className='d-flex justify-content-between align-items-baseline'>
                                                <div className='tab-product-color w-20 h-20 rounded-circle mb-5'>
                                                    <img src='/images/fx-1.png' width={50} style={{ margin: " 17px 20px" }} />
                                                </div>
                                                <div className=''>
                                                    <p style={{ fontSize: "12px", }}>122 products</p>
                                                </div>
                                            </div>
                                            <div className='side-img'>
                                                <img src='/images/fx-9.png' height={200} style={{ transform: "rotate(180deg)" }} />
                                            </div>
                                            <p style={{ color: "#64748b", fontSize: ".875rem", lineHeight: "1.25rem" }}>Manufacturar</p>
                                            <h2 style={{ fontWeight: "600", fontSize: "1.875rem", lineHeight: "2.25rem", marginBottom: "6rem", }}>Beauty</h2>
                                            <Link className='see-collection-btn' href='#'><span>See Collection</span><i class="bi bi-arrow-right ms-2"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">Kids</div>
                        <div class="tab-pane fade" id="pills-sport" role="tabpanel" aria-labelledby="pills-sport-tab">Sports</div>
                        <div class="tab-pane fade" id="pills-beauty" role="tabpanel" aria-labelledby="pills-beauty-tab">Beauty</div>
                    </div>
                </div>
            </section>
            <hr style={{ margin: '5rem 2rem' }} />
            {/* Best Selling of This Month */}
            <section className='container best-selling '>
                <h2 class="container discover-text semiBold">Best Sellers
                    <span class="">. </span>
                    <span class="text-neutral-500 dark:text-neutral-400">Best selling of the month</span>
                </h2>
                <div className='best-selling-products'>
                    <div className='row'>
                        <div>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={10}
                                navigation
                                pagination={{
                                    clickable: true,
                                }}

                                breakpoints={{
                                    '@0.00': {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },
                                    '@0.75': {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    '@1.00': {
                                        slidesPerView: 3,
                                        spaceBetween: 40,
                                    },
                                    '@1.50': {
                                        slidesPerView: 4,
                                        spaceBetween: 50,
                                    },
                                }}
                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className='col-md-3'>
                                        <div className='fx-product'>
                                            <div class="card border-0">
                                                <div className='img-bg'>
                                                    <img src="/images/fx-1.png" class="card-img-top" alt="..." />
                                                    <div className='product-size'>
                                                        <ul className='d-flex flex-direction-row justify-content-between'>
                                                            <li><a>XS</a></li>
                                                            <li><a>S</a></li>
                                                            <li><a>M</a></li>
                                                            <li><a>ML</a></li>
                                                            <li><a>XL</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="card-body">
                                                    <ul className='d-flex flex-direction-row justify-content-between'>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                    </ul>
                                                    <h5 class="card-title mt-4">Campus Sutra</h5>
                                                    <p class="card-text">Self-Design Sugarcane Regular Fit Shirt </p>
                                                    <div className='d-flex justify-content-between align-items-baseline'>
                                                        <a href="#" class="buy-btn">Buy Now</a>
                                                        <div className='reviews'>
                                                            <i class="bi bi-star-fill me-1"></i>
                                                            <span>
                                                                4.9 (89 reviews)
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='col-md-3'>
                                        <div className='fx-product'>
                                            <div class="card border-0">
                                                <div className='img-bg'>
                                                    <img src="/images/fx-1.png" class="card-img-top" alt="..." />
                                                    <div className='product-size'>
                                                        <ul className='d-flex flex-direction-row justify-content-between'>
                                                            <li><a>XS</a></li>
                                                            <li><a>S</a></li>
                                                            <li><a>M</a></li>
                                                            <li><a>ML</a></li>
                                                            <li><a>XL</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="card-body">
                                                    <ul className='d-flex flex-direction-row justify-content-between'>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                    </ul>
                                                    <h5 class="card-title mt-4">Campus Sutra</h5>
                                                    <p class="card-text">Self-Design Sugarcane Regular Fit Shirt </p>
                                                    <div className='d-flex justify-content-between align-items-baseline'>
                                                        <a href="#" class="buy-btn">Buy Now</a>
                                                        <div className='reviews'>
                                                            <i class="bi bi-star-fill me-1"></i>
                                                            <span>
                                                                4.9 (89 reviews)
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='col-md-3 mb-5'>
                                        <div className='fx-product'>
                                            <div class="card border-0">
                                                <div className='img-bg'>
                                                    <img src="/images/fx-2.png" class="card-img-top" alt="..." />
                                                    <div className='product-size btns'>
                                                        <ul className='d-flex flex-direction-row justify-content-between'>
                                                            <li><a className='btn cart-btn'><i class="bi bi-cart me-1"></i> Add To Bag</a></li>
                                                            <li><a className='btn view-btn'><i class="bi bi-arrows-fullscreen me-1"></i> Quick View</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="card-body">
                                                    <ul className='d-flex flex-direction-row justify-content-between'>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                    </ul>
                                                    <h5 class="card-title mt-4">Xiaomi Pad 6</h5>
                                                    <p class="card-text">Redmi Pad SE| All Day Battery</p>
                                                    <div className='d-flex justify-content-between align-items-baseline'>
                                                        <a href="#" class="buy-btn">Buy Now</a>
                                                        <div className='reviews'>
                                                            <i class="bi bi-star-fill me-1"></i>
                                                            <span>
                                                                4.9 (89 reviews)
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='col-md-3'>
                                        <div className='fx-product'>
                                            <div class="card border-0">
                                                <div className='img-bg'>
                                                    <img src="/images/fx-1.png" class="card-img-top" alt="..." />
                                                    <div className='product-size'>
                                                        <ul className='d-flex flex-direction-row justify-content-between'>
                                                            <li><a>XS</a></li>
                                                            <li><a>S</a></li>
                                                            <li><a>M</a></li>
                                                            <li><a>ML</a></li>
                                                            <li><a>XL</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="card-body">
                                                    <ul className='d-flex flex-direction-row justify-content-between'>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                    </ul>
                                                    <h5 class="card-title mt-4">Campus Sutra</h5>
                                                    <p class="card-text">Self-Design Sugarcane Regular Fit Shirt </p>
                                                    <div className='d-flex justify-content-between align-items-baseline'>
                                                        <a href="#" class="buy-btn">Buy Now</a>
                                                        <div className='reviews'>
                                                            <i class="bi bi-star-fill me-1"></i>
                                                            <span>
                                                                4.9 (89 reviews)
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='col-md-3 mb-5'>
                                        <div className='fx-product'>
                                            <div class="card border-0">
                                                <div className='img-bg'>
                                                    <img src="/images/fx-2.png" class="card-img-top" alt="..." />
                                                    <div className='product-size btns'>
                                                        <ul className='d-flex flex-direction-row justify-content-between'>
                                                            <li><a className='btn cart-btn'><i class="bi bi-cart me-1"></i> Add To Bag</a></li>
                                                            <li><a className='btn view-btn'><i class="bi bi-arrows-fullscreen me-1"></i> Quick View</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="card-body">
                                                    <ul className='d-flex flex-direction-row justify-content-between'>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                    </ul>
                                                    <h5 class="card-title mt-4">Xiaomi Pad 6</h5>
                                                    <p class="card-text">Redmi Pad SE| All Day Battery</p>
                                                    <div className='d-flex justify-content-between align-items-baseline'>
                                                        <a href="#" class="buy-btn">Buy Now</a>
                                                        <div className='reviews'>
                                                            <i class="bi bi-star-fill me-1"></i>
                                                            <span>
                                                                4.9 (89 reviews)
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='col-md-3'>
                                        <div className='fx-product'>
                                            <div class="card border-0">
                                                <div className='img-bg'>
                                                    <img src="/images/fx-1.png" class="card-img-top" alt="..." />
                                                    <div className='product-size'>
                                                        <ul className='d-flex flex-direction-row justify-content-between'>
                                                            <li><a>XS</a></li>
                                                            <li><a>S</a></li>
                                                            <li><a>M</a></li>
                                                            <li><a>ML</a></li>
                                                            <li><a>XL</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="card-body">
                                                    <ul className='d-flex flex-direction-row justify-content-between'>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                    </ul>
                                                    <h5 class="card-title mt-4">Campus Sutra</h5>
                                                    <p class="card-text">Self-Design Sugarcane Regular Fit Shirt </p>
                                                    <div className='d-flex justify-content-between align-items-baseline'>
                                                        <a href="#" class="buy-btn">Buy Now</a>
                                                        <div className='reviews'>
                                                            <i class="bi bi-star-fill me-1"></i>
                                                            <span>
                                                                4.9 (89 reviews)
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='col-md-3 mb-5'>
                                        <div className='fx-product'>
                                            <div class="card border-0">
                                                <div className='img-bg'>
                                                    <img src="/images/fx-2.png" class="card-img-top" alt="..." />
                                                    <div className='product-size btns'>
                                                        <ul className='d-flex flex-direction-row justify-content-between'>
                                                            <li><a className='btn cart-btn'><i class="bi bi-cart me-1"></i> Add To Bag</a></li>
                                                            <li><a className='btn view-btn'><i class="bi bi-arrows-fullscreen me-1"></i> Quick View</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="card-body">
                                                    <ul className='d-flex flex-direction-row justify-content-between'>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                    </ul>
                                                    <h5 class="card-title mt-4">Xiaomi Pad 6</h5>
                                                    <p class="card-text">Redmi Pad SE| All Day Battery</p>
                                                    <div className='d-flex justify-content-between align-items-baseline'>
                                                        <a href="#" class="buy-btn">Buy Now</a>
                                                        <div className='reviews'>
                                                            <i class="bi bi-star-fill me-1"></i>
                                                            <span>
                                                                4.9 (89 reviews)
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='col-md-3'>
                                        <div className='fx-product'>
                                            <div class="card border-0">
                                                <div className='img-bg'>
                                                    <img src="/images/fx-1.png" class="card-img-top" alt="..." />
                                                    <div className='product-size'>
                                                        <ul className='d-flex flex-direction-row justify-content-between'>
                                                            <li><a>XS</a></li>
                                                            <li><a>S</a></li>
                                                            <li><a>M</a></li>
                                                            <li><a>ML</a></li>
                                                            <li><a>XL</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="card-body">
                                                    <ul className='d-flex flex-direction-row justify-content-between'>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                    </ul>
                                                    <h5 class="card-title mt-4">Campus Sutra</h5>
                                                    <p class="card-text">Self-Design Sugarcane Regular Fit Shirt </p>
                                                    <div className='d-flex justify-content-between align-items-baseline'>
                                                        <a href="#" class="buy-btn">Buy Now</a>
                                                        <div className='reviews'>
                                                            <i class="bi bi-star-fill me-1"></i>
                                                            <span>
                                                                4.9 (89 reviews)
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='col-md-3 mb-5'>
                                        <div className='fx-product'>
                                            <div class="card border-0">
                                                <div className='img-bg'>
                                                    <img src="/images/fx-2.png" class="card-img-top" alt="..." />
                                                    <div className='product-size btns'>
                                                        <ul className='d-flex flex-direction-row justify-content-between'>
                                                            <li><a className='btn cart-btn'><i class="bi bi-cart me-1"></i> Add To Bag</a></li>
                                                            <li><a className='btn view-btn'><i class="bi bi-arrows-fullscreen me-1"></i> Quick View</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="card-body">
                                                    <ul className='d-flex flex-direction-row justify-content-between'>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                                    </ul>
                                                    <h5 class="card-title mt-4">Xiaomi Pad 6</h5>
                                                    <p class="card-text">Redmi Pad SE| All Day Battery</p>
                                                    <div className='d-flex justify-content-between align-items-baseline'>
                                                        <a href="#" class="buy-btn">Buy Now</a>
                                                        <div className='reviews'>
                                                            <i class="bi bi-star-fill me-1"></i>
                                                            <span>
                                                                4.9 (89 reviews)
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container discount-section'>
                <div className='discount-bg'>
                    <div className='row position-relative' style={{ zIndex: 2 }}>
                        <div className='col-md-6'>
                            <img className='img-fluid' src='/images/discount.png' style={{ aspectRatio: "auto 851/ 852" }} />

                        </div>
                        <div className='col-md-6'>
                            <div className='heading' style={{ marginTop: "50px", }}>
                                <h2>LOGO</h2>
                            </div>
                            <h2 class="tracking-tight mt-5">It's Time To Save Money
                            </h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
                            <button className='discover-btn'>Discover More</button>
                        </div>
                    </div>
                </div>
            </section>
            <hr style={{ margin: '5rem 2rem' }} />

            {/* Shop By Department */}
            <section className='container department-section'>
                <div className='d-flex justify-content-between align-items-center'>
                    <h2 class="container discover-text semiBold my-5">Shop by Department</h2>
                    <Link style={{textDecoration:"none", width:"150px",}}><i class="bi bi-box-arrow-up-right me-2"></i> See All</Link>
                </div>
                <div className='container row'>
                    <div className='col-md-3'>
                        <Link style={{textDecoration:"none", textAlign:"center"}}>
                            <img className='img-fluid rounded' src='/images/fx-10.jpg' />
                            <h3  style={{fontSize: "19px", lineHeight: "2rem", color: "#0f172a", marginTop:"20px"}}>Beauty Products</h3>
                            <p style={{fontSize: ".875rem", lineHeight: "1.25rem", color: "#334155"}}>78+ Products</p>
                        </Link>

                    </div>
                    <div className='col-md-3'>
                        <Link style={{textDecoration:"none", textAlign:"center"}}>
                            <img className='img-fluid rounded' src='/images/fx-10.jpg' />
                            <h3  style={{fontSize: "19px", lineHeight: "2rem", color: "#0f172a", marginTop:"20px"}}>Beauty Products</h3>
                            <p style={{fontSize: ".875rem", lineHeight: "1.25rem", color: "#334155"}}>78+ Products</p>
                        </Link>

                    </div>
                    <div className='col-md-3'>
                        <Link style={{textDecoration:"none", textAlign:"center"}}>
                            <img className='img-fluid rounded' src='/images/fx-10.jpg' />
                            <h3  style={{fontSize: "19px", lineHeight: "2rem", color: "#0f172a", marginTop:"20px"}}>Beauty Products</h3>
                            <p style={{fontSize: ".875rem", lineHeight: "1.25rem", color: "#334155"}}>78+ Products</p>
                        </Link>

                    </div>
                    <div className='col-md-3'>
                        <Link style={{textDecoration:"none", textAlign:"center"}}>
                            <img className='img-fluid rounded' src='/images/fx-10.jpg' />
                            <h3  style={{fontSize: "19px", lineHeight: "2rem", color: "#0f172a", marginTop:"20px"}}>Beauty Products</h3>
                            <p style={{fontSize: ".875rem", lineHeight: "1.25rem", color: "#334155"}}>78+ Products</p>
                        </Link>

                    </div>
                </div>
            </section>
            <hr style={{ margin: '5rem 2rem' }} />

            {/* Shipping Staus */}
            <section className='container order-note'>
                <div className='container row text-center'>
                    <div className='col-md-3'>
                        <img src='/images/search.svg' width={160}/> <br />
                        <div class="badge rounded my-3" style={{color:"#991b1b", backgroundColor:"#fee2e2"}}>Setp 1</div>   
                        <p style={{fontSize: "16px", lineHeight: "1rem", color: "#0f172a", marginTop:"20px", fontWeight:600}}>Filter & Discover</p>
                        <p style={{fontSize: ".875rem", lineHeight: "1.25rem", color: "#334155", padding:"0px 35px",}}>Smart filtring and suggestions make it esay to find</p>
                    </div>
                    <div className='col-md-3'>
                        <img src='/images/cart.svg' width={160} height={152}/> <br />
                        <div class="badge rounded my-3" style={{color:"#3730a3", backgroundColor:"#e0e7ff"}}>Setp 2</div>   
                        <p style={{fontSize: "16px", lineHeight: "1rem", color: "#0f172a", marginTop:"20px", fontWeight:600}}>Add to bag</p>
                        <p style={{fontSize: ".875rem", lineHeight: "1.25rem", color: "#334155", padding:"0px 35px",}}>Easily select the correct items and add them to the cart</p>
                    </div>
                    <div className='col-md-3'>
                        <img src='/images/shipping.svg' width={160} height={152}/> <br />
                        <div class="badge rounded my-3" style={{color:"#854d0e", backgroundColor:"#fef9c3"}}>Setp 3</div>   
                        <p style={{fontSize: "16px", lineHeight: "1rem", color: "#0f172a", marginTop:"20px", fontWeight:600}}>Fast shipping</p>
                        <p style={{fontSize: ".875rem", lineHeight: "1.25rem", color: "#334155", padding:"0px 35px",}}>The carrier will confirm and ship quickly to you</p>
                    </div>
                    <div className='col-md-3'>
                        <img src='/images/review.svg' width={160} height={152}/> <br />
                        <div class="badge rounded my-3" style={{color:"#6b21a8", backgroundColor:"#f3e8ff"}}>Setp 4</div>   
                        <p style={{fontSize: "16px", lineHeight: "1rem", color: "#0f172a", marginTop:"20px", fontWeight:600}}>Enjoy the product</p>
                        <p style={{fontSize: ".875rem", lineHeight: "1.25rem", color: "#334155", padding:"0px 35px",}}>Have fun and enjoy your 5-star quality products</p>
                    </div>
                </div>
            </section>

        </>
    )
}
