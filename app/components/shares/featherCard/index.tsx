import { ReactNode } from "react";
import { FaQuoteLeft } from "react-icons/fa";

interface FeatureCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    active?: boolean;
    bgColor?: string;
}

export default function FeatureCard({
    icon,
    title,
    description,
    active,
    bgColor
}: FeatureCardProps) {
    return (
        <div
            className={`flex flex-col justify-between p-8 pb-28 rounded-lg relative border transition-all duration-300
                ${
                    active
                        ? `${bgColor} text-white border-blue-600 shadow-md`
                        : `${bgColor} text-gray-700 border-gray-200 hover:shadow-md`
                }`
            }
        >
            <div className="flex flex-col items-center text-center gap-4">
                <div className={`${active ? "text-white" : "text-blue-600"} text-3xl`}>
                    {icon}
                </div>
                <h3
                    className={`text-sm font-poppins font-semibold ${active ? "text-white" : "text-gray-900"
                        }`}
                >
                    {title}
                </h3>
                <p className="text-sm font-poppins leading-relaxed">{description}</p>
            </div>

            <div
                className={`text-5xl mt-6 opacity-20 absolute bottom-3 right-3 ${active ? "text-white" : "text-blue-600"
                    } text-center`}
            >
                <FaQuoteLeft/>
            </div>
        </div>
    );
}
