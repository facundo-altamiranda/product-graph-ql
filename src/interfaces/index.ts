export interface Product {
  product: {
    itemName: string;
    images: string[];
  };
  price: number;
  stock: number;
}

export interface SellerPublication {
  getSellerPublications: Product[];
}
