import "./Components.css";
function InputRadio(props) {
  const { register, id, value, label } = props;

  return (
    <div>
      <label className="label">
        <input className="input" type="radio" value={props.value} {...register(props.id, { required: "isso é requerido" })}/>
        {props.label}
      </label>
    </div>
  );
}

export default InputRadio;
