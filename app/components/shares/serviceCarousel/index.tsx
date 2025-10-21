"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { PiArrowRight, PiArrowRightBold } from "react-icons/pi";
import Image from 'next/image';

export default function ServiceCarousel() {
    return (
        <div className="w-[99dvw] mx-auto relative group mt-8">
            {/* Custom Previous Button */}
            <div className="custom-prev absolute left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 max-xl:w-11 max-xl:h-11 max-sm:w-9 max-sm:h-9 max-sm:left-3 bg-white/10 backdrop-blur-md hover:bg-gradient-to-br rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 opacity-0 group-hover:opacity-100 border-2 border-white/30">
                <svg className="w-5 h-5 max-xl:w-5 max-xl:h-5 max-sm:w-4 max-sm:h-4 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
            </div>

            {/* Custom Next Button */}
            <div className="custom-next absolute right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 max-xl:w-11 max-xl:h-11 max-sm:w-9 max-sm:h-9 max-sm:right-3 bg-white/10 backdrop-blur-md hover:bg-gradient-to-br rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 opacity-0 group-hover:opacity-100 border-2 border-white/30">
                <svg className="w-5 h-5 max-xl:w-5 max-xl:h-5 max-sm:w-4 max-sm:h-4 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
            </div>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 1 },   // Mobile
                    640: { slidesPerView: 2, spaceBetween: 1 },   // Tablet
                    1024: { slidesPerView: 3, spaceBetween: 1 },  // Desktop
                    1280: { slidesPerView: 4, spaceBetween: 1 },  // Large screen
                    1536: { slidesPerView: 5, spaceBetween: 1 },  // Large screen
                }}
                navigation={{
                    prevEl: '.custom-prev',
                    nextEl: '.custom-next',
                }}
                // pagination={{ 
                //     clickable: true,
                //     renderBullet: (index, className) => {
                //         return `<span class="${className} !w-3 !h-3 border-2 border-white bg-white/50 !box-border rounded-full"></span>`;
                //     },
                // }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                className="w-full"
            >
                <SwiperSlide>
                    <div className="bg-white hover:bg-gray-100 cursor-pointer rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 w-[19dvw] max-sm:w-[95dvw] max-lg:w-[49dvw] max-xl:w-[32dvw] max-2xl:w-[24dvw] mx-auto">
                    <div className="overflow-hidden rounded-t-lg">
                        <Image
                        src="/services/service1.png"
                        alt="Water Treatment"
                        width={400}
                        height={250}
                        className="w-full h-auto transition-transform duration-500 ease-out hover:scale-105"
                        />
                    </div>

                    <div className="p-4 flex flex-col items-center gap-2">
                        <h3 className="text-blue-1 font-poppins text-lg font-semibold text-center">
                            Power Generation
                        </h3>
                        <span className="text-blue-600 text-2xl leading-none"><PiArrowRightBold className="w-6 h-6"/></span>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white hover:bg-gray-100 cursor-pointer rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 w-[19dvw] max-sm:w-[95dvw] max-lg:w-[49dvw] max-xl:w-[32dvw] max-2xl:w-[24dvw] mx-auto">
                    <div className="overflow-hidden rounded-t-lg">
                        <Image
                        src="/services/service2.png"
                        alt="Mining"
                        width={400}
                        height={250}
                        className="w-full h-auto transition-transform duration-500 ease-out hover:scale-105"
                        />
                    </div>

                    <div className="p-4 flex flex-col items-center gap-2">
                        <h3 className="text-blue-1 font-poppins text-lg font-semibold text-center">
                            Mining
                        </h3>
                        <span className="text-blue-600 text-2xl leading-none"><PiArrowRightBold className="w-6 h-6"/></span>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white hover:bg-gray-100 cursor-pointer rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 w-[19dvw] max-sm:w-[95dvw] max-lg:w-[49dvw] max-xl:w-[32dvw] max-2xl:w-[24dvw] mx-auto">
                    <div className="overflow-hidden rounded-t-lg">
                        <Image
                        src="/services/service3.png"
                        alt="Water Treatment"
                        width={400}
                        height={250}
                        className="w-full h-auto transition-transform duration-500 ease-out hover:scale-105"
                        />
                    </div>

                    <div className="p-4 flex flex-col items-center gap-2">
                        <h3 className="text-blue-1 font-poppins text-lg font-semibold text-center">
                            Pharmaceutical
                        </h3>
                        <span className="text-blue-600 text-2xl leading-none"><PiArrowRightBold className="w-6 h-6"/></span>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white hover:bg-gray-100 cursor-pointer rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 w-[19dvw] max-sm:w-[95dvw] max-lg:w-[49dvw] max-xl:w-[32dvw] max-2xl:w-[24dvw] mx-auto">
                    <div className="overflow-hidden rounded-t-lg">
                        <Image
                        src="/services/service4.png"
                        alt="Pulp & Paper"
                        width={400}
                        height={250}
                        className="w-full h-auto transition-transform duration-500 ease-out hover:scale-105"
                        />
                    </div>

                    <div className="p-4 flex flex-col items-center gap-2">
                        <h3 className="text-blue-1 font-poppins text-lg font-semibold text-center">
                            Pulp & Paper
                        </h3>
                        <span className="text-blue-600 text-2xl leading-none"><PiArrowRightBold className="w-6 h-6"/></span>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white hover:bg-gray-100 cursor-pointer rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 w-[19dvw] max-sm:w-[95dvw] max-lg:w-[49dvw] max-xl:w-[32dvw] max-2xl:w-[24dvw] mx-auto">
                    <div className="overflow-hidden rounded-t-lg">
                        <Image
                        src="/services/service5.png"
                        alt="Agriculture"
                        width={400}
                        height={250}
                        className="w-full h-auto transition-transform duration-500 ease-out hover:scale-105"
                        />
                    </div>

                    <div className="p-4 flex flex-col items-center gap-2">
                        <h3 className="text-blue-1 font-poppins text-lg font-semibold text-center">
                            Agriculture
                        </h3>
                        <span className="text-blue-600 text-2xl leading-none"><PiArrowRightBold className="w-6 h-6"/></span>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white hover:bg-gray-100 cursor-pointer rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 w-[19dvw] max-sm:w-[95dvw] max-lg:w-[49dvw] max-xl:w-[32dvw] max-2xl:w-[24dvw] mx-auto">
                    <div className="overflow-hidden rounded-t-lg">
                        <Image
                        src="/services/service6.png"
                        alt="Wastewater Treatment"
                        width={400}
                        height={250}
                        className="w-full h-auto transition-transform duration-500 ease-out hover:scale-105"
                        />
                    </div>

                    <div className="p-4 flex flex-col items-center gap-2">
                        <h3 className="text-blue-1 font-poppins text-lg font-semibold text-center">
                            Wastewater Treatment
                        </h3>
                        <span className="text-blue-600 text-2xl leading-none"><PiArrowRightBold className="w-6 h-6"/></span>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white hover:bg-gray-100 cursor-pointer rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 w-[19dvw] max-sm:w-[95dvw] max-lg:w-[49dvw] max-xl:w-[32dvw] max-2xl:w-[24dvw] mx-auto">
                    <div className="overflow-hidden rounded-t-lg">
                        <Image
                        src="/services/service7.png"
                        alt="Oil, Gas & Petrochemical"
                        width={400}
                        height={250}
                        className="w-full h-auto transition-transform duration-500 ease-out hover:scale-105"
                        />
                    </div>

                    <div className="p-4 flex flex-col items-center gap-2">
                        <h3 className="text-blue-1 font-poppins text-lg font-semibold text-center">
                            Oil, Gas & Petrochemical
                        </h3>
                        <span className="text-blue-600 text-2xl leading-none"><PiArrowRightBold className="w-6 h-6"/></span>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white hover:bg-gray-100 cursor-pointer rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 w-[19dvw] max-sm:w-[95dvw] max-lg:w-[49dvw] max-xl:w-[32dvw] max-2xl:w-[24dvw] mx-auto">
                    <div className="overflow-hidden rounded-t-lg">
                        <Image
                        src="/services/service8.png"
                        alt="Food & Beverage"
                        width={400}
                        height={250}
                        className="w-full h-auto transition-transform duration-500 ease-out hover:scale-105"
                        />
                    </div>

                    <div className="p-4 flex flex-col items-center gap-2">
                        <h3 className="text-blue-1 font-poppins text-lg font-semibold text-center">
                            Food & Beverage
                        </h3>
                        <span className="text-blue-600 text-2xl leading-none"><PiArrowRightBold className="w-6 h-6"/></span>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white hover:bg-gray-100 cursor-pointer rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 w-[19dvw] max-sm:w-[95dvw] max-lg:w-[49dvw] max-xl:w-[32dvw] max-2xl:w-[24dvw] mx-auto">
                    <div className="overflow-hidden rounded-t-lg">
                        <Image
                        src="/services/service9.png"
                        alt="Water Treatment"
                        width={400}
                        height={250}
                        className="w-full h-auto transition-transform duration-500 ease-out hover:scale-105"
                        />
                    </div>

                    <div className="p-4 flex flex-col items-center gap-2">
                        <h3 className="text-blue-1 font-poppins text-lg font-semibold text-center">
                            Water Treatment
                        </h3>
                        <span className="text-blue-600 text-2xl leading-none"><PiArrowRightBold className="w-6 h-6"/></span>
                    </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}