import MobileNav from "@/components/common/MobileNav";
import type { Metadata } from "next";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/zoom.css";
import { Geist, Geist_Mono, League_Spartan, Nunito_Sans } from "next/font/google";
import Script from "next/script";
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

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID?.trim();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${leagueSpartan.variable} ${nunitoSans.variable} antialiased`}
      >
        {GTM_ID ? (
          <>
            <Script id="gtm-loader" strategy="afterInteractive">
              {`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `}
            </Script>
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
                title="Google Tag Manager"
              />
            </noscript>
          </>
        ) : (
          <>
            {/* Fallback until NEXT_PUBLIC_GTM_ID is set — then manage GA4/Ads inside GTM */}
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-0D1MK5GB75"
              strategy="afterInteractive"
            />
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=AW-17576200661"
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-0D1MK5GB75');
              `}
            </Script>
            <Script id="gtag-init-second" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-17576200661');
              `}
            </Script>
          </>
        )}
        <Toaster position="bottom-center" />
        {children}
        <MobileNav />
      </body>
    </html>
  );
}
