import { useNavigate } from "react-router-dom";
import './Selector.css'
import logo from '../images/callxeck2.png'

function Selector({ setValue }) {
  
  let paginas = useNavigate();

  const SelectItem = (e) => {
   
    switch (e.target.value) {
      case "OptionOne":
        setValue('sideBar', 1)
        paginas("AlterPlane/step01");
        break;
      case "OptionTwo":
        setValue('sideBar', 2)
        paginas("AddressChange/step01");
        break;
      case "OptionThree":
        setValue('sideBar', 3)
        paginas("FiberActivation/step01");
        break;
      case "OptionFour":
        setValue('sideBar', 4)
        paginas("mma/step01");
        break;
      case "OptionFive":
        paginas("Tecs");
        break;
      case "ativacao":
        paginas("/Ativacao/Home");
        break;
      default:
        break;
    }
  };

  return (
    <div className="main">
      <img className="logo-main" src={logo} />
      <select
        className="select"
        onChange={SelectItem}
      >
        <option className="option" value="vazio" >-- Tipo de Serviço --</option>
        <option className="option" value="OptionOne">Alteração de Plano</option>
        <option className="option" value="OptionTwo">Mudança de Endereço</option>
        <option className="option" value="OptionThree">Ativação</option>
        <option className="option" value="OptionFour">MMA</option>
        <option className="option" value="OptionFive">Tecs</option>
      </select>
    </div>
  );
}

export default Selector;
