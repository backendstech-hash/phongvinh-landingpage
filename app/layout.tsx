import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/shares/header";
import Providers from "./provider";
import Footer from "./components/shares/footer";
import { Toaster } from "@/components/ui/sonner";
import ChatBox from "./components/shares/chatBox";
import InitSocket from "./components/shares/initSocket";

// Import font bằng next/font/google
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-cormorant" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-montserrat" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: "Phong Vĩnh",
  description: "Water & wastewater solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${montserrat.variable} ${poppins.variable}`}>
        <Providers>
          <Header />
          {children}
          <Toaster/>
          <InitSocket/>
          <ChatBox/>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
