
import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import "./Presentacion.css"



export const Presentacion = () => {
  return (

    <div className='presentFondoo' >
      <div className='d-flex justify-content-center align-items-center text-center h-100 '>
        <div className='text-white '>
          <div class="row">
            <div class="col-md-4">.col-md-4</div>
            <div class="col-md-4">.col-md-4</div>
            <div class="col-md-4">.col-md-4</div>
          </div>
          <MDBBtn href='https://github.com/Lautaax/' tag="a" target="_blank" outline size="lg">
            Ir a mi GitHub
          </MDBBtn>
        </div>
      </div>
    </div>
  )
}
