import "./ContainerStyle.css"
import iconMensage from '../../images/message.svg'


function Container({ mensage }) {
  return (
    <div className="mensage-conteiner">
      <div className="title-mensage">
        <img src={iconMensage}/>
        <p>Mensagem</p>      
      </div>
      <div className="container-mensage">
        <p>{mensage}</p>
      </div>
      </div>
  );
}

export default Container;
