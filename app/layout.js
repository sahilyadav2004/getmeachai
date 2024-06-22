import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get me a Chai",
  description: "This website is a crowdfunding platform for chai lovers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionWrapper>
          <Navbar />
          <div className="min-h-[82vh] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white">
            <div class="absolute top-0 z-[-2] h-screen w-screen "></div>
            {children}
          </div>

          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
