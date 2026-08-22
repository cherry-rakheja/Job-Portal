import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import api from '../service/axios'
export const jobcont= createContext()
const Jobcontext = (props) => {
const [job, setjob] = useState([])

useEffect(() => {
    const jobdata = async () => {
        try {
            const response = await api.get('/jobs/getjob')
            setjob(response.data.jobs)

        } catch (error) {
            console.log(error)
        }
    }

    jobdata()
}, [])
  return (
    <jobcont.Provider value={{job}}>
        <div>
      {props.children}
    </div>
    </jobcont.Provider>
  )
}

export default Jobcontext
