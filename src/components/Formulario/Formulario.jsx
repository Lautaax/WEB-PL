import React from 'react'
import QrAguilera from "../Images/Qraguilerasvg.svg"
import "./Formulario.css"


export const Formulario = () => {
  return (
    <div className='fotofondo'  >
      <div className=' d-flex justify-content-center align-items-center h-100'>
        <div className='image ' >
          <img
            alt='...'
            className='qr '
            src={QrAguilera} />
        </div>
      </div>
    </div>
  )
}
