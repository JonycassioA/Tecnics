import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import Container from "../../Components/Containers/Container";
import Wifi from "./EquipamentWifi"
import Onu from "./EquipamentOnu"
import './Routes.css'


function App() {

  const { register, watch, handleSubmit, setValue, getValues, reset } = useForm({
    defaultValues: {
      page: 0,
      sideBar: 0,
      relate: [] 
    },
  });

  

  const [cont, setCont] = useState("");


  const PageDisplay = () => {
      console.log(cont)       
      if(cont === "WIFI")return <Wifi register={register} />;
      if(cont === "BRIDGE")return <Onu register={register} />;
  }



  
  return (
    <div className="body-principal">

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

  </div> 
    
  )
}

export default App
