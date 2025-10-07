import { metaData } from "../config/metaData.js"; // ✅ ESM import

export const shareMetaData = async (req, res) => {
  const { slug } = req.params;
  const data = metaData[slug] || metaData["/"];

  if (!data) {
    return res.status(404).send("Not Found");
  }

  const frontendUrl = data.url;
  const imageUrl = data.image;

  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${data.title}</title>

    <meta name="title" content="${data.title}" />
    <meta name="description" content="${data.description}" />
    <meta name="keywords" content="${data.keywords || ''}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${frontendUrl}" />

    <meta property="og:title" content="${data.title}" />
    <meta property="og:description" content="${data.description}" />
    <meta property="og:image" content="${imageUrl}" />
    <meta property="og:image:secure_url" content="${imageUrl}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="627" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${frontendUrl}" />
    <meta property="og:site_name" content="U Tech" />

    <meta property="article:published_time" content="${data.published || ''}" />
    <meta property="article:author" content="U Tech" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${data.title}" />
    <meta name="twitter:description" content="${data.description}" />
    <meta name="twitter:image" content="${imageUrl}" />
    <meta name="twitter:site" content="@U_Tech" />
    <meta name="twitter:creator" content="@U_Tech" />

    <script type="application/ld+json">
      ${JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": data.title,
        "description": data.description,
        "url": frontendUrl,
        "image": {
          "@type": "ImageObject",
          "url": imageUrl,
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
      })}
    </script>

    <link rel="icon" href="https://usystem.software/thumbnil.png" type="image/png" /> 

  </head>
  <body>
    <script>
      // Redirect users to frontend page
      window.location.replace("${frontendUrl}");
    </script>
  </body>
  </html>
  `;

  res.send(html);
};
