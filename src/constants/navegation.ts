export interface NavLink {
  href: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  {href: "/", label: "Inicio"},
  { href: "/blog", label: "Blog"},
  { href: "/loja", label: "Produtos"},
  { href: "/servicos", label: "Serviços"},
];
