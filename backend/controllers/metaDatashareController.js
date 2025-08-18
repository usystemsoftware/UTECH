const { metaData } = require("../config/metaData");

exports.shareMetaData = async (req, res) => {
  const { slug } = req.params;
  const data = metaData[slug] || metaData["/"];

  if (!data) {
    return res.status(404).send("Metadata not found");
  }

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      <!-- Title & Basic Meta -->
      <title>${data.title}</title>
      <meta name="description" content="${data.description}" />
      <meta name="keywords" content="${data.keywords ? data.keywords.join(", ") : ""}" />
      <link rel="canonical" href="${data.canonical}" />

      <!-- Open Graph Meta (Facebook, LinkedIn, WhatsApp, etc.) -->
      <meta property="og:type" content="website" />
      <meta property="og:title" content="${data.title}" />
      <meta property="og:description" content="${data.description}" />
      <meta property="og:image" content="${data.thumbnail}" />
      <meta property="og:url" content="${data.url}" />
      <meta property="og:site_name" content="U Tech" />

      <!-- Twitter Card Meta -->
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="${data.title}" />
      <meta name="twitter:description" content="${data.description}" />
      <meta name="twitter:image" content="${data.thumbnail}" />

      <!-- Schema.org Structured Data -->
      <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "${data.title}",
        "description": "${data.description}",
        "url": "${data.url}",
        "keywords": "${data.keywords ? data.keywords.join(", ") : ""}",
        "image": {
          "@type": "ImageObject",
          "url": "${data.thumbnail}",
          "width": 1200,
          "height": 630
        },
        "publisher": {
          "@type": "Organization",
          "name": "U Tech",
          "logo": {
            "@type": "ImageObject",
            "url": "${process.env.FRONTENDURL}/logo.png"
          }
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            ${data.breadcrumbs
      ? data.breadcrumbs
        .map(
          (item, index) => `{
                "@type": "ListItem",
                "position": ${index + 1},
                "name": "${item.label}",
                "item": "${item.href}"
              }`
        )
        .join(",")
      : ""
    }
          ]
        }
      }
      </script>
    </head>
    <body>
      <h1>${data.title}</h1>
      <p>${data.description}</p>
    </body>
    </html>
  `;

  res.send(html);
};
