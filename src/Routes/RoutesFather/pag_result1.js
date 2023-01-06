import Container from "../../Components/Containers/Container";
import React, { useState } from "react";
import Equipamento from './equipamento'
import P4 from './power'

function Passo02({register}) {

    const [cont, setCont] = useState(0);

    function mais(){
        setCont(cont + 1)
    }

    function reiniciar(){
        setCont(cont + 2)
    }

   

  
    const PageDisplay = () => {
        console.log(cont)
        if(cont == 1)return <P4 register={register} />;
        if(cont == 2)return <Equipamento register={register} />;
    }   
    
  
    return (
        
        <>

            {(cont) == 0 &&
                <>
                    <p>Acessar técnica: <mark>Botão Power ou Equipamento Desligado</mark>  </p>               

                    <div className="buttons">

                        <div className="buttons_back">
                            <button className="btn" onClick={reiniciar}>Reiniciar</button>
                            <button className="btn" onClick={mais}>Voltar</button>    
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
