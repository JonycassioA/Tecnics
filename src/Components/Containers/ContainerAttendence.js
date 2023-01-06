import Container from "./Container";
import ContainerOptions from "./ContainerOptions";


function ContainerAttendence({ register, id_One, id_Two, id_Three, id_Four, id_Five, id_Six, watch, setValue }) {
  console.log(watch("StepTreeQuest22"))
  return (
    <>
      <ContainerOptions
        question="Forma de Atendimento: "
        id_question={id_One}
        valueOne="Presencial"
        valueTwo="SmartISP – Online"
        valueTree="Chatguru - Online"
        valueFour="Native Infinity – Telefônico"
        valueFive="WhatsApp Loja"
        orientation="colum"
        register={register}
      />
    
      {watch(`${id_One}`) === "Presencial" && (
        <ContainerOptions
          question="Foi feito por: "
          id_question={id_Two}
          valueOne="Loja"
          valueTwo="Em Campo"
          orientation="row"
          register={register}
        />
      )}
    

      {watch(`${id_One}`) === "WhatsApp Loja" && (
        <Container
          question="Informe a loja: "
          id_question={id_Three}
          answer="Text"
          register={register}
        />
      )}

      {watch(`${id_One}`) === "Presencial" &&
        watch(`${id_Two}`) === "Loja" && (
          <Container
            question="Informe a loja: "
            id_question={id_Three}
            answer="Text"
            register={register}
          />
        )}

      {watch(`${id_One}`) === "Presencial" &&
        watch(`${id_Two}`) === "Em Campo" && (
          <Container
            question="Informe o atendente de campo: "
            id_question={id_Three}
            answer="Text"
            register={register}
          />
        )}

      {watch(`${id_One}`) === "SmartISP – Online" && (
        <Container
          question="Informe o protocolo de atendimento (da plataforma): "
          id_question={id_Three}
          answer="Text"
          register={register}
        />
      )}

      {(watch(`${id_One}`) === "Chatguru - Online") |
      (watch(`${id_One}`) === "Native Infinity – Telefônico") ? (
        <Container
          question="Informe o número do cliente que foi feita a conversa sobre atualização: "
          id_question={id_Four}
          answer="Telephone"
          place="(xx) x xxxx-xxxx"
          register={register}
        />
      ) : (
        ""
      )}

      {(watch(`${id_One}`) === "Chatguru - Online") |
      (watch(`${id_One}`) === "Native Infinity – Telefônico") ? (
        <Container
          question="Data / Horário da conversa: "
          id_hour={id_Five}
          id_date={id_Six}
          answer="HourDate"
          register={register}
          setValue={setValue}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default ContainerAttendence;
