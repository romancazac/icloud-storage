import { useState } from 'react'
import { regUser } from '../../services/auth';
import Input from '../ui/Input'

export const FormReg = () => {
  const [data, setData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    regUser(data)
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
        onChange={(e) => setData({ ...data, email: e.target.value })}
        value={data.email}
        name='email'
        placeholder='Enter email'
        label='Email' />
      <Input
        onChange={(e) => setData({ ...data, phone: e.target.value })}
        value={data.phone}
        name='phone'
        placeholder='Enter phone'
        label='Phone' />
      <Input
        onChange={(e) => setData({ ...data, password: e.target.value })}
        value={data.password}
        name='password'
        placeholder='Enter password'
        type='password'
        label='Password' />

      <button type='submit' className="btn-block">Register</button>
    </form>
  )
}
