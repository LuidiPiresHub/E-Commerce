import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <div className='not-found-container'>
      <h1 className='not-found-title'>404</h1>
      <p className='not-found-message'>Página não encontrada</p>
      <Link className='not-found-button' to='/login'>Voltar</Link>
    </div>
  )
}
