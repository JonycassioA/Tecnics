import Container from "../../Components/Containers/Container";
import React, { useState } from "react";
import Equipamento from './equipamento'
import Status from './status'
import Leds from './leds'
import PagResult2 from './pag_result2'

function Passo02({register}) {

    const [cont, setCont] = useState(0);

  

    const PageDisplay = () => {
        console.log(cont)       
        if(cont == "prox")return <PagResult2 register={register} />;
        if(cont == "ante")return <Leds register={register} />;
        if(cont == "reload")return <Equipamento register={register} />;
        if(cont == "back")return <Status register={register} />;
    } 

  
     
    
  
    return (
        
        <>

            {(cont) == 0 &&
                <>
                    <p>O motivo da última desconexão foi por LOS?</p>

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
