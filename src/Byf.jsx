import './Byf.css'
import Mvo from './Limp';
function Boton() {
  const rana=Mvo
  return (
    
    <>
    <br/>
    <button className='proceso' onClick={function Tras() {window.location.href={rana};}}>Trasporte        </button><br/>
    <button className='proceso' onClick={function Dias() {window.location.href="";}}>Dias de sol      </button><br/>
    <button className='proceso' onClick={function Viajes() {window.location.href ="";}}>Viajes        </button><br/>
    <button className='proceso' onClick={function Tarifas() {window.location.href ="";}}>Tarifas      </button><br/>
    <button className='proceso' onClick={function Hospedaje() {window.location.href ="";}}>Hospedaje  </button><br/>
    </>
  )
}
export default Boton