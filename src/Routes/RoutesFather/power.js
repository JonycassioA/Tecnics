import Container from "../../Components/Containers/Container";
import React, { useState } from "react";
import Equipamento from './equipamento'
import Leds from './leds'
import PagResult1 from './pag_result1'
import PagResult6 from './pag_result6'

function Passo02({register}) {

    const [cont, setCont] = useState("");

    

    const PageDisplay = () => {
        console.log(cont)       
        if(cont == "prox")return <PagResult6 register={register} />;
        if(cont == "ante")return <PagResult1 register={register} />;
        if(cont == "reload")return <Equipamento register={register} />;
        if(cont == "back")return <Leds register={register} />;
    }

  
     
    
  
    return (
        
        <>

            {(cont) == 0 &&
                <>
                    <p>O botão power está ligado?</p>

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
            
            {(cont) != 0 &&
                <>             
                    {PageDisplay()}
                </>
            }

        </> 
        
    );
}

export default Passo02;
