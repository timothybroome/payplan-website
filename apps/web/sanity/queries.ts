import { sanityClient } from './client';

export async function getSiteSettings() {
  return sanityClient.fetch(`*[_type == "siteSettings"][0]`);
}

export async function getSolutions() {
  return sanityClient.fetch(
    `*[_type == "solution"] | order(title asc) {
      _id, title, shortName, summary, region,
      "slug": slug.current
    }`,
  );
}

export async function getSolution(slug: string) {
  return sanityClient.fetch(
    `*[_type == "solution" && slug.current == $slug][0] {
      _id, title, shortName, summary, region,
      "slug": slug.current,
      atAGlance, eligibility, body,
      seoTitle, seoDescription,
      "faqs": *[_type == "faqItem" && references(^._id)] {
        _id, question, answer
      }
    }`,
    { slug },
  );
}

export async function getTestimonials() {
  return sanityClient.fetch(
    `*[_type == "testimonial"] {
      _id, quote, name, rating, source,
      "solutionName": solution->shortName
    }`,
  );
}

export async function getAllSolutionSlugs() {
  return sanityClient.fetch(
    `*[_type == "solution"].slug.current`,
  );
}

export async function getArticles() {
  return sanityClient.fetch(
    `*[_type == "article"] | order(title asc) {
      _id, title, summary, category,
      "slug": slug.current,
      "relatedSolutions": relatedSolutions[]->{ _id, title, shortName, "slug": slug.current }
    }`,
  );
}

export async function getArticle(slug: string) {
  return sanityClient.fetch(
    `*[_type == "article" && slug.current == $slug][0] {
      _id, title, summary, category, body,
      "slug": slug.current,
      seoTitle, seoDescription,
      "relatedSolutions": relatedSolutions[]->{ _id, title, shortName, "slug": slug.current }
    }`,
    { slug },
  );
}

export async function getAllArticleSlugs() {
  return sanityClient.fetch(
    `*[_type == "article"].slug.current`,
  );
}

export async function getBlogPosts() {
  return sanityClient.fetch(
    `*[_type == "blogPost"] | order(publishedAt desc) {
      _id, title, summary, publishedAt,
      "slug": slug.current
    }`,
  );
}

export async function getBlogPost(slug: string) {
  return sanityClient.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] {
      _id, title, summary, publishedAt, body,
      "slug": slug.current,
      seoTitle, seoDescription
    }`,
    { slug },
  );
}

export async function getAllBlogSlugs() {
  return sanityClient.fetch(
    `*[_type == "blogPost"].slug.current`,
  );
}

export async function getPartnerPage(slug: string) {
  return sanityClient.fetch(
    `*[_type == "partnerPage" && slug.current == $slug][0] {
      _id, partnerName, logoUrl, brandColour,
      headline, intro, faqs,
      "slug": slug.current,
      seoTitle, seoDescription
    }`,
    { slug },
  );
}

export async function getAllPartnerSlugs() {
  return sanityClient.fetch(
    `*[_type == "partnerPage"].slug.current`,
  );
}
