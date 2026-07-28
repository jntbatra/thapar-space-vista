import { useEffect } from "react";
import {
  absUrl,
  APP_THEME_COLOR,
  DEFAULT_OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_URL,
  type SeoPage,
} from "@/lib/seo";

const setMetaByName = (name: string, content: string) => {
  let meta = document.head.querySelector(
    `meta[name="${name}"]`,
  ) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = name;
    document.head.appendChild(meta);
  }
  meta.content = content;
};

const setMetaByProperty = (property: string, content: string) => {
  let meta = document.head.querySelector(
    `meta[property="${property}"]`,
  ) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("property", property);
    document.head.appendChild(meta);
  }
  meta.content = content;
};

const setCanonical = (url: string) => {
  let link = document.head.querySelector(
    'link[rel="canonical"]',
  ) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }
  link.href = url;
};

const setJsonLd = (id: string, schema: object) => {
  let script = document.head.querySelector(
    `script[data-seo-id="${id}"]`,
  ) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo-id", id);
    document.head.appendChild(script);
  }
  script.text = JSON.stringify(schema);
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/news`,
    "query-input": "required name=search_term_string",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ThaparSAT",
  description:
    "Student platform for Thapar Institute of Engineering and Technology.",
  url: SITE_URL,
  logo: absUrl("/icon.png"),
};

type Props = {
  page: SeoPage;
};

const SeoHead = ({ page }: Props) => {
  useEffect(() => {
    const canonicalUrl = absUrl(page.path);
    const keywords = [...SITE_KEYWORDS, ...(page.keywords ?? [])];
    const ogImage = page.ogImage ?? DEFAULT_OG_IMAGE;
    const ogImageUrl = ogImage.startsWith("http") ? ogImage : absUrl(ogImage);
    const fullTitle = `${page.title} | ${SITE_NAME}`;

    document.title = fullTitle;

    setMetaByName("description", page.description);
    setMetaByName("keywords", keywords.join(", "));
    setMetaByName("author", "ThaparSAT Team");
    setMetaByName("creator", "ThaparSAT");
    setMetaByName("publisher", "Thapar Institute of Engineering and Technology");
    setMetaByName("application-name", SITE_NAME);
    setMetaByName("category", "Education");
    setMetaByName("theme-color", APP_THEME_COLOR);
    setMetaByName(
      "robots",
      "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    );

    setMetaByProperty("og:title", fullTitle);
    setMetaByProperty("og:description", page.description);
    setMetaByProperty("og:site_name", SITE_NAME);
    setMetaByProperty("og:url", canonicalUrl);
    setMetaByProperty("og:locale", "en_IN");
    setMetaByProperty("og:type", page.ogType ?? "website");
    setMetaByProperty("og:image", ogImageUrl);
    setMetaByProperty("og:image:alt", `${page.title} - ${SITE_NAME}`);

    setMetaByName("twitter:card", "summary_large_image");
    setMetaByName("twitter:title", fullTitle);
    setMetaByName("twitter:description", page.description);
    setMetaByName("twitter:image", ogImageUrl);

    setCanonical(canonicalUrl);

    setJsonLd("website", websiteSchema);
    setJsonLd("organization", organizationSchema);
    setJsonLd("webpage", {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: page.title,
      description: page.description,
      url: canonicalUrl,
      isPartOf: {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
      },
      about: {
        "@type": "Organization",
        name: "ThaparSAT",
      },
    });
  }, [page]);

  return null;
};

export default SeoHead;
