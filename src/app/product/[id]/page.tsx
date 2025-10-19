import ContactUs from "@/components/common/ContactUs";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Calculator from "@/components/Home/Calculator";
import { PRODUCTS } from "@/utils/constants";
import { notFound } from "next/navigation";
import type { Metadata } from 'next';
import ProductPageClient from "./ProductPageClient";

type Props = {
  params: Promise<{ id: string }>
}

// Generate static params for all products
export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.slug,
  }));
}

// Generate SEO metadata dynamically
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { id } = await params
  const product = PRODUCTS.find((p) => p.slug === id)

  if (!product) {
    return {
      title: "Product Not Found | Lending Bridge",
      description: "This product could not be found.",
    }
  }

  return {
    title: `${product.title} | Lending Bridge`,
    description: product.content,
    robots: "INDEX, FOLLOW",
    alternates: {
      canonical: `https://www.lendingbridge.co.uk/product/${product.slug}`
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
  }
}

// Server Component
export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.slug === id);

  if (!product) return notFound();

  return (
    <main className="bg-primary-bg">
      <Navbar />
      <ProductPageClient productSlug={id} />
      <Calculator />
      <ContactUs />
      <Footer />
    </main>
  );
}
