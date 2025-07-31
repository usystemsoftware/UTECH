import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import metaData from "@/data/MetaData";

const MetaSetter = () => {
  const { pathname } = useLocation();
  const meta = metaData[pathname] || {};

  return (
    <Helmet>
      <title>{meta.title || "Software Engineering | U Tech"}</title>
      <meta
        name="description"
        content={meta.description || "We provide expert software engineering, IoT Product Development and IT Consultancy services."}
      />
      <meta name="keywords" content={meta.keywords || "software, IoT, product engineering, consultancy"} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="U Tech" />
      <link rel="canonical" href={meta.canonical || "https://usystem.software"} />

      {/* Open Graph */}
      <meta property="og:title" content={meta.ogTitle || meta.title} />
      <meta property="og:description" content={meta.ogDescription || meta.description} />
      <meta property="og:image" content={meta.ogImage || "https://usystem.software/thumbnil.png"} />
      <meta property="og:url" content={meta.canonical || "https://usystem.software"} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.twitterTitle || meta.title} />
      <meta name="twitter:description" content={meta.twitterDescription || meta.description} />
      <meta name="twitter:image" content={meta.twitterImage || "https://usystem.software/thumbnil.png"} />
    </Helmet>
  );
};

export default MetaSetter;
