import React from 'react'
import IMAGEN from "../Imagenes/hero_slider_5.jpg";
import "../Css/picture.css";

const Picture = () => {
  return (
    <>
    <div className='contenedor-imagen'>
        <img src={IMAGEN} alt="Jovenes" className='imagen-principal'/>
    </div>
    </>
  )
}

export default Picture;