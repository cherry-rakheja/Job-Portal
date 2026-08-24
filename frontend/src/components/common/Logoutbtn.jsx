import React, { useContext } from 'react'
import api from '../../service/axios'
import { usercont } from '../../context/Usercontext'
import { useNavigate } from 'react-router-dom'

const Logoutbtn = () => {

    const navigate = useNavigate()

    const {
        setacesstoken,
        setUser
    } = useContext(usercont)


    const handlelogout = async () => {

        try {

            await api.post(
                '/auth/logout',
                {},
                {
                    withCredentials: true
                }
            )

        } catch (error) {

            console.log(
                'Logout error:',
                error.response?.data || error.message
            )

        } finally {

            // Frontend state clear
            setacesstoken(null)
            setUser(null)

            // Login page
            navigate('/login', { replace: true })

        }
    }


    return (

        <button
            onClick={handlelogout}
            className="
                rounded-lg
                border border-red-500/30
                px-4 py-2
                text-sm font-semibold
                text-red-400
                transition
                hover:bg-red-500/10
            "
        >

            <i className="ri-logout-box-r-line mr-2"></i>

            Logout

        </button>

    )
}

export default Logoutbtn