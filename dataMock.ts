export const categoryMock = [
    { id: "c1", name: "Bebidas" },
    { id: "c2", name: "Lanches" },
    { id: "c3", name: "Doces" },
];

export const productMock = [
  { id: "p1", name: "Refrigerante", category: "c1" },
  { id: "p2", name: "Suco Natural", category: "c1" },
  { id: "p3", name: "Hambúrguer", category: "c2" },
  { id: "p4", name: "Cachorro-Quente", category: "c2" },
  { id: "p5", name: "Brigadeiro", category: "c3" },
  { id: "p6", name: "Bolo de Pote", category: "c3" },
];

export const brandMock = [
  {
    id: "b1",
    name: "Coca-Cola",
    category: "c1",
    product: "p1",
    sales: [120, 135, 110, 145],
  },
  {
    id: "b11",
    name: "Sprite",
    category: "c1",
    product: "p1",
    sales: [120, 135, 110, 145],
  },
  {
    id: "b2",
    name: "Do Bem",
    category: "c1",
    product: "p2",
    sales: [60, 70, 75, 80],
  },
  {
    id: "b21",
    name: "Del Valle",
    category: "c1",
    product: "p2",
    sales: [55, 68, 72, 79],
  },
  {
    id: "b3",
    name: "Burger King",
    category: "c2",
    product: "p3",
    sales: [200, 220, 210, 230],
  },
  {
    id: "b31",
    name: "MC Donalds",
    category: "c2",
    product: "p3",
    sales: [120, 135, 110, 145],
  },
  {
    id: "b32",
    name: "Smash House",
    category: "c2",
    product: "p3",
    sales: [150, 160, 140, 155],
  },
  {
    id: "b4",
    name: "Hot Dog Express",
    category: "c2",
    product: "p4",
    sales: [80, 90, 85, 100],
  },
  {
    id: "b41",
    name: "Dogão da Esquina",
    category: "c2",
    product: "p4",
    sales: [75, 82, 88, 95],
  },
  {
    id: "b5",
    name: "Doces da Ju",
    category: "c3",
    product: "p5",
    sales: [40, 50, 60, 55],
  },
  {
    id: "b51",
    name: "Delícias Caseiras",
    category: "c3",
    product: "p5",
    sales: [38, 42, 55, 53],
  },
  {
    id: "b6",
    name: "Bolos e Cia",
    category: "c3",
    product: "p6",
    sales: [45, 48, 50, 52],
  },
  {
    id: "b61",
    name: "Amor em Pedaços",
    category: "c3",
    product: "p6",
    sales: [50, 54, 58, 60],
  },
]; 
