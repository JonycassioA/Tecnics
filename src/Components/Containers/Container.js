import InputRadioBinario from "../Inputs/RadioBinario";
import InputRadio from "../Inputs/InputRadio";
import TextArea from "../Inputs/TextArea";
import InputText from '../Inputs/InputText'
import InputDate from '../Inputs/InputDate'
import InputHourDate from '../Inputs/InputHourDate'
import InputTelephone from "../Inputs/InputTelephone";
import InputNumber from "../Inputs/InputNumber";
import InputCurrency from "../Inputs/InputCurrency";
import "./ContainerStyle.css";

function Container({ 
  question, 
  id_question, 
  id_hour,
  id_date,
  answer, 
  display,
  place,
  register, 
  setValue,
  watch,
  mensage_botton
}) {
  
  return (
    <div className="container">
      <div className="question">
        <p>{question}</p>
      </div>
      <div className={answer != "Text" ? "options" : "optionsText"}>
        {answer === "Binario" && (
          <InputRadioBinario id={id_question} register={register} />
        )}
        {answer === "Description" && (
          <TextArea id={id_question} register={register} />
        )}
        {answer === "Telephone" && (
          <InputTelephone id={id_question} place={place} register={register} />
        )}
         {answer === "Number" && (
          <InputNumber id={id_question} place={place} register={register} />
        )}
        {answer === "Text" && (
          <InputText id={id_question} place={place} register={register} />
        )}
        {answer === "HourDate" && (
          <InputHourDate id_hour={id_hour} id_date={id_date} place={place} register={register} setValue={setValue}/>
        )}
        {answer === "Date" && (
          <InputDate id={id_question} place={place} register={register} setValue={setValue}/>
        )}
        {answer === "Currency" && (
          <InputCurrency id={id_question} place={place} register={register} />
        )}
      </div>
      {(!!mensage_botton) && (
        <div className="mensage">
          <p>{mensage_botton}</p>
        </div>
      )}
    </div>
  );
}

export default Container;
