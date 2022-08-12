import { useEffect, useState } from 'react'

export default function useProfile() {
  const [state, setState] = useState({ user: null })

  useEffect(() => {
    const fetchProfile = async () => {
      setState({
        ...state,
        user: await (await fetch('http://localhost:3000/api/auth/profile')).json()
      })
    }

    fetchProfile()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return state.user
}
