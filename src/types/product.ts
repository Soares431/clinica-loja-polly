export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  bgColor: string;   // Cor de fundo para quando não houver foto
  imgProduct: string; // Caminho da imagem (ex: /assets/image/produtos/xicara.png)
};