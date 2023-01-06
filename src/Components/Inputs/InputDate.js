import './Components.css'
function TextArea(props) {
  const { register, id, place, setValue } = props

  let newDate = new Date()
  let day = newDate.getDate();
  let month = newDate.getMonth() + 1;
  if(day < 10) day = "0"+day
  if(month < 10) month = "0"+month
  let year = newDate.getFullYear();
  let current_hour = `${day}/${month}/${year}`

  setValue(`"${props.id}"`, current_hour)

  return (
    <div>
      <input
        className="text"
        {...register(props.id, { required: 'isso é requerido' })}
        type="date"
        placeholder={props.place}
      />
    </div>
  )
}

export default TextArea
