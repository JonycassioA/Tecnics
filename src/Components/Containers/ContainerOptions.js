import InputRadio from "../Inputs/InputRadio";
import "./ContainerStyle.css";

function ContainerOptions({ 
  question, 
  id_question, 
  register, 
  mensage_botton,  
  valueOne, 
  valueTwo,
  valueTree,
  valueFour,
  valueFive,
  orientation,
  fontSize
}) {
  
  return (
    <div className="container">
      <div className="question">
        <p>{question}</p>
      </div>
      <div className={orientation === 'colum' ? "options-plus" : "options"} style={{fontSize:fontSize +'px'}}>
        {(!!valueOne) && (<InputRadio id={id_question} value={valueOne} label={valueOne} register={register} />)}
        {(!!valueTwo) && (<InputRadio id={id_question} value={valueTwo} label={valueTwo} register={register} />)}
        {(!!valueTree) && (<InputRadio id={id_question} value={valueTree} label={valueTree} register={register} />)}
        {(!!valueFour) && (<InputRadio id={id_question} value={valueFour} label={valueFour} register={register} />)}
        {(!!valueFive) && (<InputRadio id={id_question} value={valueFive} label={valueFive} register={register} />)}
      </div>
      {(!!mensage_botton) && (
        <div className="mensage">
          <p>{mensage_botton}</p>
        </div>
      )}
    </div>
  );
}

export default ContainerOptions;
