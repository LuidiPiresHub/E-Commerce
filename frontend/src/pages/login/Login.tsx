import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import EventTarget from '../../interfaces/EventTarget.interface';

const URL = 'http://localhost:3001/user/login';
const INITIAL_STATE = { email: '', password: '' };

export default function Login() {
  const [user, setUser] = useState(INITIAL_STATE);
  const [error, setError] = useState<null | string>(null);
  const navigate = useNavigate();

  const userLogin = async (event: FormEvent) => {
    try {
      event.preventDefault();
      setUser(INITIAL_STATE)

      const response = await fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });
      const { message } = await response.json();

      if (response.ok) {
        localStorage.setItem('token', JSON.stringify(message));
        navigate('/products');
      } else {
        throw new Error(message)
      }
    } catch (error) {
      setError((error as Error).message);
      setTimeout(() => setError(null), 5000);
    }
  };

  const handleChange = ({ target: { name, value } }: EventTarget) => {
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={userLogin} method='post' className={styles.formLogin}>
        <h1 className={styles.formTitle}>Login</h1>
        <input type='email' placeholder='Email' name='email' value={user.email} onChange={handleChange} className={styles.formInput} />
        <input type='password' placeholder='Senha' name='password' value={user.password} onChange={handleChange} className={styles.formInput} />
        <button type='submit' className={styles.formButton}>Login</button>
        <Link className={styles.formLink} to='/register'>Não tem conta?</Link>
        {error && <span className={styles.formMessage}>{error}</span>}
      </form>
    </div>

  )
}
