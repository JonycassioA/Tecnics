import './Components.css'
import InputMask from "react-input-mask";

function InputCep({ register, id, place }) {

  return (
    <div>
      <InputMask
        className="number"
        mask="99999-999"
        {...register(id, { required: 'isso é requerido' })}
        placeholder={place}
      />
    </div>
  )
}

export default InputCep
