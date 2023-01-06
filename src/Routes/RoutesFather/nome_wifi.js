import Container from "../../Components/Containers/Container";
import React, { useState } from "react";
import Equipamento from './equipamento'
import Pppoe from './pppoe'
import Pag_result3 from './pag_result3'
import Nome_padrao from './nome_padrao'

function Passo02({register}) {

    const [cont, setCont] = useState("");

  
    const PageDisplay = () => {
        console.log(cont)       
        if(cont === "prox")return <Pag_result3 register={register} />;
        if(cont === "ante")return <Nome_padrao register={register} />;
        if(cont === "reload")return <Equipamento register={register} />;
        if(cont === "back")return <Pppoe register={register} />;
    }   
    
  
    return (
        
        <>

            {(cont) == 0 &&
                <>
                    <p>O nome da rede Wi-Fi está aparecendo?</p>

                    <div className="buttons">

                        <div className="buttons_one">                           
                            <button className="btn" onClick={() => setCont("prox")}>SIM</button>
                            <button className="btn" onClick={() => setCont("ante")}>NÃO</button>
                        </div>

                        <div className="buttons_two">
                            <button className="btn" onClick={() => setCont("reload")}>Reiniciar</button>
                            <button className="btn" onClick={() => setCont("back")}>Voltar</button>    
                        </div>

                    </div>
                </>
             
            }
            
            {(cont) != "" &&
                <>             
                    {PageDisplay()}
                </>
            }

        </> 
        
    );
}

export default Passo02;
