export function formatPrice(cents) {
  if (!cents || typeof(cents) !== 'number') {
    return '';
  }
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function getLocation() {
  const adjectives = [
    "menus for"
  ];

  const nouns = [
    " all"
  ];

  return `${rando(adjectives)}${rando(nouns)}`;
}
