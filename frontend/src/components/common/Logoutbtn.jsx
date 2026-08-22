import React, { useContext } from 'react'
import api from '../../service/axios'
import { usercont } from '../../context/Usercontext'
import { useNavigate } from 'react-router-dom'

const Logoutbtn = () => {
  const navigate= useNavigate()
  const { setacesstoken, setUser } = useContext(usercont)
  const handlelogout = async () => {
      try {
      const response = await api.post('/auth/logout', {}, {
        withCredentials: true,
      })
      setacesstoken(null)
      setUser(null)
      navigate('/login')


    
  } catch (error) {
    console.log(error);

  }}
  return (
    <button onClick={handlelogout}

      className="rounded-lg border border-red-500/30 px-4 py-2 text-sm font-semibold text-red-400 transition hover:bg-red-500/10"
    >
      <i className="ri-logout-box-r-line mr-2"></i>
      Logout
    </button>
  )
}

export default Logoutbtn
