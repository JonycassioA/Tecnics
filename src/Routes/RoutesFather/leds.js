import Container from "../../Components/Containers/Container";
import React, { useState } from "react";
import Equipamento from './equipamento'
import Los from './los'
import Pon from './pon'
import Power from './power'

function Passo02({register}) {

    const [cont, setCont] = useState("");


    const PageDisplay = () => {
        console.log(cont)       
        if(cont == "prox")return <Pon register={register} />;
        if(cont == "ante")return <Power register={register} />;
        if(cont == "reload")return <Equipamento register={register} />;
        if(cont == "back")return <Los register={register} />;
    } 

  
     
    
  
    return (
        
        <>

            {(cont) == 0 &&
                <>
                    <p>A ONU está com os LEDs acesos?</p>

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
