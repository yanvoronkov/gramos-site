// Генератор метатегов и Schema.org (JSON-LD) микроразметки
const siteConfig = require('../data/site');

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#039;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function generateMeta(page) {
  const title = page.metaTitle || page.title || siteConfig.defaultTitle;
  const desc = page.metaDesc || page.desc || siteConfig.defaultDesc;
  const path = page.path || '/';
  const url = `${siteConfig.domain}${path}`;
  const ogType = page.ogType || 'website';
  const ogImage = page.ogImage ? `${siteConfig.domain}${page.ogImage}` : `${siteConfig.domain}/favicon.svg`;

  return `
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(desc)}">
    ${siteConfig.disallowIndexing ? '<meta name="robots" content="noindex, nofollow, noarchive, nosnippet">' : '<meta name="robots" content="index, follow">'}
    <link rel="canonical" href="${url}">
    
    <!-- Open Graph / Facebook / Telegram -->
    <meta property="og:type" content="${ogType}">
    <meta property="og:site_name" content="${escapeHtml(siteConfig.siteName)}">
    <meta property="og:url" content="${url}">
    <meta property="og:title" content="${escapeHtml(title)}">
    <meta property="og:description" content="${escapeHtml(desc)}">
    <meta property="og:image" content="${ogImage}">
    <meta property="og:locale" content="${siteConfig.locale}">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="${url}">
    <meta name="twitter:title" content="${escapeHtml(title)}">
    <meta name="twitter:description" content="${escapeHtml(desc)}">
    <meta name="twitter:image" content="${ogImage}">
  `;
}

function generateJsonLd(page) {
  const schemas = [];
  const url = `${siteConfig.domain}${page.path || '/'}`;

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GramOS",
    "url": siteConfig.domain,
    "logo": `${siteConfig.domain}/favicon.svg`,
    "description": siteConfig.defaultDesc,
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": siteConfig.contacts.email,
      "url": siteConfig.contacts.telegramUrl
    }
  };

  // Home page gets Organization + WebSite
  if (page.path === '/' || page.path === '') {
    schemas.push(organizationSchema);
    schemas.push({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "GramOS",
      "url": siteConfig.domain,
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${siteConfig.domain}/docs/?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    });
  }

  // SoftwareApplication Schema (for Product & Home pages)
  if (page.isProduct || page.path === '/' || page.path === '/pricing/') {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": page.title || "GramOS",
      "operatingSystem": "Web, Telegram, iOS, Android, macOS, Windows",
      "applicationCategory": "BusinessApplication",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "RUB",
        "lowPrice": "790",
        "highPrice": "7900",
        "offerCount": "3"
      },
      "description": page.metaDesc || siteConfig.defaultDesc
    });
  }

  // FAQ Schema (gives rich Google & Yandex search snippet)
  if (page.faq && Array.isArray(page.faq) && page.faq.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": page.faq.map(item => ({
        "@context": "https://schema.org",
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      }))
    });
  }

  // BreadcrumbList Schema
  if (page.crumbs && Array.isArray(page.crumbs) && page.crumbs.length > 1) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": page.crumbs.map((c, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": c[0],
        "item": c[1] ? `${siteConfig.domain}${c[1]}` : url
      }))
    });
  }

  if (schemas.length === 0) return '';

  return schemas
    .map(s => `<script type="application/ld+json">\n${JSON.stringify(s, null, 2)}\n</script>`)
    .join('\n');
}

module.exports = { generateMeta, generateJsonLd };
