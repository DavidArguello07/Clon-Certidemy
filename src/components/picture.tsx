import React from 'react'
import IMAGEN from "../Imagenes/hero_slider_5.jpg";
import "../Css/picture.css";

const Picture = () => {
  return (
    <>
    <picture>
        <img src={IMAGEN} alt="" className='imagen-principal'/>
    </picture>
    </>
  )
}

export default Picture;