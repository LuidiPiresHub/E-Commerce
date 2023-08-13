import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EventTarget from '../../interfaces/EventTarget.interface';
import './Register.css';

export default function Register() {
  const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
    passwordTry: '',
  };

  const URL = 'http://localhost:3001/user/register';

  const [userCredentials, setUserCredentials] = useState(INITIAL_STATE);
  const [error, setError] = useState<null | string>(null);
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }: EventTarget) => {
    setUserCredentials((prevState) => ({ ...prevState, [name]: value }))
  }

  const createUser = async (event: FormEvent) => {
    try {
      event.preventDefault();
      const { password, passwordTry } = userCredentials;
      if (password !== passwordTry) throw new Error('As senhas não coincidem');

      const { passwordTry: _, ...userData } = userCredentials;

      const response = await fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...userData, role: 'user' }),
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
    setUserCredentials(INITIAL_STATE);
  }

  return (
    <div className='register-container'>
      <form onSubmit={createUser} method='post' className='register-form'>
        <h1 className='form-register-title'>Cadastro</h1>
        <input type='text' placeholder='Nome' name='name' value={userCredentials.name} onChange={handleChange} className='register-input' />
        <input type='email' placeholder='Email' name='email' value={userCredentials.email} onChange={handleChange} className='register-input' />
        <input type='password' placeholder='Senha' name='password' value={userCredentials.password} onChange={handleChange} className='register-input' />
        <input type='password' placeholder='Confirmar Senha' name='passwordTry' value={userCredentials.passwordTry} onChange={handleChange} className='register-input' />
        <button type='submit' className='register-button'>Cadastrar</button>
        <Link to='/login' className='register-link'>Já tem conta?</Link>
        {error && <span className='register-message'>{error}</span>}
      </form>
    </div>
  )
}
