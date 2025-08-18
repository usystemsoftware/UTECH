export const shareMetaData = async (req, res) => {
  const { slug } = req.params;
  const data = metaData[slug];

  if (!data) {
    return res.status(404).send("Not Found");
  }

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${data.title}</title>

      <!-- Basic Meta -->
      <meta name="title" content="${data.title}" />
      <meta name="description" content="${data.description}" />
      <meta name="keywords" content="${data.keywords}" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="${data.url}" />

      <!-- Open Graph (Facebook / LinkedIn) -->
      <meta property="og:title" content="${data.title}" />
      <meta property="og:description" content="${data.description}" />
      <meta property="og:image" content="${data.image}" />
      <meta property="og:image:secure_url" content="${data.image}" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="627" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:alt" content="${data.title}" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="${data.url}" />
      <meta property="og:site_name" content="U Tech" />

      <!-- Article Metadata -->
      <meta property="article:published_time" content="2025-08-01T12:00:00Z" />
      <meta property="article:author" content="U Tech" />

      <!-- Twitter -->
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="${data.title}" />
      <meta name="twitter:description" content="${data.description}" />
      <meta name="twitter:image" content="${data.image}" />
      <meta name="twitter:site" content="@U_Tech" />
      <meta name="twitter:creator" content="@U_Tech" />

      <!-- Structured Data (JSON-LD) -->
      <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "${data.title}",
        "description": "${data.description}",
        "url": "${data.url}",
        "image": {
          "@type": "ImageObject",
          "url": "${data.image}",
          "width": 1200,
          "height": 627
        },
        "publisher": {
          "@type": "Organization",
          "name": "U Tech",
          "logo": {
            "@type": "ImageObject",
            "url": "https://usystem.software/logo.png"
          }
        }
      }
      </script>

      <!-- Favicon -->
      <link rel="icon" href="https://usystem.software/favicon.ico" type="image/x-icon" />
    </head>
    <body>
      <script>
        window.location.replace("${data.url}");
      </script>
    </body>
    </html>
  `;

  res.send(html);
};
