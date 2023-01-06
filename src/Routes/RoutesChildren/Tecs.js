
import { Routes, Route } from 'react-router-dom'

import Step01 from '../../Steps/Tecs/step01'


function RoutesChildrenFive({ register, watch, handleSubmit, setValue, getValues, reset }) {
  
  return (
   
    <Routes>
      <Route path="/tecs" element={<Step01 register={register} handleSubmit={handleSubmit} watch={watch} setValue={setValue} reset={reset} />}/>
    </Routes>
       
  )
}

export default RoutesChildrenFive
