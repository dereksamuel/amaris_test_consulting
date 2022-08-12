import { useRef, useState } from 'react'
import Button from '../atoms/Button'
import SubTitle from '../atoms/SubTitle'
import Input from '../atoms/Input'
import Modal from './Modal'
import useProfile from '../../hooks/useProfile'

export default function UsersData({ userData }) {
  const profile = useProfile()
  const [state, setState] = useState({
    showCreateModal: false,
    selects: new Set()
  })
  const $formCreate = useRef(null)

  const onChangeCreateModal = (value) => {
    setState({
      ...state,
      showCreateModal: value
    })
  }

  const onCreate = async (event, $formCreate) => {
    event.preventDefault()

    const form = new FormData($formCreate.current)
    const data = {
      email: form.get('email'),
      password: form.get('password'),
      role: form.get('role')
    }

    try {
      await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify(data)
      })

      onChangeCreateModal(false)
      swal({
        text: 'Created successfully!',
        icon: 'success'
      })
    } catch (error) {
      console.error(error)
      swal({
        text: 'Something went wrong!',
        icon: 'error'
      })
    }
  }

  function onCheck(e, item) {
    if (e.target.checked && !state.selects.has(item)) {
      document.querySelectorAll('input[type="checkbox"]').forEach($checkbox => {
        $checkbox.checked = false
      })

      e.target.checked = true

      setState({
        ...state,
        selects: new Set().add(item)
      })
    } else {
      setState({
        ...state,
        selects: new Set()
      })
    }
  }

  const onDelete = async () => {
    if (state.selects) {
      try {
        await fetch('/api/users?id=' + [...state.selects][0].id, {
          method: 'DELETE'
        })

        swal({
          text: 'Deleted successfully!',
          icon: 'success'
        })
      } catch (error) {
        console.error(error)
        swal({
          text: 'Something went wrong!',
          icon: 'error'
        })
      }
    }
  }

  const onUpdate = async (item) => {
    const data = {
      email: document.getElementById(`${item.id}_email`).value,
      password: document.getElementById(`${item.id}_password`).value,
      role: document.getElementById(`${item.id}_role`).value
    }

    if ((item.email === data.email) && (item.password === data.password) && (item.role === data.role)) return

    try {
      await fetch('/api/users?id=' + item.id, {
        method: 'PUT',
        body: JSON.stringify(data)
      })

      swal({
        text: 'Updated successfully!',
        icon: 'success'
      })
    } catch (error) {
      console.error(error)
      swal({
        text: 'Something went wrong!',
        icon: 'error'
      })
    }
  }

  return (
    <div className="users_data">
      <div className="paneltitle">
        <SubTitle className='small black'>Users</SubTitle>
        <Button className='button secondary ovalo sm' onClick={() => onChangeCreateModal(true)}>+</Button>
        <Button disabled={!state.selects.size} className='button danger ovalo sm' onClick={onDelete}>x</Button>
      </div>
      <ul className="read">
        <li className='header_grid header_grid_users'>
          <span></span>
          <p className='email_header'>Email</p>
          <p className='main_header'>Password</p>
          <p className='role_header'>Role</p>
        </li>
        {userData?.data?.map(item => (
          <li key={item.id} className='body_grid body_grid_users'>
            <Input type="checkbox" disabled={item.email === profile?.email} onChange={(e) => onCheck(e, item)} />
            <Input id={`${item.id}_email`} type="email" defaultValue={item.email} placeholder="email" />
            <Input id={`${item.id}_password`} type="text" defaultValue={item.password} placeholder="password message" />
            <Input id={`${item.id}_role`} type="text" defaultValue={item.role} placeholder="role message" />
            <Button type="button" onClick={() => onUpdate(item)} className='button cancel ovalo sm'>Update</Button>
          </li>
        ))}
      </ul>
      {state.showCreateModal && (
        <Modal closeMe={() => onChangeCreateModal(false)}>
          <SubTitle className='small black modalsubtitle'>Create</SubTitle>
          <form onSubmit={(e) => onCreate(e, $formCreate)} ref={$formCreate}>
            <li>
              <label htmlFor="">
                <p>Email:</p>
                <Input name='email' required type="email" />
              </label>
            </li>
            <li>
              <label htmlFor="">
                <p>Password:</p>
                <Input name='password' required type="password" />
              </label>
            </li>
            <li>
              <label htmlFor="">
                <p>Role:</p>
                <Input name='role' required type="text" placeholder='admin, reader or editor' />
              </label>
            </li>
            <Button type="button" className='button cancel ovalo lg' onClick={() => onChangeCreateModal(false)}>Cancel</Button>
            <Button type="submit" className='button primary ovalo lg'>Done</Button>
          </form>
        </Modal>
      )}
    </div>
  )
}
