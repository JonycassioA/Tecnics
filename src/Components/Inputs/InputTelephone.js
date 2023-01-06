import './Components.css'
import InputMask from "react-input-mask";

function InputTelephone({ register, id, place }) {

  return (
    <div>
      <InputMask
        className="number"
        mask="(99) 9 9999-9999"
        {...register(id, { required: 'isso é requerido' })}
        placeholder={place}
      />
    </div>
  )
}

export default InputTelephone
