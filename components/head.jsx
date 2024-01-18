import React from "react";
import NextHead from "next/head";
import { usePathname } from 'next/navigation'

export default function SEOHead() {
  const logo = "/assets/Fb-cover-banner.webp";
  const favicon = "/favicon.ico";
  const params = usePathname();
  let title =
    "Join the Entrepreneurial Revolution , Launch Your Online E-commerce Store In 60 Seconds";

  switch(params) {
    case '/':
      title = "Login | LaunchMyStore"
      break;
    case '/signup':
      title = "Start 7 Days Free Trial | LaunchMyStore "
      break;
      case '/forgot':
        title = "Forgot Password | LaunchMyStore"
        break;
    default:
      title = "Join the Entrepreneurial Revolution , Launch Your Online E-commerce Store In 60 Seconds";
  }


  const description =
    "Join the Entrepreneurial Revolution , Launch Your Online E-commerce Store In 60 Seconds";

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