export function getProductImagePath(title: string) {
  const slug = title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u00300-\u036f]/g, "") // remove os acentos
    .replace(/\s+/g, "-"); // espaços viram hígen
  return `/assets/image/produtos/${slug}.png`;
}
