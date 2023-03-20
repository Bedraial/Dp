import './Byf.css'

function Boton() {
  return (
    <>
    <br/>
    <button className='proceso' onClick={function Tras() {window.location.href="";}}>Trasporte</button>      <br/>
    <button className='proceso' onClick={function Dias() {window.location.href="";}}>Dias de sol</button>    <br/>
    <button className='proceso' onClick={function Viajes() {window.location.href ="";}}>Viajes</button>      <br/>
    <button className='proceso' onClick={function Tarifas() {window.location.href ="";}}>Tarifas</button>    <br/>
    <button className='proceso' onClick={function Hospedaje() {window.location.href ="";}}>Hospedaje</button><br/>
    </>
  )
}
export default Boton