export interface NavLink {
  href: string;
  label: string;
  target?: string;
}

export const NAV_LINKS: NavLink[] = [
  {href: "https://psicologix.vercel.app/", label:"Pollyanna Barreto", target:"_bland"},
  { href: "/blog", label: "Blog"},
  { href: "/loja", label: "Produtos"},
  { href: "/servicos", label: "Serviços"},
];
