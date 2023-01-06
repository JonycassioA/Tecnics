import './Components.css'
function TextArea(props) {
  
  const { register, id, place } = props

  return (
    <div>
      <textarea
        rows="5"
        cols="100"
        className="TextArea"
        {...register(props.id, { required: 'isso é requerido' })}
        type="text"
        placeholder={props.place != undefined ? props.place : "Descreva...."}
      />
    </div>
  )
}

export default TextArea
