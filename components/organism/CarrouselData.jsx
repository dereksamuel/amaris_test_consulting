import { useRef, useState } from 'react'
import swal from 'sweetalert'

import Input from '../atoms/Input'
import SubTitle from '../atoms/SubTitle'
import Button from '../atoms/Button'
import Modal from './Modal'

export default function CarrouselData({ carrousel }) {
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
      url: form.get('url'),
      main_message: form.get('main_message')
    }

    try {
      await fetch('/api/carrousel', {
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

  const onDelete = async () => {
    if (state.selects) {
      try {
        await fetch('/api/carrousel?id=' + [...state.selects][0].id, {
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
      url: document.getElementById(`${item.id}_url`).value,
      main_message: document.getElementById(`${item.id}_main`).value
    }

    if ((item.main_message === data.main_message) && (item.url === data.url)) return

    try {
      await fetch('/api/carrousel?id=' + item.id, {
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

  const onCheck = (e, item) => {
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

  return (
    <div className="carrouselData">
      <div className="paneltitle">
        <SubTitle className='small black'>Trusted by Agencies & Store Owners</SubTitle>
        <Button className='button secondary ovalo sm' onClick={() => onChangeCreateModal(true)}>+</Button>
        <Button disabled={!state.selects.size} className='button danger ovalo sm' onClick={onDelete}>x</Button>
      </div>
      <ul className="read">
        <li className='header_grid'>
          <span></span>
          <p className='url_header'>Url</p>
          <p className='main_header'>Main Message</p>
        </li>
        {carrousel.data?.map(item => (
          <li key={item.id} className='body_grid'>
            <Input type="checkbox" onChange={(e) => onCheck(e, item)} />
            <Input id={`${item.id}_url`} type="url" defaultValue={item.url} placeholder="url" />
            <Input id={`${item.id}_main`} type="text" defaultValue={item.main_message} placeholder="main message" />
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
                <p>Url:</p>
                <Input name='url' type="text" />
              </label>
            </li>
            <li>
              <label htmlFor="">
                <p>Main Message:</p>
                <Input name='main_message' required type="text" />
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
