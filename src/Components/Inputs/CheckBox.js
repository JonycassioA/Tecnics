function CheckBox(props) {
  const { register, id, value, label } = props

  return (
    <div>
      <label className="label">
      <input className="input"
        {...register(props.id, { required: false })}
        type="checkbox"
        value={props.value}
      />
      {props.label}</label>
    </div>
  )
}

export default CheckBox
