import './Components.css'
function InputRadio(props) {
  const { register, id, stylized, valueOne, valueTwo } = props
 
  return (
    <>
      {stylized === true ? (
        <div className="InputRadio">
          <div>
            <label className="label">
              <input className="input" {...register(props.id, { required: 'isso é requerido' })} type="radio" value={valueOne} />
              {valueOne}
            </label>
          </div>

          <div>
            <label className="label">
              <input className="input" {...register(props.id, { required: 'isso é requerido' })} type="radio" value={valueTwo}/>
              {valueTwo}
            </label>
          </div>
        </div>
      ):(
      <div className="InputRadio">
        <div>
        <label className="label">
          <input className="input" {...register(props.id, { required: 'isso é requerido' })} type="radio" value="sim" />
          Sim
        </label>
        </div>

        <div>
        <label className="label">
          <input className="input" {...register(props.id, { required: 'isso é requerido' })} type="radio" value="não"/>
          Não
        </label>
        </div>
      </div>
      )} 
    </>
  )
}

export default InputRadio
