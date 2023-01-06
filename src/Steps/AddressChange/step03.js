import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import updateAction from "../AlterPlane/updateAction";
import { useStateMachine } from "little-state-machine";
import Container from "../../Components/Containers/Container";
import AddressContainer from "../../Components/Containers/ContainerAddress";
import ContainerCheckBox from "../../Components/Containers/ContainerCheckBox";
import ContainerOptions from "../../Components/Containers/ContainerOptions";
import CoordenateContainer from "../../Components/Containers/ContainerCoordinate";

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

    relate[6] = "INFORMAÇÕES DA MUDANÇA DE ENDEREÇO\n\n";

    relate[6] += "ENDEREÇO ANTIGO\n";

    if (watch("StepTreeQuest01") === "casa")
      relate[6] += "Residência: ( X ) Casa  (   ) Apartamento  (   ) Outro\n";
    if (watch("StepTreeQuest01") === "apartamento")
      relate[6] += "Residência: (   ) Casa  ( X ) Apartamento  (   ) Outro\n";
    if (watch("StepTreeQuest01") === "outro")
      relate[6] += "Residência: (   ) Casa  (   ) Apartamento  ( X ) Outro\n";

    relate[6] += "Rua " + watch("StepTreeQuest02") + "\n";
    relate[6] += "Número " + watch("StepTreeQuest03") + "\n";
    relate[6] += "Bairro " + watch("StepTreeQuest04") + "\n\n";

    relate[7] = "NOVO ENDEREÇO\n";

    if (watch("StepTreeQuest05") === "casa")
      relate[7] += "Residência: ( X ) Casa  (   ) Apartamento  (   ) Outro\n";
    if (watch("StepTreeQuest05") === "apartamento")
      relate[7] += "Residência: (   ) Casa  ( X ) Apartamento  (   ) Outro\n";
    if (watch("StepTreeQuest05") === "outro")
      relate[7] += "Residência: (   ) Casa  (   ) Apartamento  ( X ) Outro\n";

    relate[7] += "Rua " + watch("StepTreeQuest06") + "\n";
    relate[7] += "Número " + watch("StepTreeQuest07") + "\n";
    relate[7] += "Bairro " + watch("StepTreeQuest08") + "\n";
    relate[7] += "Cep " + watch("StepTreeQuest09") + "\n\n";

    relate[8] = "REFERÊNCIA\n";
    relate[8] += "Ponto de Referência 01: " + watch("StepTreeQuest10") + "\n";
    if (!!watch("StepTreeQuest11"))
      relate[8] += "Ponto de Referência 02: " + watch("StepTreeQuest11") + "\n";
    relate[8] += "Coordenadas: " + watch("StepTreeQuest12") + "\n";

    relate[8] += "Equipamentos do Cliente: " + watch("StepTreeQuest13") + "\n";

    if (watch("StepTreeQuest14") === "sim") {
      relate[8] +=
        "Solicitado ao cliente para levar equipamentos para o novo endereço: ( X ) Sim  (   ) Não\n";
    } else {
      relate[8] +=
        "Solicitado ao cliente para levar equipamentos para o novo endereço: (   ) Sim  ( X ) Não\n";
    }

    relate[8] +=
      "Telefone para contato sobre agendamento do serviço: " +
      watch("StepTreeQuest15") +
      "\n";

    if (watch("StepTreeQuest16") === "sim") {
      relate[8] +=
        "Taxa de serviço: ( X ) Sim  (   ) Não\nValor: R$" +
        watch("StepTreeQuest17") +
        "\n";
    } else {
      relate[8] += "Taxa de serviço: (   ) Sim  ( X ) Não\n";
    }

    relate[9] = "Disponibilidade do Cliente:\n";

    if (watch("StepTreeQuest18") === "true") relate[9] += "-Manhã\n";
    if (watch("StepTreeQuest18Op2") === "true") relate[9] += "-Tarde\n";
    if (watch("StepTreeQuest18Op3") === "true") relate[9] += "-Noite\n";

    if (watch("StepTreeQuest19") === "sim") {
      relate[9] +=
        "Informado cobrança de taxa caso exceda 150 Metros: ( X ) Sim  (   ) Não\n";
    } else {
      relate[9] +=
        "Informado cobrança de taxa caso exceda 150 Metros: (   ) Sim  ( X ) Não\nMotivo: " +
        watch("StepTreeQuest20") +
        "\n";
    }

    if (watch("StepTreeQuest21") === "não") {
      relate[9] +=
        "Renovação contratual nesse serviço: (   ) Sim  ( X ) Não\n\n";
    } else {
      if (watch("StepTreeQuest22") === "Em Campo / Externo")
        relate[9] +=
          "Forma de Atendimento:\n ( X ) Em Campo / Externo\n (   ) SmartISP – Online\n (   ) Chatguru - Online\n (   ) Native Infinity – Telefônico\n (   ) Loja / WhatsApp Loja\nAtendente de campo: " +
          watch("StepTreeQuest23") +
          "\n";
      if (watch("StepTreeQuest22") === "SmartISP – Online")
        relate[9] +=
          "Forma de Atendimento:\n (   ) Em Campo / Externo\n ( X ) SmartISP – Online\n (   ) Chatguru - Online\n (   ) Native Infinity – Telefônico\n (   ) Loja / WhatsApp Loja\nProtocolo:" +
          watch("StepTreeQuest25") +
          "\n";
      if (watch("StepTreeQuest22") === "Chatguru - Online")
        relate[9] +=
          "Forma de Atendimento:\n (   ) Em Campo / Externo\n (   ) SmartISP – Online\n ( X ) Chatguru - Online\n (   ) Native Infinity – Telefônico\n (   ) Loja / WhatsApp Loja\n";
      if (watch("StepTreeQuest22") === "Native Infinity – Telefônico")
        relate[9] +=
          "Forma de Atendimento:\n (   ) Em Campo / Externo\n (   ) SmartISP – Online\n (   ) Chatguru - Online\n ( X ) Native Infinity – Telefônico\n (   ) Loja / WhatsApp Loja\n";
      if (watch("StepTreeQuest22") === "Loja / WhatsApp Loja")
        relate[9] +=
          "Forma de Atendimento:\n (   ) Em Campo / Externo\n (   ) SmartISP – Online\n (   ) Chatguru - Online\n (   ) Native Infinity – Telefônico\n ( X ) Loja / WhatsApp Loja\nLoja: " +
          watch("StepTreeQuest24") +
          "\n";

      if (watch("StepTreeQuest22") === "Chatguru - Online") {
        relate[9] += "Número do cliente: " + watch("StepTreeQuest28") + "\n";
        relate[9] += "Horário da conversa: " + watch("StepTreeQuest29") + "\n";
        relate[9] += "Data da conversa: " + watch("StepTreeQuest30") + "\n\n";
      }
      if (watch("StepTreeQuest22") === "Native Infinity – Telefônico") {
        relate[9] += "Número do cliente: " + watch("StepTreeQuest28") + "\n";
        relate[9] += "Horário da conversa: " + watch("StepTreeQuest29") + "\n";
        relate[9] += "Data da conversa: " + watch("StepTreeQuest30") + "\n\n";
      }
    }

    setValue("relate", relate);
    console.log("relate", watch("relate"));
  };

  const onSubmit = (data) => {
    actions.updateAction(data);
    answerRelate();

    setValue("page", 3);
    paginas("/AddressChange/step04");
  };

  return (
    <form ref={ref} className="form" onSubmit={handleSubmit(onSubmit)}>
      <AddressContainer
        question="Endereço Anterior: "
        id_type="StepTreeQuest01"
        id_street="StepTreeQuest02"
        id_number="StepTreeQuest03"
        id_district="StepTreeQuest04"
        register={register}
      />

      <AddressContainer
        question="Novo Endereço: "
        id_type="StepTreeQuest05"
        id_street="StepTreeQuest06"
        id_number="StepTreeQuest07"
        id_district="StepTreeQuest08"
        id_cep="StepTreeQuest09"
        register={register}
      />

      <CoordenateContainer
        question="Referências..."
        id_refOne="StepTreeQuest10"
        id_refTwo="StepTreeQuest11"
        id_coordinate="StepTreeQuest12"
        register={register}
      />

      <Container
        question="Equipamentos do Cliente:  "
        id_question="StepTreeQuest13"
        answer="Description"
        register={register}
      />

      <Container
        question="Foi solicitado ao cliente que levasse os equipamentos para o novo endereço?"
        id_question="StepTreeQuest14"
        answer="Binario"
        register={register}
      />

      <Container
        question="Telefone para contato sobre agendamento do serviço:"
        id_question="StepTreeQuest15"
        answer="Telephone"
        place="(xx) x xxxx-xxxx"
        register={register}
      />

      <Container
        question="Haverá taxa de serviço? "
        id_question="StepTreeQuest16"
        answer="Binario"
        register={register}
      />

      {watch("StepTreeQuest16") === "sim" && (
        <Container
          question="Informe o valor da taxa: "
          id_question="StepTreeQuest17"
          answer="Text"
          place="R$0,00"
          watch={watch}
          register={register}
        />
      )}

      <ContainerCheckBox
        question="Disponibilidade do Cliente: "
        id_question="StepTreeQuest18"
        valueOne="Manhã"
        valueTwo="Tarde"
        valueTree="Noite"
        orientation="colum"
        register={register}
      />

      <Container
        question="Foi informado ao cliente que caso exceda 150 Metros no Serviço de Mudança de Endereço, o material excedente poderá ser cobrado: "
        id_question="StepTreeQuest19"
        answer="Binario"
        register={register}
      />

      {watch("StepTreeQuest19") === "não" && (
        <Container
          question="Informe o Motivo: "
          id_question="StepTreeQuest20"
          answer="Description"
          register={register}
        />
      )}

      <Container
        question="Vai haver renovação contratual nesse serviço: "
        id_question="StepTreeQuest21"
        answer="Binario"
        register={register}
      />

      {watch("StepTreeQuest21") === "sim" && (
        <>
          <ContainerOptions
            question="Forma de Atendimento: "
            id_question="StepTreeQuest22"
            valueOne="Em Campo / Externo"
            valueTwo="SmartISP – Online"
            valueTree="Chatguru - Online"
            valueFour="Native Infinity – Telefônico"
            valueFive="Loja / WhatsApp Loja"
            orientation="colum"
            register={register}
          />

          {watch("StepTreeQuest22") === "Em Campo / Externo" && (
            <Container
              question="Informe o atendente de campo: "
              id_question="StepTreeQuest23"
              answer="Text"
              register={register}
            />
          )}

          {watch("StepTreeQuest22") === "Loja / WhatsApp Loja" && (
            <Container
              question="Informe a loja: "
              id_question="StepTreeQuest24"
              answer="Text"
              register={register}
            />
          )}


          {watch("StepTreeQuest22") === "SmartISP – Online" && (
            <Container
              question="Informe o protocolo de atendimento (da plataforma): "
              id_question="StepTreeQuest25"
              answer="Text"
              register={register}
            />
          )}

          {(watch("StepTreeQuest22") === "Chatguru - Online") |
          (watch("StepTreeQuest22") === "Native Infinity – Telefônico") ? (
            <Container
              question="Informe o número do cliente que foi feita a conversa sobre atualização: "
              id_question="StepTreeQuest28"
              answer="Telephone"
              place="(xx) x xxxx-xxxx"
              register={register}
            />
          ) : (
            ""
          )}

          {(watch("StepTreeQuest22") === "Chatguru - Online") |
          (watch("StepTreeQuest22") === "Native Infinity – Telefônico") ? (
            <Container
              question="Data / Horário da conversa: "
              id_hour="StepTreeQuest29"
              id_date="StepTreeQuest30"
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
              paginas("/AddressChange/step02");
            }}
          />
          <input className="button-next" type="submit" value="Próxima" />
        </div>
      </div>
    </form>
  );
}

export default Step03;
