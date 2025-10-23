"use client";

import { AiOutlineGlobal } from "react-icons/ai";
import RightSidebarMobile from "./components/menuSideBarRight";
import { FaQuoteLeft } from "react-icons/fa";
import Image from 'next/image';
import { PiCaretDownLight, PiCaretRight } from "react-icons/pi";
import { useAppDispatch, useAppSelector } from "@/app/redux/hook";
import { setLocale } from "@/app/redux/slices/locale.slice";
import { translations } from "@/app/services/languages";
import Link from 'next/link';

export default function Header() {
    const dispatch = useAppDispatch();

    const { locale } = useAppSelector(storage => storage.locale);
    
    const lang = translations[locale];

    return <>
        <div className="w-full flex justify-center bg-white">
            <div className="w-[75vw] max-xl:w-[95vw] flex justify-between">
                <Link href="/" className='flex gap-2 cursor-pointer my-1'>
                    <Image src={"/logo/logo.svg"} className='w-[45px] max-xl:w-[30px]' width={45} height={95} alt='woodcraft' />
                    <div className='flex flex-col my-auto mt-3 max-xl:mt-1.5 text-brown-1'>
                        <p className='font-cormorant font-extrabold text-4xl max-xl:text-2xl max-xl:mt-1 leading-[26px] text-center text-brown-1 text-nowrap'>PHONG VĨNH</p>
                        <p className='font-montserrat text-[13px] text-center font-light text-nowrap max-xl:hidden'>WATER & WASTEWATER SOLUTIONS</p>
                    </div>
                </Link>
                <div className='flex gap-8 text-brown-1 max-xl:hidden h-full'>
                    <Link href={"/"}>
                        <p className='cursor-pointer text-nowrap font-montserrat font-medium h-full flex flex-col justify-center mr-1'>{lang.header.HOME}</p>
                    </Link>
                    <div className='h-full flex flex-col justify-center items-center relative group'>
                        <Link href={"/products"}>
                            <p 
                                className='cursor-pointer text-nowrap font-montserrat font-medium my-auto flex' 
                                onMouseEnter={() => {
                                    document.body.style.overflow = "hidden";
                                }}
                                onMouseLeave={() => {
                                    document.body.style.overflow = "auto";
                                }}
                            >{lang.header.PRODUCTS}<PiCaretDownLight className='my-auto w-4 text-black'/></p>
                        </Link>
                        <span className="absolute bottom-0 w-0 h-[4px] bg-black transition-all duration-200 group-hover:w-full"></span>
                        <div 
                            className="fixed z-20 inset-0 h-fit top-[71px] w-full flex items-center justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300"
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
                                        <Image src={'/menuItem/item1.svg'} alt={lang.header.PRODUCT_1} className='w-[60px] h-[60px] my-auto' width={30} height={30}/>
                                        <p className='w-full text-[16px] font-poppins my-auto'>{lang.header.PRODUCT_1}</p>
                                    </div>
                                    <div className='col-span-1 flex p-3 gap-3 bg-white cursor-pointer text-brown-1 hover:text-blue-1'>
                                        <Image src={'/menuItem/item2.svg'} alt={lang.header.PRODUCT_2} className='my-auto' width={70} height={100}/>
                                        <p className='w-full text-[16px] my-auto font-poppins'>{lang.header.PRODUCT_2}</p>
                                    </div>
                                    <div className='col-span-1 flex p-3 gap-5 bg-white cursor-pointer text-brown-1 hover:text-blue-1'>
                                        <Image src={'/menuItem/item3.svg'} alt={lang.header.PRODUCT_3} className='w-[60px] h-[60px] my-auto' width={30} height={30}/>
                                        <p className='w-full text-[16px] font-poppins my-auto'>{lang.header.PRODUCT_3}</p>
                                    </div>
                                    <div className='col-span-1 flex p-3 gap-5 bg-white cursor-pointer text-brown-1 hover:text-blue-1'>
                                        <Image src={'/menuItem/item4.svg'} alt={lang.header.PRODUCT_4} className='my-auto ml-2' width={50} height={50}/>
                                        <p className='w-full text-[16px] my-auto font-poppins'>{lang.header.PRODUCT_4}</p>
                                    </div>
                                    <div className='col-span-1 flex p-3 gap-5 bg-white cursor-pointer text-brown-1 hover:text-blue-1'>
                                        <Image src={'/menuItem/item5.svg'} alt={lang.header.PRODUCT_5} className='my-auto' width={60} height={60}/>
                                        <p className='w-full text-[16px] my-auto font-poppins'>{lang.header.PRODUCT_5}</p>
                                    </div>
                                    <div className='col-span-1 flex p-3 gap-5 bg-white cursor-pointer text-brown-1 hover:text-blue-1'>
                                        <Image src={'/menuItem/item6.svg'} className='w-[60px] h-[60px] my-auto' width={30} height={30} alt={lang.header.PRODUCT_6}/>
                                        <p className='w-full text-[16px] font-poppins my-auto'>{lang.header.PRODUCT_6}</p>
                                    </div>
                                    <div className='col-span-1 flex p-3 gap-5 bg-white cursor-pointer text-brown-1 hover:text-blue-1'>
                                        <Image src={'/menuItem/item7.svg'} className='my-auto' alt={lang.header.PRODUCT_7} width={60} height={60}/>
                                        <p className='w-full text-[16px] font-poppins my-auto'>{lang.header.PRODUCT_7}</p>
                                    </div>
                                    <div className='col-span-1 flex gap-5 p-3 bg-white cursor-pointer text-brown-1 hover:text-blue-1'>
                                        <Image src={'/menuItem/item8.svg'} alt={lang.header.PRODUCT_8} className='w-[60px] h-[60px] my-auto' width={30} height={30}/>
                                        <p className='w-full text-[16px] my-auto font-poppins'>{lang.header.PRODUCT_8}</p>
                                    </div>
                                    <div className='col-span-1 flex p-3 gap-3 bg-white cursor-pointer text-brown-1 hover:text-blue-1'>
                                        <Image src={'/menuItem/item9.svg'} alt={lang.header.PRODUCT_9} className='my-auto ml-1' width={60} height={60}/>
                                        <p className='w-full text-[16px] font-poppins my-auto'>{lang.header.PRODUCT_9}</p>
                                    </div>
                                    <div className='col-span-1 flex p-3 gap-5 bg-white cursor-pointer text-brown-1 hover:text-blue-1'>
                                        <Image src={'/menuItem/item10.svg'} alt={lang.header.PRODUCT_10} className='w-[60px] h-[60px] my-auto' width={30} height={30}/>
                                        <p className='w-full text-[16px] my-auto font-poppins'>{lang.header.PRODUCT_10}</p>
                                    </div>
                                    <div className='col-span-1 flex p-3 gap-4 bg-white cursor-pointer text-brown-1 hover:text-blue-1'>
                                        <Image src={'/menuItem/item11.svg'} alt={lang.header.PRODUCT_11} className='w-[50px] h-[60px] my-auto' width={20} height={30}/>
                                        <p className='w-full text-[16px] font-poppins my-auto text-brown-1'>{lang.header.PRODUCT_11}</p>
                                    </div>
                                    <div className='col-span-1 flex p-3 gap-6 bg-white cursor-pointer text-brown-1 hover:text-blue-1'>
                                        <Image src={'/menuItem/item12.svg'} alt={lang.header.PRODUCT_12} className='w-[60px] ml-3 mr-1 h-[60px] my-auto' width={30} height={30}/>
                                        <p className='w-full text-[16px] font-poppins my-auto'>{lang.header.PRODUCT_12}</p>
                                    </div>
                                    <div className='col-span-1 flex p-3 gap-5 bg-white cursor-pointer text-brown-1 hover:text-blue-1'>
                                        <Image src={'/menuItem/item13.svg'} alt={lang.header.PRODUCT_13} className='my-auto' width={45} height={40}/>
                                        <p className='w-full text-[16px] font-poppins my-auto'>{lang.header.PRODUCT_13}</p>
                                    </div>
                                    <div className='col-span-1 flex p-3 gap-6 bg-white cursor-pointer text-brown-1 hover:text-blue-1'>
                                        <Image src={'/menuItem/item14.svg'} alt={lang.header.PRODUCT_14} className='my-auto ml-3' width={40} height={40}/>
                                        <p className='w-full text-[16px] font-poppins my-auto'>{lang.header.PRODUCT_14}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='h-full flex flex-col justify-center items-center relative group'>
                        <p 
                            className='cursor-pointer text-nowrap font-montserrat font-medium my-auto flex'
                            onMouseEnter={() => {
                                document.body.style.overflow = "hidden";
                            }}
                            onMouseLeave={() => {
                                document.body.style.overflow = "auto";
                            }}
                        >{lang.header.NEWS}<PiCaretDownLight className='my-auto w-4 text-black'/></p>
                        <span className="absolute bottom-0 w-0 h-[4px] bg-black transition-all duration-200 group-hover:w-full"></span>
                        <div 
                            className="fixed z-20 inset-0 h-fit top-[71px] w-full flex items-center justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300"
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
                                                <p className='text-lg font-medium font-poppins text-brown-1'>{lang.header.STRONG_SP}</p>
                                                <p className='text-sm text-brown-1/50 whitespace-normal break-words'>{lang.header.STRONG_SP_CONTENT}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full flex flex-col gap-5'>
                                        <p className='text-blue-1 font-poppins font-semibold text-xl uppercase'>{lang.header.NEWS}</p>
                                        <div className='grid grid-cols-3 gap-x-6'>
                                            <div className='cursor-pointer hover:text-blue-1 py-2.5 font-poppins text-brown-1 col-span-1 border-y-solid border-y-[1px] flex justify-between border-y-black/50'>{lang.header.NEWS_ITEM_1}<PiCaretRight className='my-auto w-4 h-4'/></div>
                                            {/* <div className='cursor-pointer hover:text-blue-1 py-2.5 font-poppins text-brown-1 col-span-1 border-y-solid border-y-[1px] flex justify-between border-y-black/50'>News & Events<PiCaretRight className='my-auto w-4 h-4'/></div> */}
                                            {/* <div className='cursor-pointer hover:text-blue-1 py-2.5 font-poppins text-brown-1 col-span-1 border-y-solid border-y-[1px] flex justify-between border-y-black/50'>Videos<PiCaretRight className='my-auto w-4 h-4'/></div>
                                            <div className='cursor-pointer hover:text-blue-1 py-2.5 font-poppins text-brown-1 col-span-1 border-b-solid border-b-[1px] flex justify-between border-b-black/50'>RFQ Forms<PiCaretRight className='my-auto w-4 h-4'/></div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex relative group my-auto py-2'>
                        <AiOutlineGlobal className='w-7 h-7 cursor-pointer'/>
                        <div className={`flex-col group-hover:flex hidden absolute top-full gap-2 shadow-[0_4px_20px_rgba(0,0,0,0.1)] z-10 bg-white p-2 rounded left-1/2 transform -translate-x-1/2`}>
                            <span className='flex gap-1 whitespace-nowrap text-[16px] cursor-pointer font-poppins text-brown-1' onClick={() => dispatch(setLocale('vi')) }>🇻🇳️ <p className='text-center mx-auto'>VI</p></span>
                            <span className='flex gap-1 whitespace-nowrap text-[16px] cursor-pointer font-poppins text-brown-1' onClick={() => dispatch(setLocale('en')) }>🇬🇧 <p className='text-center'>EN</p></span>
                        </div>
                    </div>
                    <Link href="/contact" className="my-auto">
                        <p className='text-white font-extrabold text-sm font-poppins h-fit my-auto rounded-lg px-6 py-2 bg-blue-1 text-nowrap cursor-pointer uppercase'>{lang.header.CONTACT}</p>
                    </Link>
                </div>
                <RightSidebarMobile/>
            </div>
        </div>
    </>
}