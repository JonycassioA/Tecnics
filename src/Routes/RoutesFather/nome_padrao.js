import Container from "../../Components/Containers/Container";
import React, { useState } from "react";
import Equipamento from './equipamento'
import Nome_wifi from './nome_wifi'
import Pag_result4 from './pag_result4'
import Pag_result5 from './pag_result5'

function Passo02({register}) {

    const [cont, setCont] = useState("");

  
    const PageDisplay = () => {
        console.log(cont)       
        if(cont === "prox")return <Pag_result4 register={register} />;
        if(cont === "ante")return <Pag_result5 register={register} />;
        if(cont === "reload")return <Equipamento register={register} />;
        if(cont === "back")return <Nome_wifi register={register} />;
    }   
    
  
    return (
        
        <>

            {(cont) == 0 &&
                <>
                    <p>Está aparecendo uma rede Wi-Fi: TP-Link | Multilaser_ZTE | Huawei | Virtex Preset?</p>

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
