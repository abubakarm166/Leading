import ContactUs from "@/components/common/ContactUs";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Calculator from "@/components/Home/Calculator";
import ProductPageClient from "@/components/products/ProductPageClient";
import { PRODUCTS } from "@/utils/constants";
import { notFound } from "next/navigation";
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
      title: "Product Not Found | Lending Bridge",
      description: "This product could not be found.",
    };
  }

  return {
    title: product.metadata.title,
    description: product.metadata.description,
    robots: "INDEX, FOLLOW",
    alternates: {
      canonical: `https://www.lendingbridge.co.uk/products/${product.slug}`,
    },
    openGraph: {
      title: product.metadata.title,
      description: product.metadata.description,
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
      title: product.metadata.title,
      description: product.metadata.description,
      images: [`https://www.lendingbridge.co.uk${product.img}`],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) return notFound();

  return (
    <main className="bg-primary-bg">
      <Navbar />
      <ProductPageClient productSlug={slug} />
      <Calculator />
      <ContactUs />
      <Footer />
    </main>
  );
}
