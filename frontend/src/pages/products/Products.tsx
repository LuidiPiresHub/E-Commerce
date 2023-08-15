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

  return (
    <section>{products.map(({ id, productName }) => (
      <div key={id} className={styles.cardsContainer}>
        <div className={styles.card}>
          <img className={styles.productImg} src="url da imagem" />
          <h1 className={styles.name}>{productName}</h1>
          <div className={styles.priceContainer}>
            <h2 className={styles.oldPrice}>R$ 3000.00</h2>
            <h2 className={styles.price}>R$ 1500.00</h2>
          </div>
          <span className={styles.discount}>50% OFF</span>
          <span>Em até 12x R$125,00 sem juros</span>
          <button type='button' className={styles.cardBtn}>Comprar</button>
        </div>
      </div>
    ))}</section>
  )
}

// pegar os produtos de back e mostrar na tela
// buscar da api = fetch();
// quando a api deve ser chamada e quantas vezes = ao carregar a página
