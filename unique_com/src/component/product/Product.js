import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import ReviewCard from "./ReviewCard";
import RatingSummary from "./RatingSummary";

export default function Product() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [activeButton, setActiveButton] = useState(null);
  const handleButtonClick = () => {
    setActiveButton(!activeButton);
  };

  const details = [
    { label: "Material composition", value: "COTTON LYCRA" },
    { label: "Pattern", value: "Solid" },
    { label: "Fit type", value: "Oversized Fit" },
    { label: "Sleeve type", value: "Half Sleeve" },
    { label: "Collar style", value: "Polo Collar" },
    { label: "Length", value: "Standard Length" },
    { label: "Country of Origin", value: "India" },
  ];

  return (
    <>
      <section className="container-md productView-section my-3">
        <div className="row mb-4">
          <div className="col-md-5" style={{ paddingLeft: "2rem" }}>
            {/* Main Swiper */}
            <Swiper
              style={{
                '--swiper-navigation-color': 'transparent',
                '--swiper-pagination-color': 'transparent',
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 5 },
                768: { slidesPerView: 1, spaceBetween: 10 },
                1024: { slidesPerView: 1, spaceBetween: 15 },
              }}
            >
              <SwiperSlide>
                <img className='img-fluid' src="./images/1.png" width={200} alt="Product 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='img-fluid' src="./images/2.png" width={200} alt="Product 2" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='img-fluid' src="./images/3.png" width={200} alt="Product 3" />
              </SwiperSlide>
            </Swiper>

            {/* Thumbnail Swiper */}
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 5 },
                768: { slidesPerView: 3, spaceBetween: 10 },
                1024: { slidesPerView: 3, spaceBetween: 15 },
              }}
            >
              <div className='row'>
                <div className='col-md-4'>
                  <SwiperSlide>
                    <img className='img-fluid' src="./images/1.png" width={100} alt="Thumbnail 1" />
                  </SwiperSlide>

                </div>
                <div className='col-md-4'>
                  <SwiperSlide>
                    <img className='img-fluid' src="./images/2.png" width={100} alt="Thumbnail 2" />
                  </SwiperSlide>

                </div>
                <div className='col-md-4'>
                  <SwiperSlide>
                    <img className='img-fluid' src="./images/3.png" width={100} alt="Thumbnail 3" />
                  </SwiperSlide>
                </div>
              </div>
            </Swiper>
          </div>
          <div className='col-md-7'>
            <div className='product-detailing mt-5 ms-5'>
              <p className='mb-0' style={{ fontSize: '12px', color: "teal" }}>Brand: Leriya Fashion</p>
              <p style={{ width: "73%" }}>
                Leriya Fashion Men Casual Half Sleeve Polo Oversized Fit T-Shirt
              </p>
              <div className='product-review'>
                <ul className='d-flex gap-2 align-items-baseline'>
                  <li><i class="bi bi-star-fill"></i></li>
                  <li><i class="bi bi-star-fill"></i></li>
                  <li><i class="bi bi-star-fill"></i></li>
                  <li><i class="bi bi-star-fill"></i></li>
                  <li><i class="bi bi-star-half"></i></li>
                  <li>42 review</li>
                </ul>
              </div>
              <p className='product-rate mb-0'>
                ₹2300<span style={{ fontSize: "10px", color: " #9d9d9d", }}>M.R.P:  <span style={{ textDecorationLine: "line-through" }}>₹4,500</span></span> <span style={{ fontSize: "12px" }}>(62% off)</span><br />
              </p>
              <span style={{ fontSize: "12px", color: "rgb(123 121 121)", }}>Save 1% with coupon</span>
              <div className='cart-productSize mt-3'>
                <p className='mb-0'>
                  Size <span className='ms-1' style={{ fontSize: "10px", color: "#ccc" }}>UK Size</span>
                </p>
                <ul className='d-flex gap-2 align-items-baseline mt-2'>
                  <li><a>XS</a></li>
                  <li><a>M</a></li>
                  <li><a>L</a></li>
                  <li><a>XL</a></li>
                  <li><a>XXL</a></li>
                  <li><a>2XL</a></li>
                </ul>
              </div>
              <p className='mb-0' style={{ fontSize: "12px", fontWeight: "600" }}><i class="bi bi-truck"></i> Free Delivery on order above ₹1000</p>
              <div className='addtocartBtn'>
                <button className="addtocart"><i class="bi bi-cart-check"></i> Add To Cart</button>
                <button className='wishlistBtn ms-2' onClick={() => handleButtonClick()}>

                  {activeButton ? (
                    <span className="check-icon">
                      <i className="bi bi-check-lg"></i>
                    </span>
                  ) : (
                    <span className="heart-icon">
                      <i className="bi bi-heart"></i>
                    </span>
                  )}
                </button>
              </div>
            </div>


          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='usercomment-section'>
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link active" id="details-tab" data-bs-toggle="tab" data-bs-target="#details" type="button" role="tab" aria-controls="details" aria-selected="true">Details</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tab" aria-controls="reviews" aria-selected="false">Review</button>
                </li>
              </ul>
              <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="details" role="tabpanel" aria-labelledby="details-tab">
                  <div className='row'>
                    <div className='col-md-12'>
                      <h2 className='mt-3 ps-3' style={{ fontSize: "16px" }}>
                        Product details
                      </h2>
                    </div>
                    <div className='col-md-5 col-sm-12'>
                      <div className='product-details-list ps-3'>
                        <table className="table table-borderless">
                          <tbody>
                            {details.map((detail, index) => (
                              <tr key={index}>
                                <th style={{ textAlign: "left", width: "50%" }}>{detail.label}</th>
                                <td style={{ textAlign: "left", fontWeight: "500" }}>{detail.value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>

                      </div>

                    </div>

                  </div>
                </div>
                <div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                  <div className='row'>
                    <div className='col-md-12 mb-3'>
                      <div className='review-filter my-3 ms-3'>
                        <div class="dropdown">
                          <button class="btn btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{ border: "1px solid #ccc", padding: "4px 20px" }}>
                            Top Review
                          </button>
                          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Top Review</a></li>
                            <li><a class="dropdown-item" href="#">Most Review</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-8'>
                      <div className='users-comment'>
                        <ReviewCard
                          user="Helen M."
                          date="Yesterday"
                          rating={5}
                          review="It has good drape and fall . As light in colour it goes well with formal pants and is a pleasure to wear"
                          likes={42}
                          dislikes={0}
                        />
                        <ReviewCard
                          user="Ann D."
                          date="2 days ago"
                          rating={4}
                          review="Good tshirt"
                          likes={35}
                          dislikes={2}
                          reply={{
                            user: "Andrew G.",
                            date: "2 days ago",
                            message: "Is it Comfortable for wear?",
                          }}
                        />
                      </div>




                    </div>
                    <div className='col-md-4'>
                      {/* Right Section */}
                      <RatingSummary
                        ratings={[
                          { stars: 5, count: 48 },
                          { stars: 4, count: 28 },
                          { stars: 3, count: 25 },
                          { stars: 2, count: 12 },
                          { stars: 1, count: 4 },
                        ]}
                      />
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}
