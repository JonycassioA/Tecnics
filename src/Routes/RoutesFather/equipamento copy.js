import Container from "../../Components/Containers/Container";
import React, { useState } from "react";
import Status from './status'

function Passo02({register}) {

    const [cont, setCont] = useState("");


    const PageDisplay = () => {
        console.log(cont)       
        if(cont === "WIFI")return <Status register={register} />;
        if(cont === "BRIDGE")return <Status register={register} />;
    }
    
  
    return (
        
        <>

            {cont == "" &&
                <>
                    <div className="AP">

                        <p>Tipo de ONU:</p>

                        <div className="btn_equip">
                            <button className="btn" onClick={() => setCont("WIFI")}>WI-FI</button>
                            <button className="btn" onClick={() => setCont("BRIDGE")}>BRIDGE</button>         
                        </div>

                    </div>

                </>
             
            }
            
            {cont != "" &&
                <>             
                    {PageDisplay()}
                </>
            }

        </> 
        
    );
}

export default Passo02;
