import { PRODUCTS } from "@/utils/constants";
import Image from "next/image";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ContactUs from "@/components/common/ContactUs";
import Calculator from "@/components/Home/Calculator";
import Reveal from "@/components/common/Reveal";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Products | Lending Bridge",
  description:
    "Explore our diverse range of bridging finance products designed to meet your needs, from residential to commercial properties.",
  robots: "INDEX, FOLLOW",
  alternates: {
    canonical: "https://www.lendingbridge.co.uk/products",
  },
  openGraph: {
    title: "Our Products | Lending Bridge",
    description:
      "Explore our diverse range of bridging finance products designed to meet your needs, from residential to commercial properties.",
    images: [
      {
        url: "https://www.lendingbridge.co.uk/svg/product-one.svg", // or a general image
        width: 1200,
        height: 630,
        alt: "Lending Bridge Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Products | Lending Bridge",
    description:
      "Explore our diverse range of bridging finance products designed to meet your needs, from residential to commercial properties.",
    images: ["https://www.lendingbridge.co.uk/svg/product-one.svg"],
  },
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <section className="py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Products</h1>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <Link key={product.id} href={`/products/${product.slug}`}>
                <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-[700px] flex flex-col justify-between">
                  <div>
                    <div className="relative aspect-square mb-4">
                      <Image src={product.img} alt={product.title} fill className="object-contain rounded-lg" />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h2>
                    <p className="text-gray-700 text-sm leading-relaxed">{product.content}</p>
                  </div>
                  <div>
                    <span className="text-primary font-medium">Read More →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Calculator />
      <ContactUs />
      <Footer />
    </>
  );
}
