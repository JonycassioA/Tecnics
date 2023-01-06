
import { Routes, Route } from 'react-router-dom'

import Step01 from '../../Steps/MMA/step01'
import Step02 from '../../Steps/MMA/step02'
import Step03 from '../../Steps/MMA/step03'
import Step04 from '../../Steps/MMA/step04'
import ReportGenerator from '../../Steps/MMA/reportGenerator'

function RoutesChildrenFour({ register, watch, handleSubmit, setValue, getValues, reset }) {
  
  return (
   
    <Routes>
      <Route path="/mma/step01" element={<Step01 register={register} handleSubmit={handleSubmit} watch={watch} setValue={setValue} reset={reset} />}/>
      <Route path="/mma/step02" element={<Step02 register={register} handleSubmit={handleSubmit} watch={watch} setValue={setValue} reset={reset}/>}/>
      <Route path="/mma/step03" element={<Step03 register={register} handleSubmit={handleSubmit} watch={watch} setValue={setValue} reset={reset}/>}/>
      <Route path="/mma/step04" element={<Step04 register={register} handleSubmit={handleSubmit} watch={watch} setValue={setValue} reset={reset}/>}/>
      <Route path="/mma/generator" element={<ReportGenerator watch={watch} setValue={setValue} getValues={getValues} reset={reset}/>}/>
    </Routes>
       
  )
}

export default RoutesChildrenFour
