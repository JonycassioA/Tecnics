import Container from "../../Components/Containers/Container";
import React, { useState } from "react";
import Equipamento from './equipamento'
import Status from './status'
import Sinal_fibra from './sinal_fibra'
import Nome_wifi from './nome_wifi'

function Passo02({register}) {

    const [cont, setCont] = useState("");

  
    const PageDisplay = () => {
        console.log(cont)       
        if(cont == "prox")return <Sinal_fibra register={register} />;
        if(cont == "ante")return <Nome_wifi register={register} />;
        if(cont == "reload")return <Equipamento register={register} />;
        if(cont == "back")return <Status register={register} />;
    }   
    
  
    return (
        
        <>

            {(cont) == 0 &&
                <>
                    <p>O PPPoE está online?</p>

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
