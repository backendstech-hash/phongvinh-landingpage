"use client";
import Image from 'next/image';
import { FaChartBar, FaTachometerAlt, FaTools, FaUsers } from "react-icons/fa";
import HomeCarousel from '../components/shares/homeCarousel';
import './style.css';
import ServiceCarousel from '../components/shares/serviceCarousel';
import FeatureCard from '../components/shares/featherCard';
import { GoShieldCheck } from 'react-icons/go';
import { useAppSelector } from '../redux/hook';
import { translations } from '../services/languages';

export default function Home() {
    const { locale } = useAppSelector(storage => storage.locale);

    const lang = translations[locale];

    return (
        <div className="w-full h-full bg-white">
            <HomeCarousel/>
            <div className='flex flex-col bg-white py-10'>
                <div className='w-[75vw] max-xl:w-[95vw] mx-auto flex flex-col'>
                    <div className='flex mx-auto relative'>
                        <p className='text-brown-1 text-4xl max-xl:text-2xl font-poppins font-extrabold text-center'>{lang.home.TITLE_1}</p>
                    </div>
                    <p className='text-center mt-3 text-[20px] max-xl:text-[16px] text-brown-1 font-poppins'>{lang.home.SUBTITLE_1}</p>
                </div>
            </div>
            <div className='w-full bg-gray-100 py-16 flex'>
                <div className='w-[75vw] max-xl:w-[95vw] mx-auto flex max-lg:flex-col gap-14'>
                    <div className='flex flex-col gap-3 my-auto'>
                        <div className='flex relative'>
                            <div className="h--main">
                                <div className="h-b overflow-hidden max-w-[95dvw]">Company</div>
                                <div className="h2-tit font-poppins mt-3 text-4xl max-xl:text-2xl text-brown-1 font-extrabold">{lang.home.TITLE_2}</div>
                            </div>
                        </div>
                        <p className='text-left font-poppins text-[16px] max-xl:text-sm text-brown-1'>{lang.home.SUBTITLE_2}</p>
                    </div>
                    <iframe className='min-w-[40%] max-lg:w-full h-[400px]' width="600" height="400" src="https://www.youtube.com/embed/u-IhgutInoU?list=TLGG4sbLYQ1iTtEyNDEwMjAyNQ" title="Qiusuo – Your Reliable Wedge Wire Screen Manufacturer" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
            <div className='w-full bg-white py-10 flex'>
                <div className='w-[75vw] max-xl:w-[95vw] mx-auto flex flex-col gap-5'>
                    <div className='flex relative mx-auto'>
                        <div className="h--main2">
                            <div className="h-b2 overflow-hidden max-w-[95dvw] left-1/2 -translate-x-1/2">PRODUCTS</div>
                            <div className="h2-tit2 font-poppins mt-3 text-4xl max-xl:text-2xl text-brown-1 font-extrabold">{lang.home.TITLE_3}</div>
                        </div>
                    </div>
                    <p className='text-center text-[20px] max-xl:text-[16px] text-brown-1 font-poppins'>{lang.home.SUBTITLE_3}</p>
                </div>
            </div>
            <div className='w-full h-fit flex pb-5'>
                <div className='w-[95dvw] grid grid-cols-4 max-sm:grid-cols-2 max-xl:grid-cols-3 gap-5 max-sm:gap-3 mx-auto'>
                    <div className='flex flex-col h-auto col-span-1 cursor-pointer'>
                        <div className='flex-1 overflow-hidden'>
                            <Image src={'/products/product1.webp'} className='w-full h-auto will-change-transform transform transition-transform duration-500 ease-\[cubic-bezier\(0\.25,0\.1,0\.25,1\)\] hover:scale-110' alt='product1' width={444} height={444}/>
                        </div>
                        <div className='min-h-[70px] flex gap-2 justify-center items-center bg-gray-100 px-3'>
                            <Image src={'/menuItem/item2.svg'} className='max-lg:w-[50px]' alt='item1' width={90} height={90}/><p className='text-brown-1 font-poppins text-lg font-semibold max-lg:text-sm'>{lang.home.PRODUCT_1}</p>
                        </div>
                    </div>
                    <div className='flex flex-col h-auto col-span-1 cursor-pointer'>
                        <div className='flex-1 overflow-hidden'>
                            <Image src={'/products/product2.webp'} className='w-full h-auto will-change-transform transform transition-transform duration-500 ease-\[cubic-bezier\(0\.25,0\.1,0\.25,1\)\] hover:scale-110' alt='product1' width={444} height={444}/>
                        </div>
                        <div className='min-h-[70px] flex gap-2 justify-center items-center  bg-gray-100 px-3'>
                            <Image src={'/menuItem/item3.svg'} alt='item1' width={20} height={20}/><p className='text-brown-1 font-poppins text-lg font-semibold max-lg:text-sm'>{lang.home.PRODUCT_2}</p>
                        </div>
                    </div>
                    <div className='flex flex-col h-auto col-span-1 cursor-pointer'>
                        <div className='flex-1 overflow-hidden'>
                            <Image src={'/products/product3.webp'} className='w-full h-auto will-change-transform transform transition-transform duration-500 ease-\[cubic-bezier\(0\.25,0\.1,0\.25,1\)\] hover:scale-110' alt='product1' width={444} height={444}/>
                        </div>
                        <div className='min-h-[70px] flex gap-2 justify-center items-center bg-gray-100 px-3'>
                            <Image src={'/menuItem/item7.svg'} className='max-lg:w-[50px] max-lg:h-[50px]' alt='item1' width={60} height={60}/><p className='text-brown-1 font-poppins text-lg font-semibold max-lg:text-sm'>{lang.home.PRODUCT_3}</p>
                        </div>
                    </div>
                    <div className='flex flex-col h-auto col-span-1 cursor-pointer'>
                        <div className='flex-1 overflow-hidden'>
                            <Image src={'/products/product4.webp'} className='w-full h-auto will-change-transform transform transition-transform duration-500 ease-\[cubic-bezier\(0\.25,0\.1,0\.25,1\)\] hover:scale-110' alt='product1' width={444} height={444}/>
                        </div>
                        <div className='min-h-[70px] flex gap-2 justify-center items-center bg-gray-100 px-3'>
                            <Image src={'/menuItem/item9.svg'} className='max-lg:w-[50px] max-lg:h-[50px]' alt='item1' width={50} height={50}/><p className='max-lg:text-sm text-brown-1 font-poppins text-lg font-semibold'>{lang.home.PRODUCT_4}</p>
                        </div>
                    </div>
                    <div className='flex flex-col h-auto col-span-1 cursor-pointer'>
                        <div className='flex-1 overflow-hidden'>
                            <Image src={'/products/product5.webp'} className='w-full h-auto will-change-transform transform transition-transform duration-500 ease-\[cubic-bezier\(0\.25,0\.1,0\.25,1\)\] hover:scale-110' alt='product1' width={444} height={444}/>
                        </div>
                        <div className='min-h-[70px] flex gap-2 justify-center items-center bg-gray-100 px-3'>
                            <Image src={'/menuItem/item5.svg'} className='max-lg:w-[50px] max-lg:h-[50px]' alt='item1' width={60} height={60}/><p className='max-lg:text-sm text-brown-1 font-poppins text-lg font-semibold'>{lang.home.PRODUCT_5}</p>
                        </div>
                    </div>
                    <div className='flex flex-col h-auto col-span-1 cursor-pointer'>
                        <div className='flex-1 overflow-hidden'>
                            <Image src={'/products/product6.webp'} className='w-full h-auto will-change-transform transform transition-transform duration-500 ease-\[cubic-bezier\(0\.25,0\.1,0\.25,1\)\] hover:scale-110' alt='product1' width={444} height={444}/>
                        </div>
                        <div className='min-h-[70px] flex gap-2 justify-center items-center bg-gray-100 px-3'>
                            <Image src={'/menuItem/item6.svg'} className='max-lg:w-[50px] max-lg:h-[50px]' alt='item1' width={30} height={30}/><p className='max-lg:text-sm text-brown-1 font-poppins text-lg font-semibold'>{lang.home.PRODUCT_6}</p>
                        </div>
                    </div>
                    <div className='flex flex-col h-auto col-span-1 cursor-pointer'>
                        <div className='flex-1 overflow-hidden'>
                            <Image src={'/products/product7.webp'} className='w-full h-auto will-change-transform transform transition-transform duration-500 ease-\[cubic-bezier\(0\.25,0\.1,0\.25,1\)\] hover:scale-110' alt='product1' width={444} height={444}/>
                        </div>
                        <div className='min-h-[70px] flex gap-2 justify-center items-center bg-gray-100 px-3'>
                            <Image src={'/menuItem/item8.svg'} alt='item1' width={25} height={25}/><p className='max-lg:text-sm text-brown-1 font-poppins text-lg font-semibold'>{lang.home.PRODUCT_7}</p>
                        </div>
                    </div>
                    <div className='flex flex-col h-auto col-span-1 cursor-pointer'>
                        <div className='flex-1 overflow-hidden'>
                            <Image src={'/products/product8.webp'} className='w-full h-auto will-change-transform transform transition-transform duration-500 ease-\[cubic-bezier\(0\.25,0\.1,0\.25,1\)\] hover:scale-110' alt='product1' width={444} height={444}/>
                        </div>
                        <div className='min-h-[70px] flex gap-2 justify-center items-center bg-gray-100 px-3'>
                            <Image src={'/menuItem/item13.svg'} alt='item1' className='max-lg:w-[50px] max-lg:h-[50px]' width={45} height={45}/><p className='max-lg:text-sm text-brown-1 font-poppins text-lg font-semibold'>{lang.home.PRODUCT_8}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full bg-gray-100 py-[80px] flex flex-col'>
                <div className='w-[75vw] max-xl:w-[95vw] mx-auto flex flex-col gap-5'>
                    <div className='flex relative mx-auto'>
                        <div className="h--main2">
                            <div className="h-b2 overflow-hidden max-w-[95dvw] left-1/2 -translate-x-1/2">Industries</div>
                            <div className="h2-tit2 font-poppins mt-3 text-4xl max-xl:text-2xl text-brown-1 font-extrabold">{lang.home.TITLE_4}</div>
                        </div>
                    </div>
                    <p className='text-center text-[20px] max-xl:text-[16px] text-brown-1 font-poppins'>{lang.home.SUBTITLE_4}</p>
                </div>
                <ServiceCarousel/>
            </div>
            <div className='w-full bg-white pt-[60px] pb-6 flex flex-col'>
                <div className='w-[75vw] max-xl:w-[95vw] mx-auto flex flex-col gap-5'>
                    <div className='flex relative mx-auto'>
                        <div className="h--main2">
                            <div className="h-b2 overflow-hidden max-w-[95dvw] left-1/2 -translate-x-1/2">FEEDBACK</div>
                            <div className="h2-tit2 font-poppins mt-3 text-4xl max-xl:text-2xl text-brown-1 font-extrabold">{lang.home.TITLE_5}</div>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    <FeatureCard
                        icon={<GoShieldCheck />}
                        title={lang.home.TITLE_ITEM_1}
                        description={lang.home.SUBTITLE_ITEM_1}
                    />
                    <FeatureCard
                        icon={<FaTools />}
                        bgColor='bg-blue-2'
                        title={lang.home.TITLE_ITEM_2}
                        description={lang.home.SUBTITLE_ITEM_2}
                        active
                    />
                    <FeatureCard
                        bgColor='bg-gray-2'
                        icon={<FaChartBar />}
                        title={lang.home.TITLE_ITEM_3}
                        description={lang.home.SUBTITLE_ITEM_3}
                    />
                    <FeatureCard
                        bgColor='bg-blue-3'
                        icon={<FaUsers />}
                        title={lang.home.TITLE_ITEM_4}
                        description={lang.home.SUBTITLE_ITEM_4}
                        active
                    />
                    <FeatureCard
                        icon={<FaTachometerAlt />}
                        title={lang.home.TITLE_ITEM_5}
                        description={lang.home.SUBTITLE_ITEM_5}
                    />
                </div>
            </div>
            <div className='w-full h-[412px] max-xl:h-[300px] bg-cover flex bg-center bg-no-repeat' style={{ "backgroundImage": "url('/bg/bg8.webp')" }}>
                <div className='w-[75vw] max-xl:w-[95vw] flex mx-auto'>
                    <div className='flex flex-col gap-3 my-auto'>
                        <div className='flex relative'>
                            <div className="h--main">
                                <div className="h-b overflow-hidden max-w-[95dvw]">CONTACT</div>
                                <div className="h2-tit font-poppins mt-3 text-4xl max-xl:text-2xl text-brown-1 font-extrabold">{lang.home.TITLE_6}</div>
                            </div>
                        </div>
                        <p className='text-left font-poppins text-[16px] max-xl:text-sm text-brown-1 max-w-[40dvw] max-md:max-w-[70dvw]'>{lang.home.SUBTITLE_6}</p>
                        <div className='bg-blue-2 text-white font-poppins text-center px-5 py-1 rounded-xl mt-1 w-fit cursor-pointer'>{lang.home.GET_IN_TOUCH}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
