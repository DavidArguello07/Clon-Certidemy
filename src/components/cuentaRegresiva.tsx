import React from 'react'
import imafen from "../Imagenes/bg_register_now.jpg";
import "../Css/cuentaRegresiva.css"

const CuentaRegresiva = () => {

  return (

    <>
      <div className="contenedor-principal">
        <img src={imafen} alt="loco" style={{backgroundImage:imafen, width:"100%", height:"95vh"}}/>
        <div className="contenedor-izquierda">
          <div className="horario"></div>
          <div className="horario"></div>
          <div className="horario"></div>
          <div className="horario"></div>
        </div>
        <div className="contenedor-derecha">
          <h3>¡REGÍSTRATRE AHORA!</h3>
          <p>Antes que acabe la promoción</p>
          <button>Registrarme</button>
        </div>
      </div>
    </>
  )
}

export default CuentaRegresiva;