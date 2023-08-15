import { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  // console.log(products);

  const getProducts = async () => {
    const response = await fetch('http://localhost:3001/products');
    const { message } = await response.json();
    setProducts(message);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>{products.map(({id, category, price, productName}) => (
      <div key={id}>
        <span>{id}</span>
        <span>{category}</span>
        <span>{price}</span>
        <span>{productName}</span>
      </div>
    ))}</div>
  )
}

// pegar os produtos de back e mostrar na tela
// buscar da api = fetch();
// quando a api deve ser chamada e quantas vezes = ao carregar a página
