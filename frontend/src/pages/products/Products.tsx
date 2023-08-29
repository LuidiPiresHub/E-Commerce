import { useEffect, useState } from 'react';
import styles from './Products.module.css';

export default function Products() {
  const [products, setProducts] = useState([]);
  console.log(products);

  const getProducts = async () => {
    const response = await fetch('http://localhost:3001/products');
    const { message } = await response.json();
    setProducts(message);
  };

  useEffect(() => {
    getProducts();
  }, []);

  interface IProduct {
    id: number;
    productName: string;
    oldPrice: number;
    price: number;
    discount: number;
    productUrl: string;
  }

  return (
    <section className={styles.cardsContainer}>{products.map((product: IProduct) => (
      <div className={styles.card} key={product.id}>
        <img className={styles.productImg} src={product.productUrl} />
        <h1 className={styles.name}>{product.productName}</h1>
        <div className={styles.priceContainer}>
          <h2 className={styles.oldPrice}>{`R$ ${product.oldPrice.toFixed(2)}`}</h2>
          <h2 className={styles.price}>{`R$ ${product.price.toFixed(2)}`}</h2>
        </div>
        <span className={styles.discount}>{`${product.discount}% OFF`}</span>
        <span>{`Em até 12x ${(product.price / 12).toFixed(2)} sem juros`}</span>
        <button type='button' className={styles.cardBtn}>Comprar</button>
      </div>
    ))}</section>
  )
}

// pegar os produtos de back e mostrar na tela
// buscar da api = fetch();
// quando a api deve ser chamada e quantas vezes = ao carregar a página
