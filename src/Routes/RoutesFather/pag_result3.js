import Container from "../../Components/Containers/Container";
import React, { useState } from "react";
import Nome_wifi from './nome_wifi'
import Equipamento from './equipamento'

function Passo02({register}) {

    const [cont, setCont] = useState("");

    
    const PageDisplay = () => {
        console.log(cont)       
        if(cont == "reload")return <Equipamento register={register} />;
        if(cont == "back")return <Nome_wifi register={register} />;
    }  
    
  
    return (
        
        <>

            {(cont) == 0 &&
                <>
                    <p>Acessar técnica: <mark>Problema entre ONU e Roteador</mark> </p>              

                    <div className="buttons">

                        <div className="buttons_back">
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
