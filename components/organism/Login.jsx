import SubTitle from '../atoms/SubTitle'
import Input from '../atoms/Input'
import Button from '../atoms/Button'
import Image from 'next/image'

export default function Login({ className, classNameOverlay }) {
  const onSubmit = event => {
    event.preventDefault()
  }

  return (
    <>
      <div className={`login-bg ${classNameOverlay}`}></div>
      <form className={`login ${className}`} onClick={event => event.stopPropagation()} onSubmit={onSubmit}>
        <div className="triangule"></div>
        <picture className="container_cancel">
          <Image
            src='/images/cerrar.png'
            alt='Logo'
            width='15px'
            height='15px'
          ></Image>
        </picture>
        <SubTitle className='subtitle small black'>Log In</SubTitle>
        <label htmlFor="e-mail" className='email'>
          <p>E-mail:</p>
          <Input type='email' required id='e-mail' placeholder='example@gmail.com'></Input>
        </label>
        <label htmlFor="password" className='password'>
          <p>Password:</p>
          <Input type='password' required id='password' placeholder='***********'></Input>
        </label>
        <Button type='submit' className='button square primary submit'>Submit</Button>
      </form>
    </>
  )
}
