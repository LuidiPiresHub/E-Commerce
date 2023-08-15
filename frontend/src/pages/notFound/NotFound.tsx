import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.notFoundTitle}>404</h1>
      <p className={styles.notFoundMessage}>Página não encontrada</p>
      <Link className={styles.notFoundButton} to='/login'>Voltar</Link>
    </div>
  )
}
