import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import updateAction from "../AlterPlane/updateAction";
import { useStateMachine } from "little-state-machine";
import Container from "../../Components/Containers/Container";
import ContainerOptions from "../../Components/Containers/ContainerOptions";
import ContainerMensage from "../../Components/Containers/ContainerMensage";
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

    relate[6] = "INFORMAÇÕES DA ATUALIZAÇÃO\n\n";

    relate[6] += "Plano atual do cliente: " + watch("StepTreeQuest01") + "\n";

    relate[7] = "Plano atualizado: " + watch("StepTreeQuest02") + "\n";

    if (watch("StepTreeQuest03") === "sim") {
      relate[8] =
        "Possui necessidade de alteração de equipamento?  ( X ) Sim  (   ) Não\n";
      if (watch("StepTreeQuest04") === "sim") {
        relate[8] +=
          "Foi aberto o protocolo de troca de equipamento?  ( X ) Sim  (   ) Não\n";
      } else {
        relate[8] +=
          "Foi aberto o protocolo de troca de equipamento?  (   ) Sim  ( X ) Não\n";
      }
    } else {
      relate[8] =
        "Possui necessidade de alteração de equipamento?  (   ) Sim  ( X ) Não\n";
    }

    if (watch("StepTreeQuest05") === "sim") {
      relate[9] =
        "Possui alteração de valor de fatura?  ( X ) Sim  (   ) Não\nValor de alteração: " +
        watch("StepTreeQuest06") +
        "\n";
    } else {
      relate[9] =
        "Possui alteração de valor de fatura?  (   ) Sim  ( X ) Não\n";
    }

    if (watch("StepTreeQuest07") === "não") {
      relate[9] += "Haverá renovação de fidelidade?  (   ) Sim  ( X ) Não\n";
    } else {
      relate[9] += "Haverá renovação de fidelidade?  ( X ) Sim  (   ) Não\n";
      if (watch("StepTreeQuest08") === "sim") {
        relate[9] +=
          "Cliente ciente da renovação de fidelidade e custos relacionados (multa e valores)?  ( X ) Sim  (   ) Não\n";
      } else {
        relate[9] +=
          "Cliente ciente da renovação de fidelidade e custos relacionados (multa e valores)?  (   ) Sim  ( X ) Não\nInforme o Motivo: " +
          watch("StepTreeQuestResp") +
          "\n";
      }
    }

    if (watch("StepTreeQuest09") === "Em Campo / Externo")
      relate[9] +=
        "Forma de Atendimento:\n ( X ) Em Campo / Externo\n (   ) SmartISP – Online\n (   ) Chatguru - Online\n (   ) Native Infinity – Telefônico\n (   ) Loja / WhatsApp Loja\nAtendente de campo: " + watch("StepTreeQuest10") + "\n";;
    if (watch("StepTreeQuest09") === "SmartISP – Online")
      relate[9] +=
        "Forma de Atendimento:\n (   ) Em Campo / Externo\n ( X ) SmartISP – Online\n (   ) Chatguru - Online\n (   ) Native Infinity – Telefônico\n (   ) Loja / WhatsApp Loja\nProtocolo:" + watch("StepTreeQuest11") + "\n";
    if (watch("StepTreeQuest09") === "Chatguru - Online")
      relate[9] +=
        "Forma de Atendimento:\n (   ) Em Campo / Externo\n (   ) SmartISP – Online\n ( X ) Chatguru - Online\n (   ) Native Infinity – Telefônico\n (   ) Loja / WhatsApp Loja\n";
    if (watch("StepTreeQuest09") === "Native Infinity – Telefônico")
      relate[9] +=
        "Forma de Atendimento:\n (   ) Em Campo / Externo\n (   ) SmartISP – Online\n (   ) Chatguru - Online\n ( X ) Native Infinity – Telefônico\n (   ) Loja / WhatsApp Loja\n";
    if (watch("StepTreeQuest09") === "Loja / WhatsApp Loja")
      relate[9] +=
        "Forma de Atendimento:\n (   ) Em Campo / Externo\n (   ) SmartISP – Online\n (   ) Chatguru - Online\n (   ) Native Infinity – Telefônico\n ( X ) Loja / WhatsApp Loja\nLoja: " + watch("StepTreeQuest15") + "\n";


    if (watch("StepTreeQuest09") === "Chatguru - Online") {
      relate[9] += "Número do cliente: " + watch("StepTreeQuest12") + "\n";
      relate[9] += "Horário da conversa: " + watch("StepTreeQuest13") + "\n";
      relate[9] += "Data da conversa: " + watch("StepTreeQuest14") + "\n\n";
    }
    if (watch("StepTreeQuest09") === "Native Infinity – Telefônico") {
      relate[9] += "Número do cliente: " + watch("StepTreeQuest12") + "\n";
      relate[9] += "Horário da conversa: " + watch("StepTreeQuest13") + "\n";
      relate[9] += "Data da conversa: " + watch("StepTreeQuest14") + "\n\n";
    }

    setValue("relate", relate);
    console.log("relate", watch("relate"));
  };

  const onSubmit = (data) => {
    actions.updateAction(data);
    answerRelate();

    setValue("page", 3);
    paginas("/AlterPlane/step04");
  };

  return (
    <form ref={ref} className="form" onSubmit={handleSubmit(onSubmit)}>
      <Container
        question="Plano Anterior do Cliente: "
        id_question="StepTreeQuest01"
        answer="Text"
        place="Informe..."
        register={register}
      />

      <Container
        question="Plano Atualizado:  "
        id_question="StepTreeQuest02"
        answer="Text"
        place="Informe..."
        register={register}
      />

      <Container
        question="Possui necessidade de alteração de equipamento?"
        id_question="StepTreeQuest03"
        answer="Binario"
        register={register}
      />

      {watch("StepTreeQuest03") === "sim" && (
        <Container
          question="Foi aberto o protocolo de troca de equipamento? "
          id_question="StepTreeQuest04"
          answer="Binario"
          register={register}
        />
      )}

      <Container
        question="Possui alteração de valor de fatura? "
        id_question="StepTreeQuest05"
        answer="Binario"
        register={register}
      />

      {watch("StepTreeQuest05") === "sim" && (
        <Container
          question="Informe o valor de alteração: "
          id_question="StepTreeQuest06"
          answer="Number"
          register={register}
        />
      )}

      <Container
        question="Haverá renovação de fidelidade? "
        id_question="StepTreeQuest07"
        answer="Binario"
        register={register}
      />

      {watch("StepTreeQuest07") === "sim" && (
        <ContainerMensage mensage="É importante falar sobre a renovação de fidelidade e custos para que o cliente não seja surpreendido posteriormente sobre essas taxas." />
      )}

      {watch("StepTreeQuest07") === "sim" && (
        <Container
          question="Cliente ciente da renovação de fidelidade e custos relacionados (multa e valores)? "
          id_question="StepTreeQuest08"
          answer="Binario"
          register={register}
        />
      )}

      {watch("StepTreeQuest07") === "sim" &&
        watch("StepTreeQuest08") === "não" && (
          <Container
            question="Informe o motivo: "
            id_question="StepTreeQuestResp"
            answer="Description"
            register={register}
          />
        )}

      <ContainerOptions
        question="Forma de Atendimento: "
        id_question="StepTreeQuest09"
        valueOne="Em Campo / Externo"
        valueTwo="SmartISP – Online"
        valueTree="Chatguru - Online"
        valueFour="Native Infinity – Telefônico"
        valueFive="Loja / WhatsApp Loja"
        orientation="colum"
        register={register}
      />

      {watch("StepTreeQuest09") === "Em Campo / Externo" && (
        <Container
          question="Informe o atendente de campo: "
          id_question="StepTreeQuest10"
          answer="Text"
          register={register}
        />
      )}

      {watch("StepTreeQuest09") === "Loja / WhatsApp Loja" && (
        <Container
          question="Informe a loja: "
          id_question="StepTreeQuest15"
          answer="Text"
          register={register}
        />
      )}

      {watch("StepTreeQuest09") === "SmartISP – Online" && (
        <Container
          question="Informe o protocolo de atendimento (da plataforma): "
          id_question="StepTreeQuest11"
          answer="Text"
          register={register}
        />
      )}

      {(watch("StepTreeQuest09") === "Chatguru - Online") |
      (watch("StepTreeQuest09") === "Native Infinity – Telefônico") ? (
        <Container
          question="Informe o número do cliente que foi feita a conversa sobre atualização: "
          id_question="StepTreeQuest12"
          answer="Telephone"
          place="(xx) x xxxx-xxxx"
          register={register}
        />
      ) : (
        ""
      )}

      {(watch("StepTreeQuest09") === "Chatguru - Online") |
      (watch("StepTreeQuest09") === "Native Infinity – Telefônico") ? (
        <Container
          question="Data / Horário da conversa: "
          id_hour="StepTreeQuest13"
          id_date="StepTreeQuest14"
          answer="HourDate"
          register={register}
          setValue={setValue}
        />
      ) : (
        ""
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
              paginas("/AlterPlane/step02");
            }}
          />
          <input className="button-next" type="submit" value="Próxima" />
        </div>
      </div>
    </form>
  );
}

export default Step03;
