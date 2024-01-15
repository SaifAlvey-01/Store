import React from "react";
import NextHead from "next/head";

export default function SEOHead() {
  const logo = "/images/final_banner.webp";
  const favicon = "/images/favicon.ico";

  const title =
    "LaunchMyStore - Create & Grow Your Ecommerce Store Effortlessly With 7 Days Free Trial";

  const description =
    "Experience LaunchMyStore for free and Start a new business venture or expand an existing one. Gain access to more than just ecommerce software – leverage tools to efficiently manage every aspect of your enterprise";

  const keywords = "LaunchMyStore";

  return (
    <NextHead>
      <title key={"title"}>{title}</title>
      <link rel="apple-touch-icon" href={favicon} />
      <link
        rel="shortcut icon"
        href={favicon}
        type="image/x-icon"
        sizes="196x196"
      />
      <meta key={"description"} name="description" content={description} />
      <meta key={"keywords"} name="keywords" content={keywords} />
      <meta
        key={"viewport"}
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />

      <meta name="robots" content="index, follow" />

      {/* OG TAGS */}
      <meta key={"og:type"} property="og:type" content="website" />
      <meta
        key={"og:url"}
        property="og:url"
        content="https://launchmystore.io/"
      />
      <meta key={"og:title"} name="title" property="og:title" content={title} />
      <meta
        key={"og:description"}
        name="description"
        property="og:description"
        content={description}
      />
      <meta key={"og:image"} name="image" property="og:image" content={logo} />
      {/* OG TAGS */}

      {/* TWITTER TAGS */}
      <meta
        key={"twitter:title"}
        name="twitter:title"
        property="twitter:title"
        content={title}
      />
      <meta
        key={"twitter:description"}
        name="twitter:description"
        property="twitter:description"
        content={description}
      />
      <meta
        key={"twitter:image"}
        name="twitter:image"
        property="twitter:image"
        content={logo}
      />
      <meta
        key={"twitter:card"}
        name="twitter:card"
        property="twitter:card"
        content="summary_large_image"
      />
      {/* TWITTER TAGS */}

      {/* PWA primary color */}
      <meta
        key={"theme-color"}
        name="theme-color"
        property="theme-color"
        content={"#4162ff"}
      />
    </NextHead>
  );
}