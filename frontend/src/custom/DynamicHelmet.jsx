import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { metaData } from "@/data/MetaData";

// Detect if local
const isLocal =
  typeof window !== "undefined" && window.location.hostname === "localhost";

// Define base URL and image URL
const baseUrl = isLocal ? "http://localhost:5173" : "https://usystem.software";
const baseImageUrl = baseUrl;

const DynamicHelmet = () => {
  const location = useLocation();
  const [currentMeta, setCurrentMeta] = useState(null);

  useEffect(() => {
    const findMetaData = () => {
      // Combine all metadata groups
      const allMetaData = [
        ...metaData.industries,
        ...metaData.services,
        ...metaData.solutions,
        ...metaData.company,
      ];

      // Full current URL
      const currentUrl = `${baseUrl}${location.pathname}`;

      // Find exact match
      const exactMatch = allMetaData.find(
        (item) => item.canonical === currentUrl
      );
      if (exactMatch) return exactMatch;

      // Find partial match
      const partialMatch = allMetaData.find((item) =>
        currentUrl.startsWith(item.canonical)
      );
      if (partialMatch) return partialMatch;

      // Default metadata fallback
      return {
        title: "U Tech - Innovative Technology Solutions",
        description:
          "U Tech provides cutting-edge technology solutions for various industries.",
        keywords: "technology solutions, software development, U Tech",
        canonical: currentUrl,
        thumbnail: "thumbnil.png",
        breadcrumbs: [
          { label: "Home", href: baseUrl },
          {
            label: location.pathname.split("/")[1] || "Page",
            href: currentUrl,
          },
        ],
      };
    };

    setCurrentMeta(findMetaData());
  }, [location.pathname]);

  if (!currentMeta) return null;

  // Clean thumbnail path to avoid double slashes
  const cleanThumbnailPath = currentMeta.thumbnail.replace(/^\/+/, "");
  const fullImageUrl = `${baseImageUrl}/${cleanThumbnailPath}`;

  return (
    <Helmet>
      {/* Basic Meta */}
      <title key="title">{currentMeta.title}</title>
      <meta
        key="description"
        name="description"
        content={currentMeta.description}
      />
      <meta key="keywords" name="keywords" content={currentMeta.keywords} />
      <link key="canonical" rel="canonical" href={currentMeta.canonical} />

      {/* Open Graph / Facebook */}
      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:url" property="og:url" content={currentMeta.canonical} />
      <meta
        key="og:title"
        property="og:title"
        content={currentMeta.title || "Software Development | U Technology"}
      />
      <meta
        key="og:description"
        property="og:description"
        content={currentMeta.description}
      />
      <meta key="og:image" property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
      <meta key="twitter:url" name="twitter:url" content={currentMeta.canonical} />
      <meta
        key="twitter:title"
        name="twitter:title"
        content={currentMeta.title || "Software Development | U Technology"}
      />
      <meta
        key="twitter:description"
        name="twitter:description"
        content={currentMeta.description}
      />
      <meta key="twitter:image" name="twitter:image" content={fullImageUrl} />
    </Helmet>
  );
};

export default DynamicHelmet;
