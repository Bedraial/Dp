import './Byf.css'

function Boton() {
  return (
    <>
    <br/>
    <button onClick={function Tras() {window.location.href="";}}>Trasporte</button>      <br/>
    <button onClick={function Dias() {window.location.href="";}}>Dias de sol</button>    <br/>
    <button onClick={function Viajes() {window.location.href ="";}}>Viajes</button>      <br/>
    <button onClick={function Tarifas() {window.location.href ="";}}>Tarifas</button>    <br/>
    <button onClick={function Hospedaje() {window.location.href ="";}}>Hospedaje</button><br/>
    </>
  )
}
export default Boton