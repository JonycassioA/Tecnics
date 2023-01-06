
import { Routes, Route } from 'react-router-dom'

import Step01 from '../../Steps/AlterPlane/step01'
import Step02 from '../../Steps/AlterPlane/step02'
import Step03 from '../../Steps/AlterPlane/step03'
import Step04 from '../../Steps/AlterPlane/step04'
import ReportGenerator from '../../Steps/AlterPlane/reportGenerator'

function RoutesChildrenOne({ register, watch, handleSubmit, setValue, getValues, reset }) {
  
  return (
    <Routes>
      <Route path="AlterPlane/step01" element={<Step01 register={register} handleSubmit={handleSubmit} watch={watch} setValue={setValue} reset={reset} />}/>
      <Route path="AlterPlane/step02" element={<Step02 register={register} handleSubmit={handleSubmit} watch={watch} setValue={setValue} reset={reset}/>}/>
      <Route path="AlterPlane/step03" element={<Step03 register={register} handleSubmit={handleSubmit} watch={watch} setValue={setValue} reset={reset}/>}/>
      <Route path="AlterPlane/step04" element={<Step04 register={register} handleSubmit={handleSubmit} watch={watch} setValue={setValue} reset={reset}/>}/>
      <Route path="AlterPlane/generator" element={<ReportGenerator watch={watch} setValue={setValue} getValues={getValues} reset={reset}/>}/>
    </Routes>
  )
}

export default RoutesChildrenOne
