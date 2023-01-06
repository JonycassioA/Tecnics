import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import Container from "../../Components/Containers/Container";
//import Equipamento from "../RoutesFather/equipamento"
import Status from "./status"
import ONU1 from '../../images/Digistar 21000.png'
import ONU2 from '../../images/Digistar-31000.png'
import ONU4 from '../../images/Fiberhome-5506-01-A.png'
import ONU5 from '../../images/Fiberhome-5506-01-B.png'
import ONU6 from '../../images/HG8010H-Huawei.png'
import ONU7 from '../../images/HG8120H-Huawei.png'
import ONU8 from '../../images/Intelbras-110A.png'
import ONU9 from '../../images/Intelbras-110B.png'
import ONU10 from '../../images/Intelbras-110G.png'


import './Routes.css'


function App() {

  const { register, watch, handleSubmit, setValue, getValues, reset } = useForm({
    defaultValues: {
      page: 0,
      sideBar: 0,
      relate: [] 
    },
  });

  

  function PageDisplay(){
    return <Status register={register}/>
  }



  
  return (
    <div className="body-form">

      <div className="container_quest">

        <div className="content_two">

          <select className="select" {...register("Title", { required: true })}>
            <option className="option" value="vazio" >-- Selecione a ONU/Roteador --</option>
            <option className="option" value="ONU1">Digistar 21000</option>
            <option className="option" value="ONU2">Digistar 31000</option>
            <option className="option" value="ONU4">Fiberhome 5506-01-A</option>
            <option className="option" value="ONU5">Fiberhome 5506-01-B</option>
            <option className="option" value="ONU6">HG8010H-Huawei</option>
            <option className="option" value="ONU7">HG8120H-Huawei</option>
            <option className="option" value="ONU8">Intelbras-110A</option>
            <option className="option" value="ONU9">Intelbras-110B</option>
            <option className="option" value="ONU10">Intelbras-110G</option>           
          </select>
          
          
          <div className="img-onu">

              { watch("Title") === "ONU1" &&
                <img src={ONU1} />
              }             
              { watch("Title") === "ONU2" &&
                <img src={ONU2} />
              }
              { watch("Title") === "ONU4" &&
                <img src={ONU4} />
              }
              { watch("Title") === "ONU5" &&
                <img src={ONU5} />
              }
              { watch("Title") === "ONU6" &&
                <img src={ONU6} />
              }
              { watch("Title") === "ONU7" &&
                <img src={ONU7} />
              }
              { watch("Title") === "ONU8" &&
                <img src={ONU8} />
              }
              { watch("Title") === "ONU9" &&
                <img src={ONU9} />
              }
              { watch("Title") === "ONU10" &&
                <img src={ONU10} />
              }
              
              
          </div>
          
        </div>

        <div className="content_one">

          {PageDisplay()}

        </div>

      </div>
      
      
    </div> 
    
  )
}

export default App
