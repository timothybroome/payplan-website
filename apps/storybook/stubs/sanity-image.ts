export function urlFor() {
  const builder = {
    width: () => builder,
    height: () => builder,
    quality: () => builder,
    auto: () => builder,
    url: () => 'https://placehold.co/1200x675/035875/ffffff?text=Sanity+Image',
  };
  return builder;
}
