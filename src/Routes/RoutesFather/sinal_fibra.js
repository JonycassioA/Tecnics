import Container from "../../Components/Containers/Container";
import React, { useState } from "react";
import Pppoe from './pppoe'
import Resultado from './pag_result2'
import Equipamento from './equipamento'

function Passo02({register}) {

    const [cont, setCont] = useState("");

  
    const PageDisplay = () => {
        console.log(cont)       
        //if(cont == "prox")return <PagResult register={register} />;
        if(cont == "ante")return <Resultado register={register} />;
        if(cont == "reload")return <Equipamento register={register} />;
        if(cont == "back")return <Pppoe register={register} />;
    }   
    
  
    return (
        
        <>

            {(cont) == 0 &&
                <>
                    <p>O sinal da fibra está dentro do limiar de funcionamento (-27dBm)?</p>

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
