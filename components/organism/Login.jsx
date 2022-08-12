import Image from 'next/image'
import swal from 'sweetalert'
import { useRef } from 'react'
import { useRouter } from 'next/router'
import SubTitle from '../atoms/SubTitle'
import Input from '../atoms/Input'
import Button from '../atoms/Button'

export default function Login({ onClick, className, classNameOverlay }) {
  const router = useRouter()
  const $form = useRef(null)

  const onSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData($form.current)
    const data = {
      email: formData.get('email'),
      password: formData.get('password')
    }

    const response = await (await fetch('/api/auth/signin', {
      method: 'POST',
      body: JSON.stringify(data)
    })).json()

    swal({
      text: response?.error || response.success,
      icon: !response.error ? 'success' : 'error'
    })

    if (response.success) {
      router.push('/admin')
    }
  }

  return (
    <>
      <div className={`login-bg ${classNameOverlay}`}></div>
      <form ref={$form} className={`login ${className}`} onClick={event => event.stopPropagation()} onSubmit={onSubmit}>
        <div className="triangule"></div>
        <picture className="container_cancel">
          <Image
            src='/images/cerrar.png'
            alt='Logo'
            width='15px'
            height='15px'
            onClick={onClick}
          ></Image>
        </picture>
        <SubTitle className='subtitle small black'>Log In</SubTitle>
        <label htmlFor="e-mail1" className='email'>
          <p>E-mail:</p>
          <Input name='email' type='email' required id='e-mail1' placeholder='example@gmail.com'></Input>
        </label>
        <label htmlFor="password1" className='password'>
          <p>Password:</p>
          <Input name='password' type='password' required id='password1' placeholder='***********'></Input>
        </label>
        <Button type='submit' className='button square primary submit'>Submit</Button>
      </form>
    </>
  )
}
