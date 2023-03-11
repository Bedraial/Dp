import { useState } from 'react'
import rula from "./assets/imagenes/rula.jfif" 
import prula from "./assets/imagenes/prula.jfif" 
import crula from "./assets/imagenes/crula.jfif" 
import './Reborn.css'

function Imagen(){
const poao=rula
const papo=prula
const apra=crula
return(
<>
<img className='test1' src={poao}/><br/>
<img className='test2' src={papo}/><br/>
<img className='test3'src={apra}/>
</>
)
}
export default Imagen