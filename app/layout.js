import { Anek_Telugu, Martel_Sans, Open_Sans, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Effect from "@/app/effect"
const calSans = localFont({
  src: "./fonts/CalSans-Regular.ttf",
  variable: "--font-cal-sans",
  weight: "400",
});

const anekTelugu = Anek_Telugu({
  variable: "--font-anek-telugu",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const martelSans = Martel_Sans({
  variable: "--font-martel-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});



export const metadata = {
  title: "PranayaDixshetha",
  description: "Turning ideas into scalable, user-friendly web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        
        className={` 
          ${anekTelugu.variable} 
          ${martelSans.variable} 
          ${openSans.variable} 
          ${poppins.variable}
          ${calSans.variable}
           antialiased`}
      >
        <Effect />
            {children }
      </body>
    </html>
  );
}

