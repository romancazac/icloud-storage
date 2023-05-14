import { useState } from 'react'
import { logIn } from '../../services/auth';
import Input from '../ui/Input'
import { useNavigate } from 'react-router-dom';

export const FormSing = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await logIn(data);
    navigate('/dashboard')
  }
  return (
    <form action='#' onSubmit={handleSubmit}>
      <Input
        onChange={(e) => setData({ ...data, username: e.target.value })}
        value={data.username}
        name='username'
        placeholder='Enter username'
        label='Username' />
      <Input
        onChange={(e) => setData({ ...data, password: e.target.value })}
        value={data.password}
        name='password'
        placeholder='Enter password'
        type='password'
        label='Password' />

      <button type='submit' className="btn-block">Sing In</button>
    </form>
  )
}
