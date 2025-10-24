import MobileNav from "@/components/common/MobileNav";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/zoom.css";
import { Geist, Geist_Mono, League_Spartan, Nunito_Sans } from "next/font/google";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import "react-calendar/dist/Calendar.css";
import { Toaster } from "react-hot-toast";
import "react-responsive-modal/styles.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${leagueSpartan.variable} ${nunitoSans.variable} antialiased`}
      >
        <Toaster position="bottom-center" />
        {children}
        <MobileNav />
      </body>
    </html>
  );
}
