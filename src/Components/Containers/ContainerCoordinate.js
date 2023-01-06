import InputText from "../Inputs/InputText";
import "./ContainerStyle.css";

function ContainerCoordinate({
  question,
  id_refOne,
  id_refTwo,
  id_coordinate,
  register,
}) {
  return (
    <div className="container">
      <div className="question">
        <p>{question}</p>
      </div>
      <div className="optionsCoordinate">
        <div className="coord">
          <label className="LabelCoordinate">Ponto de Referência 01:</label>
          <InputText id={id_refOne} register={register} place="Informe..." />
        </div>

        <div className="coord">
          <label className="LabelCoordinate">
            Ponto de Referência 02 (Opcional):
          </label>
          <input
            className="text"
            {...register(id_refTwo, { required: false })}
            type="text"
            placeholder="Informe..."
          />
        </div>

        <div className="coord">
          <label className="LabelCoordinate">Coordenadas:</label>
          <InputText
            id={id_coordinate}
            register={register}
            place="Informe..."
          />
        </div>
      </div>
    </div>
  );
}

export default ContainerCoordinate;
