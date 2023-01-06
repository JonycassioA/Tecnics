import Container from "../../Components/Containers/Container";
import React, { useState } from "react";
import Power from './power'
import Equipamento from './equipamento'

function Passo02({register}) {

    const [cont, setCont] = useState("");

    
    const PageDisplay = () => {
        console.log(cont)       
        if(cont == "reload")return <Equipamento register={register} />;
        if(cont == "back")return <Power register={register} />;
    }  
    
  
    return (
        
        <>

            {(cont) == 0 &&
                <>
                    <p>Acessar técnica: <mark>ONU Desprovisionada</mark> </p>              

                    <div className="buttons">

                        <div className="buttons_back">
                            <button className="btn" onClick={() => setCont("reload")}>Reiniciar</button>
                            <div></div>    
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
