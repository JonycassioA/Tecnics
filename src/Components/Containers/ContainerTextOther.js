import InputRadio from "../Inputs/InputRadio";
import InputText from "../Inputs/InputText";
import "./ContainerStyle.css";

function ContainerTextOther({
  question,
  id_question,
  register,
  watch,
  labelOne,
  labelTwo
}) {
  return (
    <div className="container">
      <div className="question">
        <p>{question}</p>
      </div>
      <div className="options-text-other">
        <div className="not-yes">
          <p>{labelOne}</p>
          <div className="inputs">
           <InputRadio id='condicao' value='sim' label='Sim' register={register} />
           <InputRadio id='condicao' value='nao' label='Não' register={register} />
          </div>
        </div>
        {watch('condicao') === "sim" && (
          <div className="condition">
            <p>{labelTwo}</p>
            <InputText id={id_question} register={register} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ContainerTextOther;
