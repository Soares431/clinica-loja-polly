export interface NavLink {
  href: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  {href: "/", label: "Inicio"},
  {href: "/empresa", label: "Empresa"},
  { href: "/blog", label: "Blog"},
  { href: "/loja", label: "Produtos"},
  { href: "/servicos", label: "Serviços"},
  { href: "/contato", label: "Ajuda"},

];
