import Container from "../../Components/Containers/Container";
import React, { useState } from "react";
import Los from './los'
import Pppoe from './pppoe'
import Equipamento from "./equipamento"

function Passo02({register}) {

    const [cont, setCont] = useState("");

    
    
    const PageDisplay = () => {
        console.log(cont)       
        if(cont == "prox")return <Pppoe register={register} />;
        if(cont == "ante")return <Los register={register} />;
        if(cont == "reload")return <Equipamento register={register} />;
        if(cont == "back")return <Equipamento register={register} />;
    } 
    
  
    return (
        
        <>

            {(cont) == 0 &&
                <>
                    <p>O status da ONU está online?</p>

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
