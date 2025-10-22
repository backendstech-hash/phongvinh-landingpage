"use client";
import Image from 'next/image';
import RightSidebarMobile from '../components/shares/menuSideBarRight';
import { PiCaretDownLight, PiCaretRight, PiPhoneLight } from 'react-icons/pi';
import { CiMail } from "react-icons/ci";
import { FaChartBar, FaQuoteLeft, FaTachometerAlt, FaTools, FaUsers } from "react-icons/fa";
import HomeCarousel from '../components/shares/homeCarousel';
import './style.css';
import ServiceCarousel from '../components/shares/serviceCarousel';
import FeatureCard from '../components/shares/featherCard';
import { GoShieldCheck } from 'react-icons/go';
import { TfiLinkedin } from "react-icons/tfi";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Home() {
    return (
        <div className="w-full h-screen bg-white">
            {/* header */}
            <div className='w-full flex border-b-solid border-[1.5px] py-2 border-gray-200'>
                <div className='w-[75vw] max-xl:w-[95vw] mx-auto flex md:justify-between gap-5 overflow-x-auto'>
                    <div className='flex gap-5'>
                        <div className='flex gap-2'>
                            <PiPhoneLight className='w-6 h-6'/> <p className='text-sm my-auto text-nowrap'>WhatsApp: 0086-18038871391</p>
                        </div>
                        <div className='flex gap-2'>
                            <CiMail className='w-6 h-6'/> <p className='text-sm my-auto text-nowrap'>Email: keni@btoslotw@filter.com</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <span className="cursor-pointer hover:scale-110 transition-transform text-sm sm:text-[16px]" title='VI'>🇻🇳️</span>
                        <span className="cursor-pointer hover:scale-110 transition-transform text-sm sm:text-[16px]" title='EN'>🇬🇧</span>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center bg-white">
                <div className="w-[75vw] max-xl:w-[95vw] flex justify-between">
                    <div className='flex gap-2 cursor-pointer my-1'>
                        <Image src={"/logo/logo.svg"} className='w-[45px] max-xl:w-[30px]' width={45} height={95} alt='woodcraft' />
                        <div className='flex flex-col my-auto mt-3 max-xl:mt-1.5 text-brown-1'>
                            <p className='font-cormorant font-semibold text-4xl max-xl:text-2xl leading-[26px] text-center text-brown-1 text-nowrap'>PHONG VĨNH</p>
                            <p className='font-montserrat text-[13px] text-center font-light text-nowrap max-xl:hidden'>WATER & WASTEWATER SOLUTIONS</p>
                        </div>
                    </div>
                    <div className='flex gap-8 text-brown-1 max-xl:hidden h-full'>
                        <p className='cursor-pointer text-nowrap font-montserrat font-medium h-full flex flex-col justify-center mr-1'>Home</p>
                        <div className='h-full flex flex-col justify-center items-center relative group'>
                            <p 
                                className='cursor-pointer text-nowrap font-montserrat font-medium my-auto flex' 
                                onMouseEnter={() => {
                                    document.body.style.overflow = "hidden";
                                }}
                                onMouseLeave={() => {
                                    document.body.style.overflow = "auto";
                                }}
                            >Products<PiCaretDownLight className='my-auto w-4 text-black'/></p>
                            <span className="absolute bottom-0 w-0 h-[4px] bg-black transition-all duration-200 group-hover:w-full"></span>
                            <div 
                                className="fixed z-20 inset-0 h-fit top-[113px] w-full flex items-center justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300"
                                onMouseEnter={() => {
                                    document.body.style.overflow = "hidden";
                                }}
                                onMouseLeave={() => {
                                    document.body.style.overflow = "auto";
                                }}
                            >
                                <div className="bg-gray-100 shadow-lg py-6  w-full border">
                                    <div className='grid grid-cols-5 gap-6 w-[75vw] max-2xl:w-[95vw] mx-auto'>
                                        <div className='col-span-1 flex p-3 gap-5 bg-white cursor-pointer text-brown-1 hover:text-blue-1'>
                                            <Image src={'/menuItem/item1.svg'} alt='item1' className='w-[60px] h-[60px] my-auto' width={30} height={30}/>
                                            <p className='w-full text-[16px] font-poppins my-auto'>Wedge Wire Screen Tube</p>
                                        </div>
                                        <div className='col-span-1 flex p-3 gap-3 bg-white cursor-pointer text-brown-1 hover:text-blue-1'>
                                            <Image src={'/menuItem/item2.svg'} alt='item1' className='my-auto' width={70} height={100}/>
                                            <p className='w-full text-[16px] my-auto font-poppins'>Wedge Wire Screen Tube</p>
                                        </div>
                                        <div className='col-span-1 flex p-3 gap-5 bg-white cursor-pointer text-brown-1 hover:text-blue-1'>
                                            <Image src={'/menuItem/item3.svg'} alt='item1' className='w-[60px] h-[60px] my-auto' width={30} height={30}/>
                                            <p className='w-full text-[16px] font-poppins my-auto'>Wedge Wire Screen Tube</p>
                                        </div>
                                        <div className='col-span-1 flex p-3 gap-5 bg-white cursor-pointer text-brown-1 hover:text-blue-1'>
                                            <Image src={'/menuItem/item4.svg'} alt='item1' className='my-auto ml-2' width={50} height={50}/>
                                            <p className='w-full text-[16px] my-auto font-poppins'>Wedge Wire Screen Tube</p>
                                        </div>
                                        <div className='col-span-1 flex p-3 gap-5 bg-white cursor-pointer text-brown-1 hover:text-blue-1'>
                                            <Image src={'/menuItem/item5.svg'} alt='item1' className='my-auto' width={60} height={60}/>
                                            <p className='w-full text-[16px] my-auto font-poppins'>Wedge Wire Screen Tube</p>
                                        </div>
                                        <div className='col-span-1 flex p-3 gap-5 bg-white cursor-pointer text-brown-1 hover:text-blue-1'>
                                            <Image src={'/menuItem/item6.svg'} className='w-[60px] h-[60px] my-auto' width={30} height={30} alt='item6'/>
                                            <p className='w-full text-[16px] font-poppins my-auto'>Wedge Wire Screen Tube</p>
                                        </div>
                                        <div className='col-span-1 flex p-3 gap-5 bg-white cursor-pointer text-brown-1 hover:text-blue-1'>
                                            <Image src={'/menuItem/item7.svg'} className='my-auto' alt='item6' width={60} height={60}/>
                                            <p className='w-full text-[16px] font-poppins my-auto'>Wedge Wire Screen Tube</p>
                                        </div>
                                        <div className='col-span-1 flex gap-5 p-3 bg-white cursor-pointer text-brown-1 hover:text-blue-1'>
                                            <Image src={'/menuItem/item8.svg'} alt='item8' className='w-[60px] h-[60px] my-auto' width={30} height={30}/>
                                            <p className='w-full text-[16px] my-auto font-poppins'>Wedge Wire Screen Tube</p>
                                        </div>
                                        <div className='col-span-1 flex p-3 gap-3 bg-white cursor-pointer text-brown-1 hover:text-blue-1'>
                                            <Image src={'/menuItem/item9.svg'} alt='item9' className='my-auto ml-1' width={60} height={60}/>
                                            <p className='w-full text-[16px] font-poppins my-auto'>Wedge Wire Screen Tube</p>
                                        </div>
                                        <div className='col-span-1 flex p-3 gap-5 bg-white cursor-pointer text-brown-1 hover:text-blue-1'>
                                            <Image src={'/menuItem/item10.svg'} alt='item10' className='w-[60px] h-[60px] my-auto' width={30} height={30}/>
                                            <p className='w-full text-[16px] my-auto font-poppins'>Wedge Wire Screen Tube</p>
                                        </div>
                                        <div className='col-span-1 flex p-3 gap-4 bg-white cursor-pointer text-brown-1 hover:text-blue-1'>
                                            <Image src={'/menuItem/item11.svg'} alt='item11' className='w-[50px] h-[60px] my-auto' width={20} height={30}/>
                                            <p className='w-full text-[16px] font-poppins my-auto text-brown-1'>Wedge Wire Screen Tube</p>
                                        </div>
                                        <div className='col-span-1 flex p-3 gap-6 bg-white cursor-pointer text-brown-1 hover:text-blue-1'>
                                            <Image src={'/menuItem/item12.svg'} alt='item12' className='w-[60px] ml-3 mr-1 h-[60px] my-auto' width={30} height={30}/>
                                            <p className='w-full text-[16px] font-poppins my-auto'>Wedge Wire Screen Tube</p>
                                        </div>
                                        <div className='col-span-1 flex p-3 gap-5 bg-white cursor-pointer text-brown-1 hover:text-blue-1'>
                                            <Image src={'/menuItem/item13.svg'} alt='item13' className='my-auto' width={45} height={40}/>
                                            <p className='w-full text-[16px] font-poppins my-auto'>Wedge Wire Screen Tube</p>
                                        </div>
                                        <div className='col-span-1 flex p-3 gap-6 bg-white cursor-pointer text-brown-1 hover:text-blue-1'>
                                            <Image src={'/menuItem/item14.svg'} alt='item14' className='my-auto ml-3' width={40} height={40}/>
                                            <p className='w-full text-[16px] font-poppins my-auto'>Wedge Wire Screen Tube</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='h-full flex flex-col justify-center items-center relative group'>
                            <p className='cursor-pointer text-nowrap font-montserrat font-medium my-auto flex'>News<PiCaretDownLight className='my-auto w-4 text-black'/></p>
                            <span className="absolute bottom-0 w-0 h-[4px] bg-black transition-all duration-200 group-hover:w-full"></span>
                            <div 
                                className="fixed z-20 inset-0 h-fit top-[113px] w-full flex items-center justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300"
                                onMouseEnter={() => {
                                    document.body.style.overflow = "hidden";
                                }}
                                onMouseLeave={() => {
                                    document.body.style.overflow = "auto";
                                }}
                            >
                                <div className="bg-gray-100 shadow-lg py-6  w-full border">
                                    <div className='w-[75vw] max-2xl:w-[95vw] mx-auto flex gap-12'>
                                        <div className='flex flex-col bg-gray-100 text-brown-1 min-w-[440px] w-[440px] gap-3'>
                                            <Image src={'/illustrator/image1.png'} alt='item1' className='w-[440px] h-[220px]' width={440} height={220}/>
                                            <div className='flex gap-5'>
                                                <div className='flex flex-col gap-2 w-fit items-center'>
                                                    <FaQuoteLeft className='w-10 h-10 text-gray-300'/>
                                                    <div className='w-[2px] h-12 my-auto bg-gray-300'></div>
                                                </div>
                                                <div className='flex flex-col gap-3 flex-1 break-words'>
                                                    <p className='text-lg font-medium font-poppins text-brown-1'>Strong Support</p>
                                                    <p className='text-sm text-brown-1/50 whitespace-normal break-words'>Professional articles, complete catalogues and efficient RFQ forms let our communication and cooperation more smooth and efficient</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-full flex flex-col gap-5'>
                                            <p className='text-blue-1 font-poppins font-semibold text-xl'>NEWS</p>
                                            <div className='grid grid-cols-3 gap-x-6'>
                                                <div className='cursor-pointer hover:text-blue-1 py-2.5 font-poppins text-brown-1 col-span-1 border-y-solid border-y-[1px] flex justify-between border-y-black/50'>News & Events<PiCaretRight className='my-auto w-4 h-4'/></div>
                                                {/* <div className='cursor-pointer hover:text-blue-1 py-2.5 font-poppins text-brown-1 col-span-1 border-y-solid border-y-[1px] flex justify-between border-y-black/50'>News & Events<PiCaretRight className='my-auto w-4 h-4'/></div> */}
                                                {/* <div className='cursor-pointer hover:text-blue-1 py-2.5 font-poppins text-brown-1 col-span-1 border-y-solid border-y-[1px] flex justify-between border-y-black/50'>Videos<PiCaretRight className='my-auto w-4 h-4'/></div>
                                                <div className='cursor-pointer hover:text-blue-1 py-2.5 font-poppins text-brown-1 col-span-1 border-b-solid border-b-[1px] flex justify-between border-b-black/50'>RFQ Forms<PiCaretRight className='my-auto w-4 h-4'/></div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className='text-white font-extrabold text-sm h-fit my-auto rounded px-6 py-2 bg-blue-1 text-nowrap'>CONTACT</p>
                    </div>
                    <RightSidebarMobile/>
                </div>
                
            </div>

            {/* <div className='w-full h-[600px] max-xl:h-[300px] max-sm:h-[350px] bg-cover flex justify-center bg-center bg-no-repeat relative' style={{ "backgroundImage": "url('/bg/bg4.png')" }}>
                <div className='absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/75 to-slate-900/40'></div>
                <div className='flex flex-col gap-3 w-[75vw] max-xl:w-[95vw] my-auto'>
                    <div className='flex flex-col'>
                        <p className='text-white font-poppins max-xl:text-3xl text-6xl font-bold z-10 text-left leading-[50px]'>10 Years manufacturering of</p>
                        <p className='block z-10 max-xl:text-3xl font-poppins font-bold leading-[80px] text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400'>Wedge Wire Screen</p>
                    </div>
                    <p className='text-white font-poppins text-[20px] max-xl:text-sm z-10 md:max-w-[50%]'>Our experience in these industries results in cost-effective solutions tailored to our customer's requirements</p>
                    <div className='px-5 py-3 mt-4 rounded text-white max-xl:text-xs bg-gradient-to-r from-blue-500 to-cyan-500 w-fit h-fit z-10 font-bold'>CONTACT US</div>
                </div>
            </div> */}
            <HomeCarousel/>
            <div className='flex flex-col bg-white py-10'>
                <div className='w-[75vw] max-xl:w-[95vw] mx-auto flex flex-col'>
                    <div className='flex mx-auto relative'>
                        <p className='text-brown-1 text-4xl max-xl:text-2xl font-poppins font-extrabold text-center'>Qiusuo – Your Trusted Wedge Wire Screen Manufacturer</p>
                    </div>
                    <p className='text-center mt-3 text-[20px] max-xl:text-[16px] text-brown-1 font-poppins'>At Qiusuo, we take pride in being a professional provider of innovative and precision-engineered wedge wire solutions. With a steadfast commitment to excellence, we have established ourselves as a trusted partner for industries seeking reliable and high-performance products.</p>
                </div>
            </div>
            <div className='w-full bg-gray-100 py-16 flex'>
                <div className='w-[75vw] max-xl:w-[95vw] mx-auto flex max-lg:flex-col gap-14'>
                    <div className='flex flex-col gap-3 my-auto'>
                        <div className='flex relative'>
                            <div className="h--main">
                                <div className="h-b overflow-hidden max-w-[95dvw]">Company</div>
                                <div className="h2-tit font-poppins mt-3 text-4xl max-xl:text-2xl text-brown-1 font-extrabold">Who We Are?</div>
                            </div>
                        </div>
                        <p className='text-left font-poppins text-[16px] max-xl:text-sm text-brown-1'>With a legacy of nearly a decade of dedicated production and design and commitment to quality, we are your trusted source for high-performance wedge wire screens. Our high performance products, custom solutions, global reach, and dedication to innovation set us apart in the industry. Explore our range of precision-engineered screens and experience the Qiusuo difference today.</p>
                    </div>
                    <iframe className='min-w-[40%] max-lg:w-full h-[400px]' width="600" height="400" src="https://www.youtube.com/embed/u-IhgutInoU?list=TLGG4sbLYQ1iTtEyMTEwMjAyNQ" title="Qiusuo – Your Reliable Wedge Wire Screen Manufacturer" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
            <div className='w-full bg-white py-10 flex'>
                <div className='w-[75vw] max-xl:w-[95vw] mx-auto flex flex-col gap-5'>
                    <div className='flex relative mx-auto'>
                        <div className="h--main2">
                            <div className="h-b2 overflow-hidden max-w-[95dvw] left-1/2 -translate-x-1/2">PRODUCTS</div>
                            <div className="h2-tit2 font-poppins mt-3 text-4xl max-xl:text-2xl text-brown-1 font-extrabold">What we have?</div>
                        </div>
                    </div>
                    <p className='text-center text-[20px] max-xl:text-[16px] text-brown-1 font-poppins'>At Qiusuo, we take pride in being a professional provider of innovative and precision-engineered wedge wire solutions. With a steadfast commitment to excellence, we have established ourselves as a trusted partner for industries seeking reliable and high-performance products.</p>
                </div>
            </div>
            <div className='w-full h-fit flex pb-5'>
                <div className='w-[95dvw] grid grid-cols-4 max-sm:grid-cols-2 max-xl:grid-cols-3 gap-5 mx-auto'>
                    <div className='flex flex-col h-auto col-span-1 cursor-pointer'>
                        <div className='flex-1 overflow-hidden'>
                            <Image src={'/products/product1.webp'} className='w-full h-auto will-change-transform transform transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-110' alt='product1' width={444} height={444}/>
                        </div>
                        <div className='min-h-[70px] flex gap-2 justify-center items-center bg-gray-100 px-3'>
                            <Image src={'/menuItem/item2.svg'} className='max-lg:w-[50px]' alt='item1' width={90} height={90}/><p className='text-brown-1 font-poppins text-lg font-semibold max-lg:text-sm'>Wedge Wire Screen Panels</p>
                        </div>
                    </div>
                    <div className='flex flex-col h-auto col-span-1 cursor-pointer'>
                        <div className='flex-1 overflow-hidden'>
                            <Image src={'/products/product2.webp'} className='w-full h-auto will-change-transform transform transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-110' alt='product1' width={444} height={444}/>
                        </div>
                        <div className='min-h-[70px] flex gap-2 justify-center items-center  bg-gray-100 px-3'>
                            <Image src={'/menuItem/item3.svg'} alt='item1' width={20} height={20}/><p className='text-brown-1 font-poppins text-lg font-semibold max-lg:text-sm'>Wedge Wire Screen Panels</p>
                        </div>
                    </div>
                    <div className='flex flex-col h-auto col-span-1 cursor-pointer'>
                        <div className='flex-1 overflow-hidden'>
                            <Image src={'/products/product3.webp'} className='w-full h-auto will-change-transform transform transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-110' alt='product1' width={444} height={444}/>
                        </div>
                        <div className='min-h-[70px] flex gap-2 justify-center items-center bg-gray-100 px-3'>
                            <Image src={'/menuItem/item7.svg'} className='max-lg:w-[50px] max-lg:h-[50px]' alt='item1' width={60} height={60}/><p className='text-brown-1 font-poppins text-lg font-semibold max-lg:text-sm'>Wedge Wire Screen Panels</p>
                        </div>
                    </div>
                    <div className='flex flex-col h-auto col-span-1 cursor-pointer'>
                        <div className='flex-1 overflow-hidden'>
                            <Image src={'/products/product4.webp'} className='w-full h-auto will-change-transform transform transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-110' alt='product1' width={444} height={444}/>
                        </div>
                        <div className='min-h-[70px] flex gap-2 justify-center items-center bg-gray-100 px-3'>
                            <Image src={'/menuItem/item9.svg'} className='max-lg:w-[50px] max-lg:h-[50px]' alt='item1' width={50} height={50}/><p className='max-lg:text-sm text-brown-1 font-poppins text-lg font-semibold'>Wedge Wire Screen Panels</p>
                        </div>
                    </div>
                    <div className='flex flex-col h-auto col-span-1 cursor-pointer'>
                        <div className='flex-1 overflow-hidden'>
                            <Image src={'/products/product5.webp'} className='w-full h-auto will-change-transform transform transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-110' alt='product1' width={444} height={444}/>
                        </div>
                        <div className='min-h-[70px] flex gap-2 justify-center items-center bg-gray-100 px-3'>
                            <Image src={'/menuItem/item5.svg'} className='max-lg:w-[50px] max-lg:h-[50px]' alt='item1' width={60} height={60}/><p className='max-lg:text-sm text-brown-1 font-poppins text-lg font-semibold'>Wedge Wire Screen Panels</p>
                        </div>
                    </div>
                    <div className='flex flex-col h-auto col-span-1 cursor-pointer'>
                        <div className='flex-1 overflow-hidden'>
                            <Image src={'/products/product6.webp'} className='w-full h-auto will-change-transform transform transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-110' alt='product1' width={444} height={444}/>
                        </div>
                        <div className='min-h-[70px] flex gap-2 justify-center items-center bg-gray-100 px-3'>
                            <Image src={'/menuItem/item6.svg'} className='max-lg:w-[50px] max-lg:h-[50px]' alt='item1' width={30} height={30}/><p className='max-lg:text-sm text-brown-1 font-poppins text-lg font-semibold'>Wedge Wire Screen Panels</p>
                        </div>
                    </div>
                    <div className='flex flex-col h-auto col-span-1 cursor-pointer'>
                        <div className='flex-1 overflow-hidden'>
                            <Image src={'/products/product7.webp'} className='w-full h-auto will-change-transform transform transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-110' alt='product1' width={444} height={444}/>
                        </div>
                        <div className='min-h-[70px] flex gap-2 justify-center items-center bg-gray-100 px-3'>
                            <Image src={'/menuItem/item8.svg'} alt='item1' width={25} height={25}/><p className='max-lg:text-sm text-brown-1 font-poppins text-lg font-semibold'>Wedge Wire Screen Panels</p>
                        </div>
                    </div>
                    <div className='flex flex-col h-auto col-span-1 cursor-pointer'>
                        <div className='flex-1 overflow-hidden'>
                            <Image src={'/products/product8.webp'} className='w-full h-auto will-change-transform transform transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-110' alt='product1' width={444} height={444}/>
                        </div>
                        <div className='min-h-[70px] flex gap-2 justify-center items-center bg-gray-100 px-3'>
                            <Image src={'/menuItem/item13.svg'} alt='item1' className='max-lg:w-[50px] max-lg:h-[50px]' width={45} height={45}/><p className='max-lg:text-sm text-brown-1 font-poppins text-lg font-semibold'>Wedge Wire Screen Panels</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full bg-gray-100 py-[80px] flex flex-col'>
                <div className='w-[75vw] max-xl:w-[95vw] mx-auto flex flex-col gap-5'>
                    <div className='flex relative mx-auto'>
                        <div className="h--main2">
                            <div className="h-b2 overflow-hidden max-w-[95dvw] left-1/2 -translate-x-1/2">Industries</div>
                            <div className="h2-tit2 font-poppins mt-3 text-4xl max-xl:text-2xl text-brown-1 font-extrabold">What We Serve For?</div>
                        </div>
                    </div>
                    <p className='text-center text-[20px] max-xl:text-[16px] text-brown-1 font-poppins'>Wedge wire screen products are playing positive and crucial roles in different industries and in many applications within each industry. They will help to increase filtering efficiency, improve product quality, protect environments and guard people's health.</p>
                </div>
                <ServiceCarousel/>
            </div>
            <div className='w-full bg-white pt-[60px] pb-6 flex flex-col'>
                <div className='w-[75vw] max-xl:w-[95vw] mx-auto flex flex-col gap-5'>
                    <div className='flex relative mx-auto'>
                        <div className="h--main2">
                            <div className="h-b2 overflow-hidden max-w-[95dvw] left-1/2 -translate-x-1/2">FEEDBACK</div>
                            <div className="h2-tit2 font-poppins mt-3 text-4xl max-xl:text-2xl text-brown-1 font-extrabold">What Our Customers Say?</div>
                        </div>
                    </div>
                    <p className='text-center text-[20px] max-xl:text-[16px] text-brown-1 font-poppins'>Wedge wire screen products are playing positive and crucial roles in different industries and in many applications within each industry. They will help to increase filtering efficiency, improve product quality, protect environments and guard people's health.</p>
                </div>
                <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    <FeatureCard
                        icon={<GoShieldCheck />}
                        title="Reliable and Trustworthy"
                        description="In our industry, product quality is non-negotiable. Qiusuo has consistently delivered screens that we can trust. They are our go-to choice for wedge wire products."
                    />
                    <FeatureCard
                        icon={<FaTools />}
                        bgColor='bg-blue-2'
                        title="Customization Excellence"
                        description="We greatly appreciate Qiusuo's ability to customize screens to our exact specifications. This flexibility helps us achieve exceptional product quality."
                        active
                    />
                    <FeatureCard
                        bgColor='bg-gray-2'
                        icon={<FaChartBar />}
                        title="Exceptional Filtration Efficiency"
                        description="We've been consistently impressed with the filtration efficiency of Qiusuo's wedge wire screens, reducing contamination and boosting quality."
                    />
                    <FeatureCard
                        bgColor='bg-blue-3'
                        icon={<FaUsers />}
                        title="Responsive and Supportive Team"
                        description="Working with Qiusuo has been a pleasure. Their team is responsive and supportive, always going above and beyond to meet our needs."
                        active
                    />
                    <FeatureCard
                        icon={<FaTachometerAlt />}
                        title="Consistent Performance"
                        description="Qiusuo’s products deliver consistent performance and make our production efficient, exceeding expectations and ensuring uninterrupted output."
                    />
                </div>
            </div>
            <div className='w-full h-[412px] max-xl:h-[300px] bg-cover flex bg-center bg-no-repeat' style={{ "backgroundImage": "url('/bg/bg8.webp')" }}>
                <div className='w-[75vw] max-xl:w-[95vw] flex mx-auto'>
                    <div className='flex flex-col gap-3 my-auto'>
                        <div className='flex relative'>
                            <div className="h--main">
                                <div className="h-b overflow-hidden max-w-[95dvw]">CONTACT</div>
                                <div className="h2-tit font-poppins mt-3 text-4xl max-xl:text-2xl text-brown-1 font-extrabold">Chat With Us</div>
                            </div>
                        </div>
                        <p className='text-left font-poppins text-[16px] max-xl:text-sm text-brown-1 max-w-[40dvw] max-md:max-w-[70dvw]'>No matter you want to inquiry wedge wire prices, customize filtration solutions or solve current problems, just feel free to contact us. Let's boost your efficiency and quality together!</p>
                        <div className='bg-blue-2 text-white font-poppins text-center px-5 py-1 rounded-xl mt-1 w-fit cursor-pointer'>Get in Touch</div>
                    </div>
                </div>
            </div>
            {/* footer */}
            <div className='w-full flex bg-blue-3 py-5'>
                <div className='w-[75vw] max-xl:w-[95vw] flex flex-col mx-auto'>
                    <div className='flex justify-between border-b-solid border-b-[1px] py-3 max-sm:py-0 max-sm:border-none border-b-white/50'>
                        <div className='flex gap-2 cursor-pointer my-1'>
                            <Image src={"/logo/logo.svg"} className='max-sm:w-[25px] w-[30px]' width={45} height={95} alt='woodcraft' />
                            <div className='flex flex-col my-auto'>
                                <p className='font-cormorant font-semibold max-sm:text-2xl text-3xl leading-[26px] text-center text-white text-nowrap'>PHONG VĨNH</p>
                                <p className='font-montserrat max-sm:text-[9px] text-[11px] text-center text-white font-light text-nowrap'>WATER & WASTEWATER SOLUTIONS</p>
                            </div>
                        </div>
                        <div className='flex gap-8 text-brown-1 h-full max-sm:hidden'>
                            <p className='cursor-pointer text-nowrap font-montserrat font-medium h-full flex flex-col justify-center mr-1 hover:underline text-white'>Products</p>
                            <p className='cursor-pointer text-nowrap font-montserrat font-medium h-full flex flex-col justify-center mr-1 hover:underline text-white'>Services</p>
                            <p className='cursor-pointer text-nowrap font-montserrat font-medium h-full flex flex-col justify-center mr-1 hover:underline text-white'>Contact</p>
                        </div>
                    </div>
                    <div className='flex justify-between gap-8 max-lg:flex-col mt-5'>
                        <div className='flex flex-col gap-6 justify-between'>
                            <p className='uppercase font-poppins text-white font-semibold w-[70%] max-sm:w-full text-xl'>Your Partner for Cutting-Edge Solutions to Wedge Wire Screens</p>
                            <div className='flex gap-2'>
                                <p className='text-white font-poppins text-sm my-auto'>Follow us:</p>
                                <div className='flex flex-col justify-center items-center rounded-full p-2 border-white border-solid border-[1px] my-auto bg-blue-2 hover:bg-blue-3 cursor-pointer'>
                                    <TfiLinkedin className='w-4 h-4 text-white'/>
                                </div>
                                <div className='flex flex-col justify-center items-center rounded-full p-2 border-white border-solid border-[1px] my-auto bg-blue-2 hover:bg-blue-3 cursor-pointer'>
                                    <BsTwitterX className='w-4 h-4 text-white'/>
                                </div>
                                <div className='flex flex-col justify-center items-center rounded-full p-2 border-white border-solid border-[1px] my-auto bg-blue-2 hover:bg-blue-3 cursor-pointer'>
                                    <FaFacebookF className='w-4 h-4 text-white'/>
                                </div>
                                <div className='flex flex-col justify-center items-center rounded-full p-2 border-white border-solid border-[1px] my-auto bg-blue-2 hover:bg-blue-3 cursor-pointer'>
                                    <FaYoutube className='w-4 h-4 text-white'/>
                                </div>
                            </div>
                        </div>
                        <div className="text-white rounded-md space-y-2 text-[16px] leading-relaxed">
                            <p>
                                <span className="font-medium">Mobile:</span>{" "}
                                +86-18703384586 <span className="opacity-80">(WeChat/WhatsApp)</span>
                            </p>
                            <p>
                                <span className="font-medium">Tel:</span> +86-318-5183833
                            </p>
                            <p>
                                <span className="font-medium">Skype:</span>{" "}
                                <a
                                href="skype:hellosandyzhou?chat"
                                className="text-blue-300 hover:text-white transition-colors"
                                >
                                hellosandyzhou
                                </a>
                            </p>
                            <p>
                                <span className="font-medium">E-mail:</span>{" "}
                                <a
                                href="mailto:sales@wedgewire-screen.com"
                                className="text-blue-300 hover:text-white transition-colors"
                                >
                                sales@wedgewire-screen.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex bg-blue-4 py-4'>
                <div className='w-[75vw] max-xl:w-[95vw] flex justify-between max-sm:flex-col mx-auto'>
                    <p className='text-sm text-white font-poppins'>Copyright © 1998 - 2025 Hebei Qiusuo Wire Mesh Products Co., Ltd.</p>
                    <div className='flex gap-2 text-white'>
                        <p className='text-sm text-white font-poppins underline'>Privacy Policy</p> | <p className='text-sm text-white font-poppins underline'>Terms & Conditions</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
