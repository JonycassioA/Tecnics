
import { Routes, Route } from 'react-router-dom'

import Step01 from '../../Steps/FiberActivation/step01'
import Step02 from '../../Steps/FiberActivation/step02'
import Step03 from '../../Steps/FiberActivation/step03'
import ReportGenerator from '../../Steps/FiberActivation/reportGenerator'

function RoutesChildrenThree({ register, watch, handleSubmit, setValue, getValues, reset }) {
  
  return (
   
    <Routes>
      <Route path="/FiberActivation/step01" element={<Step01 register={register} handleSubmit={handleSubmit} watch={watch} setValue={setValue} reset={reset} />}/>
      <Route path="/FiberActivation/step02" element={<Step02 register={register} handleSubmit={handleSubmit} watch={watch} setValue={setValue} reset={reset}/>}/>
      <Route path="/FiberActivation/step03" element={<Step03 register={register} handleSubmit={handleSubmit} watch={watch} setValue={setValue} reset={reset}/>}/>
      <Route path="/FiberActivation/generator" element={<ReportGenerator watch={watch} setValue={setValue} getValues={getValues} reset={reset}/>}/>
    </Routes>
       
  )
}

export default RoutesChildrenThree
