import SubTitle from '../atoms/SubTitle'
import Input from '../atoms/Input'

export default function Login() {
  return (
    <>
      <div className="login-bg"></div>
      <div className="login" onClick={event => event.stopPropagation()}>
        <div className="triangule"></div>
        <SubTitle className='subtitle small black'>Log In</SubTitle>
        <label htmlFor="e-mail" className='email'>
          <p>E-mail:</p>
          <Input id='e-mail' placeholder='example@gmail.com'></Input>
        </label>
        <label htmlFor="password" className='password'>
          <p>Password:</p>
          <Input id='password' placeholder='***********'></Input>
        </label>
      </div>
    </>
  )
}
