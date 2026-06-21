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
