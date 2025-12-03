import { Metadata } from "next";
import React, { Suspense } from 'react'

export const metadata: Metadata = {
  title: "Brokers & Intermediaries | Lending Bridge - Partner With Us",
  description:
    "Partner with Lending Bridge as a broker or intermediary. Access exclusive resources, competitive fees, and expert support for your bridging finance clients.",
  alternates: {
    canonical: "https://www.lendingbridge.co.uk/intermediaries",
  },
  openGraph: {
    title: "Brokers & Intermediaries | Lending Bridge - Partner With Us",
    description:
      "Partner with Lending Bridge as a broker or intermediary. Access exclusive resources, competitive fees, and expert support for your bridging finance clients.",
    url: "https://www.lendingbridge.co.uk/intermediaries",
    type: "website",
    siteName: "Lending Bridge",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brokers & Intermediaries | Lending Bridge",
    description:
      "Partner with Lending Bridge as a broker or intermediary. Access exclusive resources, competitive fees, and expert support.",
  },
};

const IntermediariesLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <Suspense>
        {children}
    </Suspense>
  )
}

export default IntermediariesLayout