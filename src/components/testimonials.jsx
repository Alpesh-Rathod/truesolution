'use client';

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Navigation, Pagination, Autoplay } from 'swiper/modules'

export default function Testimonials({
    title = "Our",
    highlight = "Testimonials",
    subtitle = "Hear from our satisfied clients who have experienced the True Solution difference.",
    testimonials = [
        {
            ratingstars: "/img/rating-stars.png",
            name: "John Doe",
            position: "CEO, Company A",
            feedback: "When my mother was diagnosed with cancer, we knew that Hospy is the hospital we could trust. Their state of the art facilities made my mother feel at ease. After 6 months of treatment, my mother was completely healed. I owe it all to the professionals here at Hospy. Thank you so much! "
        },
        {
            ratingstars: "/img/rating-stars.png",
            name: "Jane Smith",
            position: "Marketing Director, Company B",
            feedback: " When my mother was diagnosed with cancer, we knew that Hospy is the hospital we could trust. Their state of the art facilities made my mother feel at ease. After 6 months of treatment, my mother was completely healed. I owe it all to the professionals here at Hospy. Thank you so much! "

        },
        {
            ratingstars: "/img/rating-stars.png",
            name: "Mike Johnson",
            position: "Product Manager, Company C",
            feedback: " When my mother was diagnosed with cancer, we knew that Hospy is the hospital we could trust. Their state of the art facilities made my mother feel at ease. After 6 months of treatment, my mother was completely healed. I owe it all to the professionals here at Hospy. Thank you so much! "

        },
        {
            ratingstars: "/img/rating-stars.png",
            name: "Dave Thompson",
            position: "Marketing Director, Company B",
            feedback: " When my mother was diagnosed with cancer, we knew that Hospy is the hospital we could trust. Their state of the art facilities made my mother feel at ease. After 6 months of treatment, my mother was completely healed. I owe it all to the professionals here at Hospy. Thank you so much! "

        }
    ]
}) {
    return (
        <>
            <style jsx global>{`
                .testimonials-section {
                      padding: 80px 0;
                      background: #F8F8F8;
                }   
                .testimonials-section h2 {
                    font-size: 60px;
                    font-weight: 700;
                    margin-bottom: 15px;
                }
                .testimonials-section .section-title .text-primary {
                    color: #4eaebc !important;  
                }
                .testimonials-section p {
                    font-size: 16px;
                    color: #555;
                }
                .testimonial-item {
                    background: #ffffff;
                    padding: 40px 40px;
                    margin-bottom: 20px;
                    border-radius: 8px;
                    // box-shadow: 0px 2px 40px 0px #a8a8a833;
                }
                .testimonial-item img {
                    width: 120px;
                    height: auto;
                    margin-bottom: 15px;
                }
                .testimonial-item h4 {
                    font-size: 24px;
                    font-weight: 600;
                    margin-bottom: 5px;
                }
                .testimonial-item .position {
                    font-size: 15px;
                    color: #777;
                  
                }
                .testimonial-item p {
                    font-size: 16px;
                    line-height: 22px;
                    margin-bottom: 15px;
                    color: #333;
                }
                .swiper-horizontal {
                    padding: 0px 30px;
                }
                .swiper-button-prev, 
                .swiper-button-next {
                    border: 2px solid #4EAEBC;
                    color: #4EAEBC;
                    border-radius: 100%;
                    width: 60px;
                    height: 60px;
                }
                .swiper-button-prev:hover, 
                .swiper-button-next:hover {
                    background: #4EAEBC;
                    color: #ffffff;
                }
                .swiper-button-prev svg, 
                .swiper-button-next svg { 
                    width: 20px;
                    height: 20px;
                }
      `}</style>
            <section className="testimonials-section">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="section-title text-center mb-5">
                        <h2>
                            {title} <span className="text-primary">{highlight}</span>
                        </h2>
                        <p>{subtitle}</p>
                    </div>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={3}
                        navigation
                        pagination={false}
                        autoplay={{ delay: 3000 }}
                        loop
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="testimonial-item">
                                    <img src={testimonial.ratingstars} />
                                    <p>"{testimonial.feedback}"</p>
                                    <h4>{testimonial.name}</h4>
                                    <div className="position">{testimonial.position}</div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
}
