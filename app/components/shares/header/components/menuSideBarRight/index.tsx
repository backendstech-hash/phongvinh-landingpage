"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { PiMinus, PiPlus } from "react-icons/pi";
import Image from 'next/image';
import { AiOutlineGlobal } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "@/app/redux/hook";
import { translations } from "@/app/services/languages";
import { setLocale } from "@/app/redux/slices/locale.slice";
import Link from "next/link";

export default function RightSidebarMobile() {
    const [open, setOpen] = useState(false);
    const [openProduct, setOpenProduct] = useState(false);
    const [openService, setOpenService] = useState(false);

    const dispatch = useAppDispatch();
    const { locale } = useAppSelector(storage => storage.locale);
        
    const lang = translations[locale];

    return (
        <div className="xl:hidden my-auto">
            {/* Nút mở menu */}
            <button
                className="rounded-lg cursor-pointer xl:hidden my-auto h-fit p-2 flex gap-4"
            >
                <div className='flex relative group my-auto py-2'>
                    <AiOutlineGlobal className='w-7 h-7'/>
                    <div className='hidden flex-col group-hover:flex absolute top-full gap-2 shadow-[0_4px_20px_rgba(0,0,0,0.1)] z-10 bg-white p-2 rounded left-1/2 transform -translate-x-1/2'>
                        <span className='flex gap-1 whitespace-nowrap text-[16px] cursor-pointer font-poppins text-brown-1' onClick={() => dispatch(setLocale('vi')) }>🇻🇳️ <p className='text-center mx-auto'>VI</p></span>
                        <span className='flex gap-1 whitespace-nowrap text-[16px] cursor-pointer font-poppins text-brown-1' onClick={() => dispatch(setLocale('en')) }>🇬🇧 <p className='text-center'>EN</p></span>
                    </div>
                </div>
                <Menu size={28} className="my-auto" onClick={() => setOpen(true)}/>
            </button>

            {/* Overlay nền mờ */}
            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={() => setOpen(false)}
            ></div>

            {/* Sidebar */}
            <div
                className={`fixed flex flex-col top-0 right-0 h-full w-[400px] max-sm:w-full bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <button onClick={() => setOpen(false)}>
                        <X className="text-brown-1" size={24} />
                    </button>
                </div>

                <nav className="flex flex-col flex-1 gap-4 p-4 text-gray-700 overflow-y-auto">
                    <Link href={"/"} onClick={() => setOpen(false)}>
                        <p className="cursor-pointer text-brown-1 text-left">{lang.header.HOME}</p>
                    </Link>
                    <p className="cursor-pointer text-brown-1 text-left flex justify-between" onClick={() => setOpenProduct(!openProduct)}>{lang.header.PRODUCTS}
                        {
                            openProduct ? (
                                <PiMinus className="w-5 my-auto h-5 transition-transform duration-300" />
                            ) : (
                                <PiPlus className="w-5 my-auto h-5 transition-transform duration-300" />
                            )
                        }
                    </p>
                    <div className={`transition-all duration-300 overflow-hidden min-h-[460px] ${openProduct ? "max-h-[460px] -my-2" : "!max-h-0 !min-h-0 -my-2"}`}>
                        <div className="w-full min-h-[460px] flex flex-col gap-3 bg-gray-100 p-3">
                            <div className="flex gap-3 text-brown-1 hover:text-blue-1 text-sm cursor-pointer">
                                <Image src={'/menuItem/item1.svg'} className="h-5" alt={lang.header.PRODUCT_1} width={20} height={20}/> <p className="truncate">{lang.header.PRODUCT_1}</p>
                            </div>
                            <div className="flex gap-3 text-brown-1 hover:text-blue-1 text-sm cursor-pointer">
                                <Image src={'/menuItem/item2.svg'} className="h-5" alt={lang.header.PRODUCT_2} width={20} height={20}/> <p className="truncate">{lang.header.PRODUCT_2}</p>
                            </div>
                            <div className="flex gap-3 text-brown-1 hover:text-blue-1 text-sm cursor-pointer">
                                <Image src={'/menuItem/item3.svg'} className="h-5" alt={lang.header.PRODUCT_3} width={20} height={20}/> <p className="truncate">{lang.header.PRODUCT_3}</p>
                            </div>
                            <div className="flex gap-3 text-brown-1 hover:text-blue-1 text-sm cursor-pointer">
                                <Image src={'/menuItem/item4.svg'} className="h-5" alt={lang.header.PRODUCT_4} width={20} height={20}/> <p className="truncate">{lang.header.PRODUCT_4}</p>
                            </div>
                            <div className="flex gap-3 text-brown-1 hover:text-blue-1 text-sm cursor-pointer">
                                <Image src={'/menuItem/item5.svg'} className="h-5" alt={lang.header.PRODUCT_5} width={20} height={20}/> <p className="truncate">{lang.header.PRODUCT_5}</p>
                            </div>
                            <div className="flex gap-3 text-brown-1 hover:text-blue-1 text-sm cursor-pointer">
                                <Image src={'/menuItem/item6.svg'} className="h-5" alt={lang.header.PRODUCT_6} width={20} height={20}/> <p className="truncate">{lang.header.PRODUCT_6}</p>
                            </div>
                            <div className="flex gap-3 text-brown-1 hover:text-blue-1 text-sm cursor-pointer">
                                <Image src={'/menuItem/item7.svg'} className="h-5" alt={lang.header.PRODUCT_7} width={20} height={20}/> <p className="truncate">{lang.header.PRODUCT_7}</p>
                            </div>
                            <div className="flex gap-3 text-brown-1 hover:text-blue-1 text-sm cursor-pointer">
                                <Image src={'/menuItem/item8.svg'} className="h-5" alt={lang.header.PRODUCT_8} width={20} height={20}/> <p className="truncate">{lang.header.PRODUCT_8}</p>
                            </div>
                            <div className="flex gap-3 text-brown-1 hover:text-blue-1 text-sm cursor-pointer">
                                <Image src={'/menuItem/item9.svg'} className="h-5" alt={lang.header.PRODUCT_9} width={20} height={20}/> <p className="truncate">{lang.header.PRODUCT_9}</p>
                            </div>
                            <div className="flex gap-3 text-brown-1 hover:text-blue-1 text-sm cursor-pointer">
                                <Image src={'/menuItem/item10.svg'} className="h-5" alt={lang.header.PRODUCT_10} width={20} height={20}/> <p className="truncate">{lang.header.PRODUCT_10}</p>
                            </div>
                            <div className="flex gap-3 text-brown-1 hover:text-blue-1 text-sm cursor-pointer">
                                <Image src={'/menuItem/item11.svg'} className="h-5" alt={lang.header.PRODUCT_11} width={20} height={20}/> <p className="truncate">{lang.header.PRODUCT_11}</p>
                            </div>
                            <div className="flex gap-3 text-brown-1 hover:text-blue-1 text-sm cursor-pointer">
                                <Image src={'/menuItem/item12.svg'} className="h-5" alt={lang.header.PRODUCT_12} width={20} height={20}/> <p className="truncate">{lang.header.PRODUCT_12}</p>
                            </div>
                            <div className="flex gap-3 text-brown-1 hover:text-blue-1 text-sm cursor-pointer">
                                <Image src={'/menuItem/item13.svg'} className="h-5" alt={lang.header.PRODUCT_13} width={20} height={20}/> <p className="truncate">{lang.header.PRODUCT_13}</p>
                            </div>
                            <div className="flex gap-3 text-brown-1 hover:text-blue-1 text-sm cursor-pointer">
                                <Image src={'/menuItem/item14.svg'} className="h-5" alt={lang.header.PRODUCT_14} width={20} height={20}/> <p className="truncate">{lang.header.PRODUCT_14}</p>
                            </div>
                        </div>
                    </div>
                    <p className="cursor-pointer text-brown-1 text-left flex justify-between" onClick={() => setOpenService(!openService)}>{lang.header.NEWS}
                        {
                            openService ? (
                                <PiMinus className="w-5 my-auto h-5 transition-transform duration-300" />
                            ) : (
                                <PiPlus className="w-5 my-auto h-5 transition-transform duration-300" />
                            )
                        }
                    </p>
                    <div className={`transition-all duration-300 overflow-hidden min-h-[40px] ${openService ? "max-h-[40px] -my-2" : "!max-h-0 !min-h-0 -my-2"}`}>
                        <div className="w-full min-h-[40px] bg-gray-100 flex flex-col gap-3 p-3">
                            <p className="text-brown-1 text-sm cursor-pointer hover:text-blue-1">{lang.header.NEWS_ITEM_1}</p>
                            {/* <p className="text-brown-1 text-sm cursor-pointer hover:text-blue-1">Download</p> */}
                            {/* <p className="text-brown-1 text-sm cursor-pointer hover:text-blue-1">Videos</p>
                            <p className="text-brown-1 text-sm cursor-pointer hover:text-blue-1">RFQ Forms</p> */}
                        </div>
                    </div>
                    <p className='text-white font-bold text-sm h-fit w-full rounded px-4 py-2 mt-2 bg-blue-1 text-nowrap text-center uppercase'>{lang.header.CONTACT}</p>
                </nav>
            </div>
        </div>
    );
}
