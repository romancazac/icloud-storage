import  { useState } from 'react'
import { logIn } from '../../assets/services/auth';
import Input from '../ui/Input'

export const FormSing= () => {
  const [data, setData] = useState({
    username:'',
    password:'',
  });

  const handleSubmit = (e) =>{
    e.preventDefault();
    logIn(data).then((userCredential) => console.log(userCredential.user))
  }
  return (
    <form action='#' onSubmit={handleSubmit}>
      <Input 
        onChange={(e) => setData({...data, username:e.target.value})} 
        value={data.username} 
        name='username' 
        placeholder='Enter username' 
        label='Username'/>
       <Input 
        onChange={(e) => setData({...data, password:e.target.value})} 
        value={data.password} 
        name='password' 
        placeholder='Enter password'
        type='password' 
        label='Password'/>

        <button type='submit' className="btn-block">Sing In</button>  
    </form>
  )
}
