import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import EventTarget from '../../interfaces/EventTarget.interface';

const URL = 'http://localhost:3001/user/login';
const INITIAL_STATE = { email: '', password: '' };

export default function Login() {
  const [user, setUser] = useState(INITIAL_STATE);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const userLogin = async (event: FormEvent) => {
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
      setError(message);
      setTimeout(() => setError(null), 2000);
    }
  };

  const handleChange = ({ target: { name, value } }: EventTarget) => {
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className='container'>
      <form onSubmit={userLogin} method='post' className='form-login'>
        <h1 className='form-title'>Login</h1>
        <input type='email' placeholder='Email' name='email' value={user.email} onChange={handleChange} className='form-input' />
        <input type='password' placeholder='Senha' name='password' value={user.password} onChange={handleChange} className='form-input' />
        <button type='submit' className='form-button'>Login</button>
        <Link className='form-link' to='/register'>Não tem conta?</Link>
        {error && <span className='form-message'>{error}</span>}
      </form>
    </div>

  )
}
