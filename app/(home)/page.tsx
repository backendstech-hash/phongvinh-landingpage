"use client";
import Image from 'next/image';
import { FaChartBar, FaRegHandshake, FaTachometerAlt, FaTools, FaUsers } from "react-icons/fa";
import HomeCarousel from '../components/shares/homeCarousel';
import './style.css';
import ServiceCarousel from '../components/shares/serviceCarousel';
import FeatureCard from '../components/shares/featherCard';
import { GoShieldCheck } from 'react-icons/go';
import { useAppSelector } from '../redux/hook';
import { translations } from '../services/languages';
import { ShieldCheck, MessageSquareHeart, Wrench } from "lucide-react";

export default function Home() {
    const { locale } = useAppSelector(storage => storage.locale);

    const lang = translations[locale];
    const items = [
        {
            icon: "/menuItem/image.png",
            src: "/products/product26.webp",
            title: lang.home.PRODUCT_1,
            desc: lang.home.PRODUCT_TITLE_1
        },
        {
            icon: "/menuItem/image1.png",
            src: "/products/product27.webp",
            title: lang.home.PRODUCT_2,
            desc: lang.home.PRODUCT_TITLE_2
        },
        {
            icon: "/menuItem/image2.png",
            src: "/products/product28.webp",
            title: lang.home.PRODUCT_3,
            desc: lang.home.PRODUCT_TITLE_3
        },
        {
            icon: "/menuItem/image4.png",
            src: "/products/product29.webp",
            title: lang.home.PRODUCT_4,
            desc: lang.home.PRODUCT_TITLE_4
        }
    ];

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
            <div className='w-full bg-gray-100 py-16 flex flex-col'>
                <div className='w-[75vw] max-xl:w-[95vw] mx-auto flex flex-col gap-5'>
                    <div className='flex relative mx-auto'>
                        <div className="h--main2">
                            <div className="h-b2 overflow-hidden max-w-[95dvw] left-1/2 -translate-x-1/2">POLITE</div>
                            <div className="h2-tit2 font-poppins mt-3 text-4xl max-xl:text-2xl text-brown-1 font-extrabold">{lang.home.TITLE_7}</div>
                        </div>
                    </div>
                    <p className='text-center text-[20px] max-xl:text-[16px] text-brown-1 font-poppins'>{lang.home.SUBTITLE_7}</p>
                </div>
                <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        bgColor='bg-white'
                        icon={<GoShieldCheck />}
                        title={lang.home.TITLE_ITEM_6}
                        description={lang.home.SUBTITLE_ITEM_6}
                    />
                    <FeatureCard
                        icon={<MessageSquareHeart size={30} />}
                        bgColor='bg-blue-2'
                        title={lang.home.TITLE_ITEM_7}
                        description={lang.home.SUBTITLE_ITEM_7}
                        active
                    />
                    <FeatureCard
                        bgColor='bg-white'
                        icon={<Wrench size={30} />}
                        title={lang.home.TITLE_ITEM_8}
                        description={lang.home.SUBTITLE_ITEM_8}
                    />
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
                <div className="w-[75vw] max-xl:w-[95dvw] mx-auto grid max-xl:grid-cols-2 grid-cols-4 gap-5 max-sm:gap-3">
                    {items.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-lg shadow-sm border-solid border-[1px] border-black/10 overflow-hidden transform transition duration-300 hover:scale-[103%] cursor-pointer"
                    >
                        <div className="relative w-full h-[290px] flex justify-center items-center max-sm:h-[200px]">
                        <Image
                            src={item.icon}
                            alt={item.title}
                            width={250}
                            height={250}
                            className="w-[60%] h-auto mx-auto my-auto"
                        />
                        </div>
                        <div className="p-4">
                        <h3 className="font-semibold text-sm sm:text-lg font-poppins">{item.title}</h3>
                        <p className="mt-2 text-gray-600 text-sm sm:text-base font-poppins">{item.desc}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            {/* <div className='w-full bg-gray-100 py-[80px] flex flex-col'>
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
            </div> */}
            <div className='w-full bg-white pt-[60px] pb-6 flex flex-col'>
                <div className='w-[75vw] max-xl:w-[95vw] mx-auto flex flex-col gap-5'>
                    <div className='flex relative mx-auto'>
                        <div className="h--main2">
                            <div className="h-b2 overflow-hidden max-w-[95dvw] left-1/2 -translate-x-1/2">FEEDBACK</div>
                            <div className="h2-tit2 font-poppins mt-3 text-4xl max-xl:text-2xl text-brown-1 font-extrabold">{lang.home.TITLE_5}</div>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <FeatureCard
                        icon={<GoShieldCheck />}
                        title={lang.home.TITLE_ITEM_1}
                        description={lang.home.SUBTITLE_ITEM_1}
                    />
                    <FeatureCard
                        icon={<FaUsers size={35} />}
                        bgColor='bg-blue-2'
                        title={lang.home.TITLE_ITEM_2}
                        description={lang.home.SUBTITLE_ITEM_2}
                        active
                    />
                    <FeatureCard
                        bgColor='bg-gray-2'
                        icon={<FaTools />}
                        title={lang.home.TITLE_ITEM_3}
                        description={lang.home.SUBTITLE_ITEM_3}
                    />
                    <FeatureCard
                        bgColor='bg-blue-3'
                        icon={<FaRegHandshake size={35} />}
                        title={lang.home.TITLE_ITEM_4}
                        description={lang.home.SUBTITLE_ITEM_4}
                        active
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
