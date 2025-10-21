"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { PiMinus, PiPlus } from "react-icons/pi";
import Image from 'next/image';

export default function RightSidebarMobile() {
    const [open, setOpen] = useState(false);
    const [openProduct, setOpenProduct] = useState(false);
    const [openService, setOpenService] = useState(false);

    return (
        <div className="xl:hidden my-auto">
            {/* Nút mở menu */}
            <button
                onClick={() => setOpen(true)}
                className="rounded-lg cursor-pointer xl:hidden my-auto h-fit p-2"
            >
                <Menu size={24} />
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
                    <p className="cursor-pointer text-brown-1 text-left">Home</p>
                    <p className="cursor-pointer text-brown-1 text-left flex justify-between" onClick={() => setOpenProduct(!openProduct)}>Products
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
                                <Image src={'/menuItem/item1.svg'} className="h-5" alt="item1" width={20} height={20}/> <p className="truncate">Wedge Wire Screen Tube</p>
                            </div>
                            <div className="flex gap-3 text-brown-1 hover:text-blue-1 text-sm cursor-pointer">
                                <Image src={'/menuItem/item2.svg'} className="h-5" alt="item1" width={20} height={20}/> <p className="truncate">Wedge Wire Screen Panels</p>
                            </div>
                            <div className="flex gap-3 text-brown-1 hover:text-blue-1 text-sm cursor-pointer">
                                <Image src={'/menuItem/item3.svg'} className="h-5" alt="item1" width={20} height={20}/> <p className="truncate">Wedge Wire Filter Element</p>
                            </div>
                            <div className="flex gap-3 text-brown-1 hover:text-blue-1 text-sm cursor-pointer">
                                <Image src={'/menuItem/item4.svg'} className="h-5" alt="item1" width={20} height={20}/> <p className="truncate">Wedge Wire Screen Cylinder</p>
                            </div>
                            <div className="flex gap-3 text-brown-1 hover:text-blue-1 text-sm cursor-pointer">
                                <Image src={'/menuItem/item5.svg'} className="h-5" alt="item1" width={20} height={20}/> <p className="truncate">Wedge Wire Screen Cylinder</p>
                            </div>
                            <div className="flex gap-3 text-brown-1 hover:text-blue-1 text-sm cursor-pointer">
                                <Image src={'/menuItem/item6.svg'} className="h-5" alt="item1" width={20} height={20}/> <p className="truncate">Rotary Drum Screens</p>
                            </div>
                            <div className="flex gap-3 text-brown-1 hover:text-blue-1 text-sm cursor-pointer">
                                <Image src={'/menuItem/item7.svg'} className="h-5" alt="item1" width={20} height={20}/> <p className="truncate">Intake Screens</p>
                            </div>
                            <div className="flex gap-3 text-brown-1 hover:text-blue-1 text-sm cursor-pointer">
                                <Image src={'/menuItem/item8.svg'} className="h-5" alt="item1" width={20} height={20}/> <p className="truncate">Wedge Wire Filter Nozzle</p>
                            </div>
                            <div className="flex gap-3 text-brown-1 hover:text-blue-1 text-sm cursor-pointer">
                                <Image src={'/menuItem/item9.svg'} className="h-5" alt="item1" width={20} height={20}/> <p className="truncate">Wedge Wire Lateral Assemblies</p>
                            </div>
                            <div className="flex gap-3 text-brown-1 hover:text-blue-1 text-sm cursor-pointer">
                                <Image src={'/menuItem/item10.svg'} className="h-5" alt="item1" width={20} height={20}/> <p className="truncate">Resin Trap</p>
                            </div>
                            <div className="flex gap-3 text-brown-1 hover:text-blue-1 text-sm cursor-pointer">
                                <Image src={'/menuItem/item11.svg'} className="h-5" alt="item1" width={20} height={20}/> <p className="truncate">Internals Support Grid</p>
                            </div>
                            <div className="flex gap-3 text-brown-1 hover:text-blue-1 text-sm cursor-pointer">
                                <Image src={'/menuItem/item12.svg'} className="h-5" alt="item1" width={20} height={20}/> <p className="truncate">Water Well Screens</p>
                            </div>
                            <div className="flex gap-3 text-brown-1 hover:text-blue-1 text-sm cursor-pointer">
                                <Image src={'/menuItem/item13.svg'} className="h-5" alt="item1" width={20} height={20}/> <p className="truncate">Sieve Bends</p>
                            </div>
                            <div className="flex gap-3 text-brown-1 hover:text-blue-1 text-sm cursor-pointer">
                                <Image src={'/menuItem/item14.svg'} className="h-5" alt="item1" width={20} height={20}/> <p className="truncate">Mining Screen</p>
                            </div>
                        </div>
                    </div>
                    <p className="cursor-pointer text-brown-1 text-left flex justify-between" onClick={() => setOpenService(!openService)}>Services
                        {
                            openService ? (
                                <PiMinus className="w-5 my-auto h-5 transition-transform duration-300" />
                            ) : (
                                <PiPlus className="w-5 my-auto h-5 transition-transform duration-300" />
                            )
                        }
                    </p>
                    <div className={`transition-all duration-300 overflow-hidden min-h-[140px] ${openService ? "max-h-[140px] -my-2" : "!max-h-0 !min-h-0 -my-2"}`}>
                        <div className="w-full min-h-[140px] bg-gray-100 flex flex-col gap-3 p-3">
                            <p className="text-brown-1 text-sm cursor-pointer hover:text-blue-1">Technology</p>
                            <p className="text-brown-1 text-sm cursor-pointer hover:text-blue-1">Download</p>
                            <p className="text-brown-1 text-sm cursor-pointer hover:text-blue-1">Videos</p>
                            <p className="text-brown-1 text-sm cursor-pointer hover:text-blue-1">RFQ Forms</p>
                        </div>
                    </div>
                    <p className='text-white font-bold text-sm h-fit w-full rounded px-4 py-2 mt-2 bg-blue-1 text-nowrap text-center'>CONTACT</p>
                </nav>
            </div>
        </div>
    );
}
