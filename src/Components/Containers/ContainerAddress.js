import InputRadio from "../Inputs/InputRadio";
import InputText from "../Inputs/InputText";
import InputCep from "../Inputs/InputCep";
import "./ContainerStyle.css";

function ContainerAddress({ 
  question, 
  id_type, 
  id_street, 
  id_number,
  id_district, 
  id_cep,
  register, 
}) {
  
  return (
    <div className="container">
      <div className="question">
        <p>{question}</p>
      </div>
      <div className={"optionsAddress"}>
        <label className="LabelAddress">
          Residência: 
          <InputRadio id={id_type} value="casa" label="Casa" register={register} />
          <InputRadio id={id_type} value="apartamento" label="Apartamento" register={register} />
          <InputRadio id={id_type} value="outros" label="Outros"  register={register} />
        </label>
        <div>
          <label className="LabelAddress">Rua:</label>
          <InputText id={id_street} register={register} place="..." />
        </div>
        <div>
          <label className="LabelAddress">Número:</label>
          <InputText id={id_number} register={register} place="..."/>
        </div>
        <div>
          <label className="LabelAddress">Bairro:</label>
          <InputText id={id_district} register={register} place="..."/>
        </div>
        {(!!id_cep) && (
          <div>
            <label className="LabelAddress">Cep:</label>
            <InputCep id={id_cep} register={register} place="xxxxx-xxx"/>  
          </div>     
        )}
       
      </div>
    </div>
  );
}

export default ContainerAddress;
