import { PRODUCTS } from "@/utils/constants";
import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ContactUs from "@/components/common/ContactUs";
import Calculator from "@/components/Home/Calculator";
import Reveal from "@/components/common/Reveal";

import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: `${product.title} | Lending Bridge`,
    description: product.content,
    robots: "INDEX, FOLLOW",
    alternates: {
      canonical: `https://www.lendingbridge.co.uk/products/${product.slug}`,
    },
    openGraph: {
      title: product.title,
      description: product.content,
      images: [
        {
          url: `https://www.lendingbridge.co.uk${product.img}`,
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.content,
      images: [`https://www.lendingbridge.co.uk${product.img}`],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return notFound();

  return (
    <>
      <Navbar />
      <section className="py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
          <div className="w-full lg:w-1/2 relative aspect-square">
            <Image src={product.img} alt={product.title} fill className="object-contain rounded-2xl shadow-md" />
          </div>
          <div className="w-full lg:w-1/2 space-y-6">
            <Reveal>
              <h1 className="text-4xl font-bold text-gray-900">{product.title}</h1>
            </Reveal>
            <Reveal>
              <p className="text-gray-700 leading-relaxed">{product.content}</p>
            </Reveal>
            <Reveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {product.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
                    <Image src={highlight.img} alt={highlight.title} width={40} height={40} className="object-contain" />
                    <span className="text-gray-600">{highlight.title}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Calculator />
      <ContactUs />
      <Footer />
    </>
  );
}
