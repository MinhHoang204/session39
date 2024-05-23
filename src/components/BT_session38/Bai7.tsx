import React, { useMemo, memo } from 'react';

interface Product {
  id: number;
  productName: string;
  price: number;
  quantity: number;
}

interface ProductListProps {
  products: Product[];
}

const ProductItem: React.FC<Product> = memo(({ id, productName, price, quantity }) => {
  return (
    <div key={id}>
      <h3>{productName}</h3>
      <p>Price: {price}</p>
      <p>Quantity: {quantity}</p>
    </div>
  );
});

const Bai7: React.FC<ProductListProps> = ({ products }) => {
  const productList = useMemo(() => {
    return products.map(product => (
      <ProductItem
        key={product.id}
        id={product.id}
        productName={product.productName}
        price={product.price}
        quantity={product.quantity}
      />
    ));
  }, [products]);

  return (
    <div>
      <h2>Product List</h2>
      {productList}
    </div>
  );
};

export default Bai7;