import './Components.css'
function TextArea(props) {
  const { register, id, place } = props

  return (
    <div>
      <input
        className="text"
        {...register(props.id, { required: 'isso é requerido' })}
        type="text"
        placeholder={props.place}
      />
    </div>
  )
}

export default TextArea
