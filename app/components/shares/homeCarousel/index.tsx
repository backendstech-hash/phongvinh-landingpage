"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HomeCarousel() {
    return (
        <div className="w-full relative group">
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
                navigation={{
                    prevEl: '.custom-prev',
                    nextEl: '.custom-next',
                }}
                pagination={{ 
                    clickable: true,
                    renderBullet: (index, className) => {
                        return `<span class="${className} !w-3 !h-3 border-2 border-white bg-white/50 !box-border rounded-full"></span>`;
                    },
                }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                className="w-full"
            >
                <SwiperSlide>
                    <div className='w-full h-[700px] max-xl:h-[300px] max-sm:h-[350px] bg-cover flex justify-center bg-center bg-no-repeat relative' style={{ "backgroundImage": "url('/bg/bg4.webp')" }}>
                        <div className='absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/55 to-slate-900/25'></div>
                        <div className='flex flex-col gap-3 w-[75vw] max-xl:w-[95vw] my-auto'>
                            <div className='flex flex-col'>
                                <p className='text-white font-poppins max-xl:text-2xl text-6xl font-bold z-10 text-left leading-[50px] max-xl:text-center'>10 Years manufacturering of</p>
                                <p className='block z-10 max-xl:text-2xl max-xl:text-center font-poppins font-bold leading-[80px] text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400'>Wedge Wire Screen</p>
                            </div>
                            <p className='text-white font-poppins text-[20px] max-xl:text-center max-xl:text-sm z-10 max-xl:w-[80%] max-xl:mx-auto md:max-w-[50%] leading-7'>Our experience in these industries results in cost-effective solutions tailored to our customer's requirements</p>
                            <div className='px-5 py-2 mt-4 max-xl:mt-2 rounded text-white max-xl:text-xs bg-gradient-to-r from-blue-500 to-cyan-500 w-fit h-fit z-10 font-bold max-xl:mx-auto'>CONTACT US</div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-[700px] max-xl:h-[300px] max-sm:h-[350px] bg-cover flex justify-center bg-center bg-no-repeat relative' style={{ "backgroundImage": "url('/bg/bg5.webp')" }}>
                        <div className='absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/55 to-slate-900/25'></div>
                        <div className='flex flex-col w-[75vw] max-xl:w-[95vw] my-auto'>
                            <div className='flex flex-col'>
                                <p className='text-white font-poppins max-xl:text-2xl text-6xl font-bold z-10 text-left leading-[20px] max-xl:text-center'>Unwavering Quality Conrol</p>
                                <p className='block z-10 max-xl:text-lg font-poppins max-xl:w-[80%] max-xl:mx-auto font-medium italic leading-[80px] text-2xl text-transparent max-xl:text-center bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400'>Meets the highest standards of excellence</p>
                            </div>
                            <div className='px-5 py-2 max-xl:mt-4 rounded text-white max-xl:text-xs bg-gradient-to-r from-blue-500 to-cyan-500 w-fit h-fit z-10 font-bold max-xl:mx-auto'>CONTACT US</div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-[700px] max-xl:h-[300px] max-sm:h-[350px] bg-cover flex justify-center bg-center bg-no-repeat relative' style={{ "backgroundImage": "url('/bg/bg6.webp')" }}>
                        <div className='absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/55 to-slate-900/25'></div>
                        <div className='flex flex-col w-[75vw] max-xl:w-[95vw] my-auto'>
                            <div className='flex flex-col'>
                                <p className='text-white font-poppins max-xl:text-2xl max-xl:text-center text-6xl font-bold z-10 text-left leading-[20px]'>Outstanding Capacities</p>
                                <p className='block z-10 max-xl:text-lg font-poppins font-medium italic max-xl:w-[80%] max-xl:text-center max-xl:mx-auto leading-[80px] text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400'>Meets Different Markets and Projects Requirements</p>
                            </div>
                            <div className='px-5 py-2 max-xl:mt-4 rounded text-white max-xl:text-xs bg-gradient-to-r from-blue-500 to-cyan-500 w-fit h-fit z-10 font-bold max-xl:mx-auto'>CONTACT US</div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-[700px] max-xl:h-[300px] max-sm:h-[350px] bg-cover flex justify-center bg-center bg-no-repeat relative' style={{ "backgroundImage": "url('/bg/bg7.webp')" }}>
                        <div className='absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/55 to-slate-900/25'></div>
                        <div className='flex flex-col w-[75vw] max-xl:w-[95vw] my-auto'>
                            <div className='flex flex-col'>
                                <p className='text-white font-poppins max-xl:text-3xl text-6xl font-bold z-10 text-left leading-[20px] max-xl:text-center'>Wide Ranges Products</p>
                                <p className='block z-10 max-xl:text-lg font-poppins font-medium leading-[80px] italic text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 max-xl:w-[80%] max-xl:text-center max-xl:mx-auto'>Satisfy Your Projects & Distribution Needs</p>
                            </div>
                            <div className='px-5 py-2 max-xl:mt-4 rounded text-white max-xl:text-xs bg-gradient-to-r from-blue-500 to-cyan-500 w-fit h-fit z-10 font-bold max-xl:mx-auto'>CONTACT US</div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}