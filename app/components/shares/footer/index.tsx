"use client";

import { useAppSelector } from '@/app/redux/hook';
import { translations } from '@/app/services/languages';
import Image from 'next/image';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebookF, FaYoutube } from 'react-icons/fa';
import { TfiLinkedin } from 'react-icons/tfi';
import Link from 'next/link';

export default function Footer() {
    const { locale } = useAppSelector(storage => storage.locale);
    
    const lang = translations[locale];

    return <>
        <div className='w-full flex bg-blue-3 py-5'>
            <div className='w-[75vw] max-xl:w-[95vw] flex flex-col mx-auto'>
                <div className='flex justify-between border-b-solid border-b-[1px] py-3 max-sm:py-0 max-sm:border-none border-b-white/50'>
                    <Link href="/" className='flex gap-2 cursor-pointer my-1'>
                        <Image src={"/logo/logo.svg"} className='max-sm:w-[25px] w-[30px]' width={45} height={95} alt='woodcraft' />
                        <div className='flex flex-col my-auto'>
                            <p className='font-cormorant font-semibold max-sm:text-2xl text-3xl leading-[26px] text-center text-white text-nowrap'>PHONG VĨNH</p>
                            <p className='font-montserrat max-sm:text-[9px] text-[11px] text-center text-white font-light text-nowrap'>WATER & WASTEWATER SOLUTIONS</p>
                        </div>
                    </Link>
                    <div className='flex gap-8 text-brown-1 h-full max-sm:hidden'>
                        <p className='cursor-pointer text-nowrap font-montserrat font-medium h-full flex flex-col justify-center mr-1 hover:underline text-white'>{lang.footer.PRODUCTS}</p>
                        <p className='cursor-pointer text-nowrap font-montserrat font-medium h-full flex flex-col justify-center mr-1 hover:underline text-white'>{lang.footer.NEWS}</p>
                        <Link href="/contact">
                            <p className='cursor-pointer text-nowrap font-montserrat font-medium h-full flex flex-col justify-center mr-1 hover:underline text-white'>{lang.footer.CONTACT}</p>
                        </Link>
                    </div>
                </div>
                <div className='flex justify-between gap-8 max-lg:flex-col mt-5'>
                    <div className='flex flex-col gap-6 justify-between'>
                        <p className='uppercase font-poppins text-white font-semibold w-[70%] max-sm:w-full text-xl'>{lang.footer.TITLE}</p>
                        <div className='flex gap-2'>
                            <p className='text-white font-poppins text-sm my-auto'>{lang.footer.FOLLOW_US}</p>
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
    </>
}