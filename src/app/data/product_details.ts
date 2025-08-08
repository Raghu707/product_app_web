import { Product } from "../Modal/product_modal";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Product 1',
    price: 29.99,
    quantity:10,
    imageUrl: 'https://media.istockphoto.com/id/2192435275/de/foto/nahaufnahme-der-h%C3%A4nde-eines-seniorensportlers-der-schn%C3%BCrsenkel-an-turnschuhen-im-freien-bindet.jpg?s=1024x1024&w=is&k=20&c=nBhCSuoBkgo49wNhCfqRmd6hjdPVrwcMmnoIBRZXjio=',
    variants: ['Small', 'Medium', 'Large'],
    stock: 5,
   
  },
  {
    id: 2,
    name: 'Product 2',
    price: 19.99,
     quantity:10,
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    variants: ['Small', 'Large'],
    stock: 5, // Available stock
   
  },
  {
    id: 3,
    name: 'Product 3',
    price: 18.99,
     quantity:10,
    imageUrl: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    variants: ['Small', 'Large'],
    stock: 0, // out of stock
 
  },
  {
    id: 4,
    name: 'Product 4',
    price: 19.99,
     quantity:10,
    imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=812&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    variants: ['Small', 'Large'],
    stock: 5, // Available stock
   
  },
  // Add more products as needed
];