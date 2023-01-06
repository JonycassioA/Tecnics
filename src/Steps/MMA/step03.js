import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import updateAction from "../AlterPlane/updateAction";
import { useStateMachine } from "little-state-machine";
import Container from "../../Components/Containers/Container";
import ContainerOptions from "../../Components/Containers/ContainerOptions";


import "./style.css";

function Step03({ register, handleSubmit, watch, setValue, reset, clear }) {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.scrollIntoView({
      behavior: "smooth",
    });
  }, []);

  const { actions } = useStateMachine({ updateAction });

  const paginas = useNavigate();

  const answerRelate = () => {
    let relate = watch("relate");

    relate[6] = "INFORMAÇÕES DA MMA (Mudança de Meio de Acesso)\n\n";

    if (watch("StepTreeQuest01") === "Rádio para Fibra")
      relate[6] += "Categoria da mudança:\n ( X ) Rádio para Fibra\n (   ) Cabo para Fibra\n (   ) Fibra para Rádio\n (   ) Fibra para Cabo\n";
    if (watch("StepTreeQuest01") === "Cabo para Fibra")
      relate[6] += "Categoria da mudança:\n (   ) Rádio para Fibra\n ( X ) Cabo para Fibra\n (   ) Fibra para Rádio\n (   ) Fibra para Cabo\n";
    if (watch("StepTreeQuest01") === "Fibra para Rádio")
      relate[6] += "Categoria da mudança:\n (   ) Rádio para Fibra\n (   ) Cabo para Fibra\n ( X ) Fibra para Rádio\n (   ) Fibra para Cabo\n";
    if (watch("StepTreeQuest01") === "Fibra para Rádio")
      relate[6] += "Categoria da mudança:\n (   ) Rádio para Fibra\n (   ) Cabo para Fibra\n (   ) Fibra para Rádio\n ( X ) Fibra para Cabo\n";

    relate[6] += "Plano anterior do cliente: " + watch("StepTreeQuest02") + "\n";

    relate[6] += "Plano atualizado: " + watch("StepTreeQuest03") + "\n";

    if (watch("StepTreeQuest04") === "sim") {
      relate[6] +=
        "Possui alteração de valor de fatura?  ( X ) Sim  (   ) Não\nValor de alteração: " +
        watch("StepTreeQuest05") +
        "\n";
    } else {
      relate[6] +=
        "Possui alteração de valor de fatura?  (   ) Sim  ( X ) Não\n";
    }

    relate[7] = "Equipamentos do cliente: " + watch("StepTreeQuest06") + "\n";

    if (watch("StepTreeQuest07") === "sim") {
      relate[7] += "Termo de Contratação assinado: ( X ) Sim  (   ) Não\n";
    } else {
      relate[7] +=
        "Termo de Contratação assinado: (   ) Sim  ( X ) Não\nMotivo: " +
        watch("StepTreeQuest08") +
        "\n";
    }

    if (watch("StepTreeQuest09") === "sim") {
      relate[7] += "Contrato de Permanência assinado: ( X ) Sim  (   ) Não\n";
    } else {
      relate[7] +=
        "Contrato de Permanência assinado: (   ) Sim  ( X ) Não\nMotivo: " +
        watch("StepTreeQuest10") +
        "\n";
    }

    relate[7] += "Dia para o pagamento: " + watch("StepTreeQuest11") + "\n";

    relate[8] = "Coordenadas: " + watch("StepTreeQuest12") + "\n";


    if (watch("StepTreeQuest13") === "sim") {
      relate[8] += "Haverá taxa de Serviço: ( X ) Sim  (   ) Não\n";
      relate[8] += "Valor Taxa: R$" + watch("StepTreeQuest14") + "\n";
    } else {
      relate[8] += "Haverá taxa de Serviço: (   ) Sim  ( X ) Não\n";
    }

   
    if (watch("StepTreeQuest15") === "Sim") {
      relate[9] =
        "Cliente ciente da renovação de fidelidade: ( X ) Sim  (   ) Não  (   ) Sem Renovação\n"

      if (watch("StepTreeQuest16") === "Em Campo / Externo")
        relate[9] +=
          "Forma de Atendimento:\n ( X ) Em Campo / Externo\n (   ) SmartISP – Online\n (   ) Chatguru - Online\n (   ) Native Infinity – Telefônico\n (   ) Loja / WhatsApp Loja\nAtendente de campo: " +
          watch("StepTreeQuest17") +
          "\n\n";
      if (watch("StepTreeQuest16") === "SmartISP – Online")
        relate[9] +=
          "Forma de Atendimento:\n (   ) Em Campo / Externo\n ( X ) SmartISP – Online\n (   ) Chatguru - Online\n (   ) Native Infinity – Telefônico\n (   ) Loja / WhatsApp Loja\nProtocolo:" +
          watch("StepTreeQuest19") +
          "\n\n";
      if (watch("StepTreeQuest16") === "Chatguru - Online")
        relate[9] +=
          "Forma de Atendimento:\n (   ) Em Campo / Externo\n (   ) SmartISP – Online\n ( X ) Chatguru - Online\n (   ) Native Infinity – Telefônico\n (   ) Loja / WhatsApp Loja\n";
      if (watch("StepTreeQuest16") === "Native Infinity – Telefônico")
        relate[9] +=
          "Forma de Atendimento:\n (   ) Em Campo / Externo\n (   ) SmartISP – Online\n (   ) Chatguru - Online\n ( X ) Native Infinity – Telefônico\n (   ) Loja / WhatsApp Loja\n";
      if (watch("StepTreeQuest16") === "Loja / WhatsApp Loja")
        relate[9] +=
          "Forma de Atendimento:\n (   ) Em Campo / Externo\n (   ) SmartISP – Online\n (   ) Chatguru - Online\n (   ) Native Infinity – Telefônico\n ( X ) Loja / WhatsApp Loja\nLoja: " +
          watch("StepTreeQuest18") +
          "\n\n";

      if (watch("StepTreeQuest16") === "Chatguru - Online") {
        relate[9] += "Número do cliente: " + watch("StepTreeQuest20") + "\n";
        relate[9] += "Horário da conversa: " + watch("StepTreeQuest21") + "\n";
        relate[9] += "Data da conversa: " + watch("StepTreeQuest22") + "\n\n";
      }
      if (watch("StepTreeQuest16") === "Native Infinity – Telefônico") {
        relate[9] += "Número do cliente: " + watch("StepTreeQuest20") + "\n";
        relate[9] += "Horário da conversa: " + watch("StepTreeQuest21") + "\n";
        relate[9] += "Data da conversa: " + watch("StepTreeQuest22") + "\n\n";      
      }
    }

    if (watch("StepTreeQuest15") === "Não") relate[9] = "Cliente ciente da renovação de fidelidade: (   ) Sim  ( X ) Não  (   ) Sem Renovação\n\n"
    if (watch("StepTreeQuest15") === "Sem Renovação") relate[9] = "Cliente ciente da renovação de fidelidade: (   ) Sim  (   ) Não  ( X ) Sem Renovação\n\n"

    setValue("relate", relate);
    console.log("relate", watch("relate"));
  };

  const onSubmit = (data) => {
    actions.updateAction(data);
    answerRelate();

    setValue("page", 3);
    paginas("/mma/step04");
  };

  return (
    <form ref={ref} className="form" onSubmit={handleSubmit(onSubmit)}>
      <ContainerOptions
        question="Categoria de Mudança:"
        id_question="StepTreeQuest01"
        valueOne="Rádio para Fibra"
        valueTwo="Cabo para Fibra"
        valueTree="Fibra para Rádio"
        valueFour="Fibra para Cabo"
        orientation="colum"
        register={register}
      />

      <Container
        question="Plano Anterior do Cliente: "
        id_question="StepTreeQuest02"
        answer="Text"
        place="Informe..."
        register={register}
      />

      <Container
        question="Plano Atualizado:  "
        id_question="StepTreeQuest03"
        answer="Text"
        place="Informe..."
        register={register}
      />

      <Container
        question="Possui alteração de valor de fatura? "
        id_question="StepTreeQuest04"
        answer="Binario"
        register={register}
      />

      {watch("StepTreeQuest04") === "sim" && (
        <Container
          question="Informe o valor de alteração: "
          id_question="StepTreeQuest05"
          answer="Number"
          register={register}
        />
      )}

      <Container
        question="Equipamentos do Cliente:  "
        id_question="StepTreeQuest06"
        answer="Description"
        register={register}
      />

      <Container
        question="Termo de contratação assinado: "
        id_question="StepTreeQuest07"
        answer="Binario"
        register={register}
      />

      {watch("StepTreeQuest07") === "não" && (
        <Container
          question="Informe o motivo: "
          id_question="StepTreeQuest08"
          answer="Description"
          register={register}
        />
      )}

      <Container
        question="Contrato de Permanência assinado: "
        id_question="StepTreeQuest09"
        answer="Binario"
        register={register}
      />

      {watch("StepTreeQuest09") === "não" && (
        <Container
          question="Informe o motivo: "
          id_question="StepTreeQuest10"
          answer="Description"
          register={register}
        />
      )}

      <Container
        question="Dia para o pagamento: "
        id_question="StepTreeQuest11"
        answer="Number"
        register={register}
      />

      <Container
        question="Coordenadas:"
        id_question="StepTreeQuest12"
        answer="Text"
        register={register}
      />

      <Container
        question="Haverá taxa de serviço? "
        id_question="StepTreeQuest13"
        answer="Binario"
        register={register}
      />

      {watch("StepTreeQuest13") === "sim" && (
        <Container
          question="Informe o valor da taxa: "
          id_question="StepTreeQuest14"
          answer="Text"
          place="R$0,00"
          watch={watch}
          register={register}
        />
      )}

      <ContainerOptions
        question="Cliente ciente da renovação de fidelidade: "
        id_question="StepTreeQuest15"
        valueOne="Sim"
        valueTwo="Não"
        valueTree="Sem Renovação"
        orientation="colum"
        register={register}
      />

      {watch("StepTreeQuest15") === "Sim" && (
        <>
          <ContainerOptions
            question="Forma de Atendimento: "
            id_question="StepTreeQuest16"
            valueOne="Em Campo / Externo"
            valueTwo="SmartISP – Online"
            valueTree="Chatguru - Online"
            valueFour="Native Infinity – Telefônico"
            valueFive="Loja / WhatsApp Loja"
            orientation="colum"
            register={register}
          />

          {watch("StepTreeQuest16") === "Em Campo / Externo" && (
            <Container
              question="Informe o atendente de campo: "
              id_question="StepTreeQuest17"
              answer="Text"
              register={register}
            />
          )}

          {watch("StepTreeQuest16") === "Loja / WhatsApp Loja" && (
            <Container
              question="Informe a loja: "
              id_question="StepTreeQuest18"
              answer="Text"
              register={register}
            />
          )}

          {watch("StepTreeQuest16") === "SmartISP – Online" && (
            <Container
              question="Informe o protocolo de atendimento (da plataforma): "
              id_question="StepTreeQuest19"
              answer="Text"
              register={register}
            />
          )}

          {(watch("StepTreeQuest16") === "Chatguru - Online") |
          (watch("StepTreeQuest16") === "Native Infinity – Telefônico") ? (
            <Container
              question="Informe o número do cliente que foi feita a conversa sobre atualização: "
              id_question="StepTreeQuest20"
              answer="Telephone"
              place="(xx) x xxxx-xxxx"
              register={register}
            />
          ) : (
            ""
          )}

          {(watch("StepTreeQuest16") === "Chatguru - Online") |
          (watch("StepTreeQuest16") === "Native Infinity – Telefônico") ? (
            <Container
              question="Data / Horário da conversa: "
              id_hour="StepTreeQuest21"
              id_date="StepTreeQuest22"
              answer="HourDate"
              register={register}
              setValue={setValue}
            />
          ) : (
            ""
          )}
        </>
      )}

      <div className="button">
        <input
          className="button-clear"
          type="button"
          value="Limpar campos"
          onClick={() => {
            reset(clear);
            setValue("page", 0);
            paginas("/");
          }}
        />

        <div className="button-navigate">
          <input
            className="button-previous"
            type="button"
            value="Voltar"
            onClick={() => {
              setValue("page", 1);
              paginas("/mma/step02");
            }}
          />
          <input className="button-next" type="submit" value="Próxima" />
        </div>
      </div>
    </form>
  );
}

export default Step03;
