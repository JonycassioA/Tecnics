import { BrowserRouter, Routes, Route } from 'react-router-dom'


function RoutePrincipal({
  
}) {
  
  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Step01 register={register} handleSubmit={handleSubmit} watch={watch} setValue={setValue} reset={reset} />}/>
        <Route path="/step02" element={<Step02 register={register} handleSubmit={handleSubmit} watch={watch} setValue={setValue} reset={reset}/>}/>
        <Route path="/step03" element={<Step03 register={register} handleSubmit={handleSubmit} watch={watch} setValue={setValue} reset={reset}/>}/>
        <Route path="/step04" element={<Step04 register={register} handleSubmit={handleSubmit} watch={watch} setValue={setValue} reset={reset}/>}/>
        <Route path="/step05" element={<Step05 register={register} handleSubmit={handleSubmit} watch={watch} setValue={setValue} reset={reset}/>}/>
        <Route path="/step06" element={<Step06 register={register} handleSubmit={handleSubmit} watch={watch} setValue={setValue} reset={reset}/>}/>
        <Route path="/generator" element={<ReportGenerator watch={watch} setValue={setValue} getValues={getValues} reset={reset}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutePrincipal
