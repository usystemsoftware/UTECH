import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { metaData } from "../data/metaData"

export default function DynamicHelmet() {
  const location = useLocation();

  // Extract slug (last part of pathname)
  const pathname = location.pathname;
  const slug = pathname.split("/").filter(Boolean).pop() || "/";
  // Match metadata object (fallback to "/")
  const data = metaData[slug] || metaData["/"];
  return (
    <Helmet>
      {/* Standard SEO */}
      <title>{data.title}</title>
      <meta name="description" content={data.description} />

      {/* OpenGraph for LinkedIn / Facebook */}
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />
      <meta property="og:image" content={data.image} />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:type" content="website" />

      {/* Twitter cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={data.title} />
      <meta name="twitter:description" content={data.description} />
      <meta name="twitter:image" content={data.image} />
    </Helmet>
  );
}
