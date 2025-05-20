import React from "react";
import type { Metadata } from "next";
import { siteMetaData } from "@/lib/siteMetaData";
import AboutMainPage from "./_components/AboutMainPage";

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteMetaData.title}`,
    default: "About Page",
  },
  description: siteMetaData.description,
  openGraph: {
    title: siteMetaData.title,
    description: siteMetaData.description,
    url: siteMetaData.siteUrl,
    siteName: siteMetaData.title,
    images: [siteMetaData.socialBanner],
    locale: siteMetaData.locale,
    type: "website",
  }, // seo için bu openGrap site lkinkini bir yere gönderdiğmizde resim olarak images gelecek
  // // ve açıklamalar bizim yazdığımız değerler olacak
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true, //indexlenebilir
      follow: true, //sayfa üzerindeki linklere izin verir
      noimageindex: false, // false izin verir resimlerin indexlenmesine, true yaparsak izin vermez
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetaData.title,
    images: [siteMetaData.socialBanner],
  },
};

const jsonld = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, facere.",
};

const AboutPage = () => {
  return (
    <div>
      <script
        type="application/json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld) }}
      ></script>
      <AboutMainPage />
    </div>
  );
};

export default AboutPage;
