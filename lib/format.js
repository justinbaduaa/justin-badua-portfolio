export function formatSlug(slug) {
  if (!slug) {
    return 'section';
  }

  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}


