"use client";
import Image from 'next/image';
import { useAppSelector } from '../redux/hook';
import { translations } from '../services/languages';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Products() {
    const { locale } = useAppSelector(storage => storage.locale);

    const lang = translations[locale];

    return <>
        <div className="relative w-full h-[50px] flex items-center py-8 bg-blue-3">
            <div className="flex items-center gap-2 text-sm text-white w-[95vw] mx-auto font-medium">
                <Link href="/" className="text-white text-[16px] max-sm:text-sm font-poppins transition-colors hover:underline">
                    Home
                </Link>
                <ChevronRight size={14} />
                <span className="text-white text-[16px] max-sm:text-sm font-poppins">Products</span>
            </div>
        </div>
        <div className='w-full h-full flex py-5'>
            <div className='w-[95dvw] grid grid-cols-4 max-sm:grid-cols-2 max-xl:grid-cols-3 gap-5 max-sm:gap-3 mx-auto'>
                <div className='flex flex-col h-auto col-span-1 cursor-pointer'>
                    <div className='flex-1 overflow-hidden'>
                        <Image src={'/products/product9.webp'} className='w-full h-auto will-change-transform transform transition-transform duration-500 ease-\[cubic-bezier\(0\.25,0\.1,0\.25,1\)\] hover:scale-110' alt={lang.product.PRODUCT_1} width={444} height={444}/>
                    </div>
                    <div className='min-h-[70px] flex gap-2 justify-center items-center bg-gray-100 px-3'>
                        <Image src={'/menuItem/item1.svg'} alt='item1' width={15} height={15}/><p className='text-brown-1 font-poppins text-lg font-semibold max-lg:text-sm'>{lang.product.PRODUCT_1}</p>
                    </div>
                </div>
                <div className='flex flex-col h-auto col-span-1 cursor-pointer'>
                    <div className='flex-1 overflow-hidden'>
                        <Image src={'/products/product10.webp'} className='w-full h-auto will-change-transform transform transition-transform duration-500 ease-\[cubic-bezier\(0\.25,0\.1,0\.25,1\)\] hover:scale-110' alt={lang.product.PRODUCT_2} width={444} height={444}/>
                    </div>
                    <div className='min-h-[70px] flex gap-2 justify-center items-center bg-gray-100 px-3'>
                        <Image src={'/menuItem/item2.svg'} className='max-lg:w-[50px]' alt='item1' width={90} height={90}/><p className='text-brown-1 font-poppins text-lg font-semibold max-lg:text-sm'>{lang.product.PRODUCT_2}</p>
                    </div>
                </div>
                <div className='flex flex-col h-auto col-span-1 cursor-pointer'>
                    <div className='flex-1 overflow-hidden'>
                        <Image src={'/products/product15.webp'} className='w-full h-auto will-change-transform transform transition-transform duration-500 ease-\[cubic-bezier\(0\.25,0\.1,0\.25,1\)\] hover:scale-110' alt={lang.product.PRODUCT_3} width={444} height={444}/>
                    </div>
                    <div className='min-h-[70px] flex gap-2 justify-center items-center bg-gray-100 px-3'>
                        <Image src={'/menuItem/item3.svg'} alt='item1' width={20} height={20}/><p className='text-brown-1 font-poppins text-lg font-semibold max-lg:text-sm'>{lang.product.PRODUCT_3}</p>
                    </div>
                </div>
                <div className='flex flex-col h-auto col-span-1 cursor-pointer'>
                    <div className='flex-1 overflow-hidden'>
                        <Image src={'/products/product16.webp'} className='w-full h-auto will-change-transform transform transition-transform duration-500 ease-\[cubic-bezier\(0\.25,0\.1,0\.25,1\)\] hover:scale-110' alt={lang.product.PRODUCT_4} width={444} height={444}/>
                    </div>
                    <div className='min-h-[70px] flex gap-2 justify-center items-center bg-gray-100 px-3'>
                        <Image src={'/menuItem/item4.svg'} alt='item1' width={20} height={20}/><p className='text-brown-1 font-poppins text-lg font-semibold max-lg:text-sm'>{lang.product.PRODUCT_4}</p>
                    </div>
                </div>
                <div className='flex flex-col h-auto col-span-1 cursor-pointer'>
                    <div className='flex-1 overflow-hidden'>
                        <Image src={'/products/product17.webp'} className='w-full h-auto will-change-transform transform transition-transform duration-500 ease-\[cubic-bezier\(0\.25,0\.1,0\.25,1\)\] hover:scale-110' alt={lang.product.PRODUCT_5} width={444} height={444}/>
                    </div>
                    <div className='min-h-[70px] flex gap-2 justify-center items-center bg-gray-100 px-3'>
                        <Image src={'/menuItem/item5.svg'} alt='item1' width={50} height={50}/><p className='text-brown-1 font-poppins text-lg font-semibold max-lg:text-sm'>{lang.product.PRODUCT_5}</p>
                    </div>
                </div>
                <div className='flex flex-col h-auto col-span-1 cursor-pointer'>
                    <div className='flex-1 overflow-hidden'>
                        <Image src={'/products/product18.webp'} className='w-full h-full will-change-transform transform transition-transform duration-500 ease-\[cubic-bezier\(0\.25,0\.1,0\.25,1\)\] hover:scale-110' alt={lang.product.PRODUCT_6} width={444} height={444}/>
                    </div>
                    <div className='min-h-[70px] flex gap-2 justify-center items-center bg-gray-100 px-3'>
                        <Image src={'/menuItem/item6.svg'} alt='item1' width={26} height={26}/><p className='text-brown-1 font-poppins text-lg font-semibold max-lg:text-sm'>{lang.product.PRODUCT_6}</p>
                    </div>
                </div>
                <div className='flex flex-col h-auto col-span-1 cursor-pointer'>
                    <div className='flex-1 overflow-hidden'>
                        <Image src={'/products/product19.webp'} className='w-full h-full will-change-transform transform transition-transform duration-500 ease-\[cubic-bezier\(0\.25,0\.1,0\.25,1\)\] hover:scale-110' alt={lang.product.PRODUCT_7} width={444} height={444}/>
                    </div>
                    <div className='min-h-[70px] flex gap-2 justify-center items-center bg-gray-100 px-3'>
                        <Image src={'/menuItem/item7.svg'} alt='item1' width={60} height={60}/><p className='text-brown-1 font-poppins text-lg font-semibold max-lg:text-sm'>{lang.product.PRODUCT_7}</p>
                    </div>
                </div>
                <div className='flex flex-col h-auto col-span-1 cursor-pointer'>
                    <div className='flex-1 overflow-hidden'>
                        <Image src={'/products/product20.webp'} className='w-full h-full will-change-transform transform transition-transform duration-500 ease-\[cubic-bezier\(0\.25,0\.1,0\.25,1\)\] hover:scale-110' alt={lang.product.PRODUCT_8} width={444} height={444}/>
                    </div>
                    <div className='min-h-[70px] flex gap-2 justify-center items-center bg-gray-100 px-3'>
                        <Image src={'/menuItem/item8.svg'} alt='item1' width={21} height={21}/><p className='text-brown-1 font-poppins text-lg font-semibold max-lg:text-sm'>{lang.product.PRODUCT_8}</p>
                    </div>
                </div>
                <div className='flex flex-col h-auto col-span-1 cursor-pointer'>
                    <div className='flex-1 overflow-hidden'>
                        <Image src={'/products/product21.webp'} className='w-full h-full will-change-transform transform transition-transform duration-500 ease-\[cubic-bezier\(0\.25,0\.1,0\.25,1\)\] hover:scale-110' alt={lang.product.PRODUCT_9} width={444} height={444}/>
                    </div>
                    <div className='min-h-[70px] flex gap-2 justify-center items-center bg-gray-100 px-3'>
                        <Image src={'/menuItem/item9.svg'} alt='item1' width={40} height={40}/><p className='text-brown-1 font-poppins text-lg font-semibold max-lg:text-sm'>{lang.product.PRODUCT_9}</p>
                    </div>
                </div>
                <div className='flex flex-col h-auto col-span-1 cursor-pointer'>
                    <div className='flex-1 overflow-hidden'>
                        <Image src={'/products/product22.webp'} className='w-full h-full will-change-transform transform transition-transform duration-500 ease-\[cubic-bezier\(0\.25,0\.1,0\.25,1\)\] hover:scale-110' alt={lang.product.PRODUCT_10} width={444} height={444}/>
                    </div>
                    <div className='min-h-[70px] flex gap-2 justify-center items-center bg-gray-100 px-3'>
                        <Image src={'/menuItem/item10.svg'} alt='item1' width={22} height={22}/><p className='text-brown-1 font-poppins text-lg font-semibold max-lg:text-sm'>{lang.product.PRODUCT_10}</p>
                    </div>
                </div>
                <div className='flex flex-col h-auto col-span-1 cursor-pointer'>
                    <div className='flex-1 overflow-hidden'>
                        <Image src={'/products/product14.webp'} className='w-full h-full will-change-transform transform transition-transform duration-500 ease-\[cubic-bezier\(0\.25,0\.1,0\.25,1\)\] hover:scale-110' alt={lang.product.PRODUCT_11} width={444} height={444}/>
                    </div>
                    <div className='min-h-[70px] flex gap-2 justify-center items-center bg-gray-100 px-3'>
                        <Image src={'/menuItem/item11.svg'} alt='item1' width={40} height={40}/><p className='text-brown-1 font-poppins text-lg font-semibold max-lg:text-sm'>{lang.product.PRODUCT_11}</p>
                    </div>
                </div>
                <div className='flex flex-col h-auto col-span-1 cursor-pointer'>
                    <div className='flex-1 overflow-hidden'>
                        <Image src={'/products/product23.webp'} className='w-full h-full will-change-transform transform transition-transform duration-500 ease-\[cubic-bezier\(0\.25,0\.1,0\.25,1\)\] hover:scale-110' alt={lang.product.PRODUCT_12} width={444} height={444}/>
                    </div>
                    <div className='min-h-[70px] flex gap-2 justify-center items-center bg-gray-100 px-3'>
                        <Image src={'/menuItem/item12.svg'} alt='item1' width={18} height={18}/><p className='text-brown-1 font-poppins text-lg font-semibold max-lg:text-sm'>{lang.product.PRODUCT_12}</p>
                    </div>
                </div>
                <div className='flex flex-col h-auto col-span-1 cursor-pointer'>
                    <div className='flex-1 overflow-hidden'>
                        <Image src={'/products/product23.webp'} className='w-full h-full will-change-transform transform transition-transform duration-500 ease-\[cubic-bezier\(0\.25,0\.1,0\.25,1\)\] hover:scale-110' alt={lang.product.PRODUCT_12} width={444} height={444}/>
                    </div>
                    <div className='min-h-[70px] flex gap-2 justify-center items-center bg-gray-100 px-3'>
                        <Image src={'/menuItem/item12.svg'} alt='item1' width={18} height={18}/><p className='text-brown-1 font-poppins text-lg font-semibold max-lg:text-sm'>{lang.product.PRODUCT_12}</p>
                    </div>
                </div>
                <div className='flex flex-col h-auto col-span-1 cursor-pointer'>
                    <div className='flex-1 overflow-hidden'>
                        <Image src={'/products/product24.webp'} className='w-full h-full will-change-transform transform transition-transform duration-500 ease-\[cubic-bezier\(0\.25,0\.1,0\.25,1\)\] hover:scale-110' alt={lang.product.PRODUCT_13} width={444} height={444}/>
                    </div>
                    <div className='min-h-[70px] flex gap-2 justify-center items-center bg-gray-100 px-3'>
                        <Image src={'/menuItem/item13.svg'} alt='item1' width={40} height={40}/><p className='text-brown-1 font-poppins text-lg font-semibold max-lg:text-sm'>{lang.product.PRODUCT_13}</p>
                    </div>
                </div>
                <div className='flex flex-col h-auto col-span-1 cursor-pointer'>
                    <div className='flex-1 overflow-hidden'>
                        <Image src={'/products/product25.webp'} className='w-full h-full will-change-transform transform transition-transform duration-500 ease-\[cubic-bezier\(0\.25,0\.1,0\.25,1\)\] hover:scale-110' alt={lang.product.PRODUCT_14} width={444} height={444}/>
                    </div>
                    <div className='min-h-[70px] flex gap-2 justify-center items-center bg-gray-100 px-3'>
                        <Image src={'/menuItem/item14.svg'} alt='item1' width={26} height={26}/><p className='text-brown-1 font-poppins text-lg font-semibold max-lg:text-sm'>{lang.product.PRODUCT_14}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}