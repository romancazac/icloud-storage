import { useState } from 'react'
import { logIn } from '../../services/auth';
import Input from '../ui/Input'
import { useNavigate } from 'react-router-dom';
import { Spinner } from '../spinner/Spinner';

export const FormSing = () => {
  const navigate = useNavigate()
  const [load, setLoad] = useState(false)
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  
      setLoad(true)
      await logIn(data);
      navigate('/dashboard')
      setLoad(false)
  
 
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
     
      <button type='submit' className="btn-block spinner_btn">Sing In  {load && <Spinner/>}</button>
    </form>
  )
}
