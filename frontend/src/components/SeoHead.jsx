import React from "react";
import { Helmet } from "react-helmet";

// Default Organization Schema
const defaultOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "U Tech (Umbarakar Technology)",
  "url": "https://usystem.software",
  "logo": "https://usystem.software/small-logo.png",
  "sameAs": [
    "https://in.linkedin.com/company/umbarkar-technology-india-pvt-ltd",
    "https://www.facebook.com/AryaSoft1",
    "https://twitter.com/utech",
    "https://www.instagram.com/usystem_software"
  ],
  "description":
    "U Tech (Umbarakar Technology) is a leading software development and IT consultancy company providing IoT, product engineering, and enterprise solutions.",
  "foundingDate": "2023",
  "founder": { "@type": "Person", "name": "Rajesh Umbarakar" },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "India",
    "addressCountry": "IN"
  }
};

// Default Website Schema
const defaultWebsiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "U Tech",
  "url": "https://usystem.software",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://usystem.software/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// Default Services Schema
const defaultServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType":
    "Custom Software Development, IoT Solutions, IT Consultancy",
  "provider": {
    "@type": "Organization",
    "name": "U Tech (Umbarakar Technology)",
    "url": "https://usystem.software",
    "logo": "https://usystem.software/small-logo.png"
  },
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "description":
    "U Tech provides scalable custom software development, IoT product engineering, AI automation, and IT consultancy services for startups and enterprises."
};

export default function SeoHead({
  title,
  description,
  url,
  image,
  organizationSchema = defaultOrganizationSchema,
  breadcrumbSchema = null,
  websiteSchema = defaultWebsiteSchema,
  serviceSchema = defaultServiceSchema
}) {
  const defaultImage = "https://usystem.software/default-share.png";
  const seoImage = image || defaultImage;

  return (
    <Helmet>
      {/* Basic Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="U Tech, Umbarakar Technology, custom software development, IoT development, IT consultancy, AI automation, digital transformation, web app development, enterprise solutions"
      />
      <meta name="robots" content="index, follow" />
      {url && <link rel="canonical" href={url} />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={seoImage} />

      {/* ✅ TOP LEVEL JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}

      {/* Google Analytics */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-ET6TXFFZQH"
      ></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ET6TXFFZQH');
        `}
      </script>
    </Helmet>
  );
}
