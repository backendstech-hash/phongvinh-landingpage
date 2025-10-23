"use client";
import { ChevronRight, Mail, MapPin, Phone, Smartphone } from 'lucide-react';
import Link from 'next/link';
import './style.css';
import { useAppSelector } from '../redux/hook';
import { translations } from '../services/languages';
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { toast } from "sonner";
import { sendDiscordMessage } from '../services/discord';

export default function Contact() {
    const { locale } = useAppSelector(storage => storage.locale);
    const lang = translations[locale];
    const [message, setMessage] = useState("");
    const maxLength = 1000; // giới hạn ký tự

    // ✅ Định nghĩa schema với Yup
    const schema = yup.object({
        name: yup.string().required("Vui lòng nhập họ tên"),
        email: yup
            .string()
            .email("Email không hợp lệ")
            .required("Vui lòng nhập email"),
        message: yup
            .string()
            .required("Vui lòng nhập tin nhắn")
            .max(maxLength, "Tin nhắn không được vượt quá 500 ký tự"),
        phone: yup
            .string()
            .required("Vui lòng nhập số điện thoại kèm mã quốc gia (vd: +84912345678)")
            .test("is-valid-phone", "Số điện thoại không hợp lệ", (value) => {
                if (!value) return false;
                const phone = parsePhoneNumberFromString(value);
                return phone ? phone.isValid() : false;
            }),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: any) => {
        console.log("Form Data:", data);
        setMessage("");
        try {
            sendDiscordMessage(data);
            // alert("Đã gửi thành công!");
            toast.success(lang.contact.SEND_SUCCESS, {
                position: 'bottom-right',
                className: '!bg-blue-500 !text-white !border-none !text-[16px] !font-bold !font-poppins'
            })
            reset();
        } catch (e) {
            toast.error("Submitted successfully!", {
                position: 'bottom-right',
                className: '!bg-red-500 !text-white !border-none !text-[16px] !font-bold !font-poppins'
            })
        }
    };

    return <>
        <div className="relative w-full h-[50px] flex items-center py-8 bg-blue-3">
            <div className="flex items-center gap-2 text-sm text-white w-[75vw] max-xl:w-[95vw] mx-auto font-medium">
                <Link href="/" className="text-white text-[16px] max-sm:text-sm font-poppins transition-colors hover:underline">
                    {lang.contact.HOME}
                </Link>
                <ChevronRight size={14} />
                <span className="text-white text-[16px] max-sm:text-sm font-poppins">{lang.contact.CONTACT}</span>
            </div>
        </div>
        <div className='w-full bg-gray-100 py-11 max-lg:py-8 flex'>
            <div className='w-[75vw] max-xl:w-[95vw] mx-auto flex max-lg:flex-col gap-14'>
                <div className='flex flex-col gap-3 my-auto'>
                    <div className='flex relative'>
                        <div className="h--main">
                            <div className="h2-tit font-poppins mt-3 text-[34px] max-xl:text-2xl text-brown-1 font-bold">{lang.contact.TITLE}</div>
                        </div>
                    </div>
                    <p className='text-left font-poppins text-[16px] max-xl:text-sm text-brown-1'>{lang.contact.SUBTITLE}</p>
                </div>
            </div>
        </div>
        <div className='w-full bg-gray-100 pb-8 flex'>
            <div className='w-[75vw] max-xl:w-[95vw] mx-auto flex max-lg:flex-col max-lg:gap-10 justify-between'>
                <div className='flex flex-col gap-3 w-[50%] max-lg:w-[95vw]'>
                    <p className='text-lg max-lg:text-[16px] font-poppins font-semibold text-brown-1'>{lang.contact.EXPORTER_PAYEE}: Hebei Xunsuo Industech Co., Ltd</p>
                    <p className='text-lg max-lg:text-[16px] font-poppins font-semibold text-brown-1'>{lang.contact.MANUFACTURER}: Hebei Qiusuo Wire Mesh Products Co., Ltd.</p>
                    <div className="space-y-6 mt-3 text-gray-700">
                        {/* Address */}
                        <div className="flex items-start space-x-3">
                            <div className="bg-gray-300 p-3 rounded-md">
                                <MapPin className="w-6 h-6 text-gray-600" />
                            </div>
                            <div>
                            <p className="font-semibold font-poppins text-gray-800">{lang.contact.ADDREDD}</p>
                            <p className="text-[16px] font-poppins">
                                Industrial Development Zone, Anping, Hebei, China.
                            </p>
                            </div>
                        </div>

                        {/* Telephone */}
                        <div className="flex items-start space-x-3">
                            <div className="bg-gray-300 p-3 rounded-md">
                                <Phone className="w-6 h-6 text-gray-600" />
                            </div>
                            <div>
                            <p className="font-semibold font-poppins text-gray-800">{lang.contact.TELEPHONE}</p>
                            <p className="text-[16px] font-poppins">+86-318-5183833</p>
                            </div>
                        </div>

                        {/* Mobile */}
                        <div className="flex items-start space-x-3">
                            <div className="bg-gray-300 p-3 rounded-md">
                                <Smartphone className="w-6 h-6 text-gray-600" />
                            </div>
                            <div>
                            <p className="font-semibold text-gray-800">{lang.contact.MOBILE}</p>
                            <p className="text-[16px]">
                                +86-18703384586 <span className="text-gray-500">(WhatsApp & WeChat)</span>
                            </p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start space-x-3">
                            <div className="bg-gray-300 p-3 rounded-md">
                                <Mail className="w-6 h-6 text-gray-600" />
                            </div>
                            <div>
                            <p className="font-semibold font-poppins text-gray-800">E-mail</p>
                            <a
                                href="mailto:sales@wedgewire-screen.com"
                                className="text-blue-600 hover:underline font-poppins text-[16px]"
                            >
                                sales@wedgewire-screen.com
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex-1 max-lg:w-full mx-auto bg-gray-50 border border-blue-100 p-8 rounded-md shadow-sm">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{lang.contact.CONTACT_US}</h2>
                    <p className="italic text-gray-500 mb-6">
                        {lang.contact.CONTACT_TITLE}
                    </p>

                    <div className="space-y-6">
                        {/* Name */}
                        <div className="relative">
                            <input
                                {...register("name")}
                                type="text"
                                id="name"
                                placeholder=" "
                                className="peer font-poppins w-full border border-gray-300 rounded-sm px-3 pt-5 pb-2 text-sm
                                        placeholder-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                            />
                            <label
                                htmlFor="name"
                                className="absolute left-3 top-2.5 text-gray-500 text-sm transition-all
                                        peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                                        peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-500
                                        peer-[&:not(:placeholder-shown)]:top-1 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-blue-500"
                            >
                                {lang.contact.YOUR_NAME} <span className="text-red-500">*</span>
                            </label>
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                        </div>

                        {/* Email */}
                        <div className="relative">
                            <input
                                {...register("email")}
                                type="email"
                                id="email"
                                placeholder=" "
                                className="peer font-poppins w-full border border-gray-300 rounded-sm px-3 pt-5 pb-2 text-sm
                                        placeholder-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-3 top-2.5 text-gray-500 text-sm transition-all
                                        peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                                        peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-500
                                        peer-[&:not(:placeholder-shown)]:top-1 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-blue-500"
                            >
                                {lang.contact.YOUR_EMAIL} <span className="text-red-500">*</span>
                            </label>
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                        </div>

                        {/* Phone */}
                        <div className="relative">
                            <input
                                {...register("phone")}
                                type="tel"
                                id="phone"
                                placeholder=" "
                                className="peer font-poppins w-full border border-gray-300 rounded-sm px-3 pt-5 pb-2 text-sm
                                        placeholder-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                            />
                            <label
                                htmlFor="phone"
                                className="absolute left-3 top-2.5 text-gray-500 text-sm transition-all
                                        peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                                        peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-500
                                        peer-[&:not(:placeholder-shown)]:top-1 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-blue-500"
                            >
                                {lang.contact.COUNTRY_CODE_PHONE_NUMBER} <span className="text-red-500">*</span>
                            </label>
                            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                        </div>

                        {/* Message */}
                        <div className="relative">
                            <textarea
                                {...register("message")}
                                id="message"
                                placeholder=" "
                                rows={4}
                                onChange={(e) => setMessage(e.target.value)}
                                // value={message}
                                maxLength={maxLength}
                                className="peer font-poppins w-full border border-gray-300 rounded-sm px-3 pt-5 pb-2 text-sm resize-none
                                        placeholder-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                            ></textarea>
                            <label
                                htmlFor="message"
                                className="absolute pl-3 h-6 top-1 left-1 w-[98%] bg-white text-gray-500 text-sm transition-all
                                        peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                                        peer-focus:top-[1px] peer-focus:pt-1 peer-focus:text-xs peer-focus:text-blue-500
                                        peer-[&:not(:placeholder-shown)]:top-[1px] peer-[&:not(:placeholder-shown)]:pt-1 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-blue-500"
                            >
                                {lang.contact.MESSAGE} <span className="text-red-500">*</span>
                            </label>
                            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                            <div className="absolute bottom-2 right-1 text-xs text-gray-400">
                                {message.length}/{maxLength}
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            className="bg-blue-600 font-poppins uppercase text-white font-semibold px-6 py-1.5 rounded-lg hover:bg-blue-700 transition"
                        >
                            {lang.contact.SUBMIT}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>
}