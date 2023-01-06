import './Components.css'

function InputNumber({ register, id, place }) {

  return (
    <div>
      <input
        className="number"
        type="text"
        {...register(id, { required: 'isso é requerido' })}
        placeholder={place}
      />
    </div>
  )
}

export default InputNumber
