import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import 'remixicon/fonts/remixicon.css'
import Jobcontext from './context/Jobcontext.jsx'
import Usercontext from './context/Usercontext.jsx'

createRoot(document.getElementById('root')).render(
        <BrowserRouter>
   <Usercontext>
     <Jobcontext>
    <App />
    </Jobcontext>
   </Usercontext>
    </BrowserRouter>
)
