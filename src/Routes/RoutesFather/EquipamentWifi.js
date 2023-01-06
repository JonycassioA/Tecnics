import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import Container from "../../Components/Containers/Container";
//import Equipamento from "../RoutesFather/equipamento"
import Status from "./status"
import ONU1 from '../../images/Digistar 21000.png'
import ONU2 from '../../images/Digistar-31000.png'
import ONU3 from '../../images/EG8145V5-Huawei.png'
import ONU4 from '../../images/Fiberhome-5506-01-A.png'
import ONU5 from '../../images/Fiberhome-5506-01-B.png'

import ONU6 from '../../images/HG8010H-Huawei.png'
import ONU7 from '../../images/HG8120H-Huawei.png'
import ONU8 from '../../images/Intelbras-110A.png'
import ONU9 from '../../images/Intelbras-110B.png'
import ONU10 from '../../images/Intelbras-110G.png'
import ONU11 from '../../images/ZTE-F601.png'
import ONU12 from '../../images/ZTE-F670L-V9.png'
import ONU13 from '../../images/ZTE-F670L.png'
import ONU14 from '../../images/ZTE-F680.png'
import ONU15 from '../../images/ZTE-F6600.png'

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
            
            <option className="option" value="ONU3">EG8145V5 Huawei</option>            
            <option className="option" value="ONU12">ZTE-F670L-V9</option>
            <option className="option" value="ONU13">ZTE-F670L</option>
            <option className="option" value="ONU14">ZTE-F680</option>
            <option className="option" value="ONU15">ZTE-F6600</option>
          </select>
          
          
          <div className="img-onu">

              { watch("Title") === "ONU1" &&
                <img src={ONU1} />
              }             
              { watch("Title") === "ONU2" &&
                <img src={ONU2} />
              }
              { watch("Title") === "ONU3" &&
                <img src={ONU3} />
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
              { watch("Title") === "ONU11" &&
                <img src={ONU11} />
              }
              { watch("Title") === "ONU12" &&
                <img src={ONU12} />
              }
              { watch("Title") === "ONU13" &&
                <img src={ONU13} />
              }
              { watch("Title") === "ONU14" &&
                <img src={ONU14} />
              }
              { watch("Title") === "ONU15" &&
                <img src={ONU15} />
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
