import React from 'react'
import ReactDOM from 'react-dom/client'
import { CV } from './CV'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
    <main className='cv-main'>
    < CV />
    </main>
    </>
  </React.StrictMode>,
)

