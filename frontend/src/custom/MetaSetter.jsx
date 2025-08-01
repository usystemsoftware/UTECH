import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { metaData } from "@/data/metaData";

const normalizePath = (path) => path.replace(/\/+$/, ""); // Remove trailing slash

const MetaSetter = () => {
  const { pathname } = useLocation();
  const [meta, setMeta] = useState(null);

  useEffect(() => {
    const getRouteMeta = (path) => {
      const cleanPath = normalizePath(path);
      for (const section in metaData) {
        const found = metaData[section].find((item) => {
          try {
            const url = new URL(item.canonical, window.location.origin);
            return normalizePath(url.pathname) === cleanPath;
          } catch (err) {
            console.error("Invalid canonical URL:", item.canonical);
            return false;
          }
        });
        if (found) return found;
      }
      return null;
    };

    setMeta(getRouteMeta(pathname));
  }, [pathname]);

  if (!meta) return null;

  const {
    title = "U Tech | Software Engineering & IT Solutions",
    description = "Expert software engineering, IoT, and digital transformation services by U Tech.",
    keywords = "software, IoT, web, mobile, consulting",
    canonical,
    thumbnail = "https://usystem.software/thumbnil.png",
    breadcrumbs = [],
  } = meta;

  const resolvedCanonical = canonical || `${window.location.origin}${pathname}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: crumb.href,
    })),
  };
  // console.log("meta-----", meta);

  return (
    <Helmet key={pathname}>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="U Tech" />
      <link rel="canonical" href={canonical} />

      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {canonical && <meta property="og:url" content={resolvedCanonical} />}
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content={`https://usystem.software/${thumbnail}`}
      />
      <meta property="og:locale" content="en_US" />

      {/* <!-- Optional: Image specific properties --> */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="U Technology" />
      <meta name="twitter:creator" content="U Technology" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={`https://usystem.software/${thumbnail}`}
      />

      {breadcrumbs.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbJsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default MetaSetter;
