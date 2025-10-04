const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://usystem.software",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://usystem.software/blog",
    },
  ],
};

export default breadcrumbSchema;
