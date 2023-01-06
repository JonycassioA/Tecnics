import "./Components.css";
import InputMask from "react-input-mask";

function TextArea(props) {
  const { register, id_hour, id_date, place, setValue } = props;

  let newDate = new Date();
  let hour = newDate.getHours();
  let minutes = newDate.getMinutes();
  if (hour < 10) hour = "0" + hour;
  if (minutes < 10) minutes = "0" + minutes;
  let current_hour = `${hour}:${minutes}`;

  setValue(`"${props.id_hour}"`, current_hour);

  let day = newDate.getDate();
  let month = newDate.getMonth() + 1;
  if (day < 10) day = "0" + day;
  if (month < 10) month = "0" + month;
  let year = newDate.getFullYear();
  let current_date = `${day}/${month}/${year}`;

  setValue(`"${props.id_date}"`, current_date);

  return (
    <div className="time">
      <div className="hour">
        <label className="label">Hora:</label>
        <input
          className="HourText"
          mask="99:99"
          {...register(props.id_hour, { required: "isso é requerido" })}
          type="text"
          placeholder={props.place}
        />
      </div>

      <div className="date">
        <label className="label">Date:</label>
        <input
          className="DateText"
          {...register(props.id_date, { required: "isso é requerido" })}
          type="text"
          placeholder={props.place}
        />
      </div>
    </div>
  );
}

export default TextArea;
