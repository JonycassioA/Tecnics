import CheckBox from "../Inputs/CheckBox";
import "./ContainerStyle.css";

function ContainerCheckBox({ 
  question, 
  id_question, 
  register, 
  valueOne, 
  valueTwo,
  valueTree,
  valueFour,
  valueFive,
  valueSix,
  valueSeven,
  orientation,
  fontSize
}) {
  
  return (
    <div className="container">
      <div className="question">
        <p>{question}</p>
      </div>
      <div className={orientation === 'colum' ? "options-plus" : "options"} style={{fontSize:fontSize +'px'}}>
        {(!!valueOne) && (<CheckBox id={id_question} value="true" label={valueOne} register={register} />)}
        {(!!valueTwo) && (<CheckBox id={id_question+"Op2"} value="true" label={valueTwo} register={register} />)}
        {(!!valueTree) && (<CheckBox id={id_question+"Op3"} value="true" label={valueTree} register={register} />)}
        {(!!valueFour) && (<CheckBox id={id_question+"Op4"} value="true" label={valueFour} register={register} />)}
        {(!!valueFive) && (<CheckBox id={id_question+"Op5"} value="true" label={valueFive} register={register} />)}
        {(!!valueSix) && (<CheckBox id={id_question+"Op6"} value="true" label={valueSix} register={register} />)}
        {(!!valueSeven) && (<CheckBox id={id_question+"Op7"} value="true" label={valueSeven} register={register} />)}
      </div>
    </div>
  );
}

export default ContainerCheckBox;
