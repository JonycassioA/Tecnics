
import { Routes, Route } from 'react-router-dom'

import Step01 from '../../Steps/AddressChange/step01'
import Step02 from '../../Steps/AddressChange/step02'
import Step03 from '../../Steps/AddressChange/step03'
import Step04 from '../../Steps/AddressChange/step04'
import ReportGenerator from '../../Steps/AddressChange/reportGenerator'

function RoutesChildrenTwo({ register, watch, handleSubmit, setValue, getValues, reset }) {
  
  return (
   
    <Routes>
      <Route path="/AddressChange/step01" element={<Step01 register={register} handleSubmit={handleSubmit} watch={watch} setValue={setValue} reset={reset} />}/>
      <Route path="/AddressChange/step02" element={<Step02 register={register} handleSubmit={handleSubmit} watch={watch} setValue={setValue} reset={reset}/>}/>
      <Route path="/AddressChange/step03" element={<Step03 register={register} handleSubmit={handleSubmit} watch={watch} setValue={setValue} reset={reset}/>}/>
      <Route path="/AddressChange/step04" element={<Step04 register={register} handleSubmit={handleSubmit} watch={watch} setValue={setValue} reset={reset}/>}/>
      <Route path="/AddressChange/generator" element={<ReportGenerator watch={watch} setValue={setValue} getValues={getValues} reset={reset}/>}/>
    </Routes>
       
  )
}

export default RoutesChildrenTwo
