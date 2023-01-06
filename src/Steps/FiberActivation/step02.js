import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import updateAction from "../AlterPlane/updateAction";
import { useStateMachine } from "little-state-machine";
import Container from "../../Components/Containers/Container";
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

    relate[6] = "INFORMAÇÕES DA ATIVAÇÃO\n\n";

    if (watch("StepTwoQuest01") === "Interna")
      relate[6] +=
        "Tipo de Venda:\n ( X ) Interna\n (   ) Externa\n (   ) Online\n (   ) Telefonico\n";
    if (watch("StepTwoQuest01") === "Externa")
      relate[6] +=
        "Tipo de Venda:\n (   ) Interna\n ( X ) Externa\n (   ) Online\n (   ) Telefonico\n";
    if (watch("StepTwoQuest01") === "Online")
      relate[6] +=
        "Tipo de Venda:\n (   ) Interna\n (   ) Externa\n ( X ) Online\n (   ) Telefonico\n";
    if (watch("StepTwoQuest01") === "Telefonico")
      relate[6] +=
        "Tipo de Venda:\n (   ) Interna\n (   ) Externa\n (   ) Online\n ( X ) Telefonico\n";

    relate[6] += "Plano contratado: " + watch("StepTwoQuest02") + "\n";

    if (watch("StepTwoQuest03") === "sim") {
      relate[6] += "Taxa de Serviço: ( X ) Sim  (   ) Não\n";
      relate[6] += "Valor Taxa: R$" + watch("StepTwoQuest04") + "\n";
      if (watch("StepTwoQuest05") === "À Vista") {
        relate[6] += "Forma de Pagamento: ( X ) À Vista  (   ) Parcelamento\n";
      } else {
        relate[6] += "Forma de Pagamento: (   ) À Vista  ( X ) Parcelamento\n";
      }
    } else {
      relate[6] += "Taxa de Serviço: (   ) Sim  ( X ) Não\n";
    }

    if (watch("StepTwoQuest06") === "sim") {
      relate[6] += "Termo de Contratação assinado: ( X ) Sim  (   ) Não\n";
    } else {
      relate[6] +=
        "Termo de Contratação assinado: (   ) Sim  ( X ) Não\nMotivo: " +
        watch("StepTwoQuest07") +
        "\n";
    }

    if (watch("StepTwoQuest08") === "sim") {
      relate[6] += "Contrato de Permanência assinado: ( X ) Sim  (   ) Não\n";
    } else {
      relate[6] +=
        "Contrato de Permanência assinado: (   ) Sim  ( X ) Não\nMotivo: " +
        watch("StepTwoQuest09") +
        "\n";
    }

    relate[6] +=
      "Dia do Vencimento do Carnê: " + watch("StepTwoQuest10") + "\n";

    relate[6] += "Telefone para contato: " + watch("StepTwoQuest11") + "\n";

    if (watch("StepTwoQuest12") === "sim") {
      relate[6] +=
        "Cliente autoriza o contato da Virtex via Whatsapp: ( X ) Sim  (   ) Não\n";
    } else {
      relate[6] +=
        "Cliente autoriza o contato da Virtex via Whatsapp: (   ) Sim  ( X ) Não\n";
    }

    if (watch("StepTwoQuest13") === "WhatsApp")
      relate[6] +=
        "Cliente deseja receber carnê via: ( X ) WhatsApp   (   ) Impresso   (   ) App VirteX\n";
    if (watch("StepTwoQuest13") === "Impresso ")
      relate[6] +=
        "Cliente deseja receber carnê via: (   ) WhatsApp   ( X ) Impresso   (   ) App VirteX\n";
    if (watch("StepTwoQuest13") === "App VirteX")
      relate[6] +=
        "Cliente deseja receber carnê via: (   ) WhatsApp   (   ) Impresso   ( X ) App VirteX\n";

    relate[7] = "Ponto de Referência 01: " + watch("StepTwoQuest14") + "\n";
    if (!!watch("StepTwoQuest11"))
      relate[7] += "Ponto de Referência 02: " + watch("StepTwoQuest15") + "\n";
    relate[7] += "Coordenadas: " + watch("StepTwoQuest16") + "\n";

    relate[7] += "Disponibilidade do Cliente:\n";
    if (watch("StepTwoQuest17") === "true") relate[7] += "-Manhã\n";
    if (watch("StepTwoQuest17Op2") === "true") relate[7] += "-Tarde\n";
    if (watch("StepTwoQuest17Op3") === "true") relate[7] += "-Noite\n";

    if (watch("StepTwoQuest18") === "sim") {
      relate[7] +=
        "Anexado a selfie do cliente junto ao documento pessoal: ( X ) Sim  (   ) Não\n";
    } else {
      relate[7] +=
        "Anexado a selfie do cliente junto ao documento pessoal: (   ) Sim  ( X ) Não\nMotivo: " +
        watch("StepTwoQuest19") +
        "\n";
    }

    if (watch("StepTwoQuest20") === "sim") {
      relate[7] += "Cliente ciente da fidelidade: ( X ) Sim  (   ) Não\n";
    } else {
      relate[7] += "Cliente ciente da fidelidade: (   ) Sim  ( X ) Não\n";
    }

    if (watch("StepTwoQuest21") === "Em Campo / Externo")
      relate[8] =
        "Forma de Atendimento:\n ( X ) Em Campo / Externo\n (   ) SmartISP – Online\n (   ) Chatguru - Online\n (   ) Native Infinity – Telefônico\n (   ) Loja / WhatsApp Loja\nAtendente de campo: " + watch("StepTwoQuest22") + "\n";;
    if (watch("StepTwoQuest21") === "SmartISP – Online")
      relate[8] =
        "Forma de Atendimento:\n (   ) Em Campo / Externo\n ( X ) SmartISP – Online\n (   ) Chatguru - Online\n (   ) Native Infinity – Telefônico\n (   ) Loja / WhatsApp Loja\nProtocolo: " + watch("StepTwoQuest23") + "\n";
    if (watch("StepTwoQuest21") === "Chatguru - Online")
      relate[8] =
        "Forma de Atendimento:\n (   ) Em Campo / Externo\n (   ) SmartISP – Online\n ( X ) Chatguru - Online\n (   ) Native Infinity – Telefônico\n (   ) Loja / WhatsApp Loja\n";
    if (watch("StepTwoQuest21") === "Native Infinity – Telefônico")
      relate[8] =
        "Forma de Atendimento:\n (   ) Em Campo / Externo\n (   ) SmartISP – Online\n (   ) Chatguru - Online\n ( X ) Native Infinity – Telefônico\n (   ) Loja / WhatsApp Loja\n";
    if (watch("StepTwoQuest21") === "Loja / WhatsApp Loja")
      relate[8] =
        "Forma de Atendimento:\n (   ) Em Campo / Externo\n (   ) SmartISP – Online\n (   ) Chatguru - Online\n (   ) Native Infinity – Telefônico\n ( X ) Loja / WhatsApp Loja\nLoja: " + watch("StepTwoQuest23") + "\n";


    if (watch("StepTwoQuest21") === "Chatguru - Online") {
      relate[8] += "Número do cliente: " + watch("StepTwoQuest24") + "\n";
      relate[8] += "Horário da conversa: " + watch("StepTwoQuest25") + "\n";
      relate[8] += "Data da conversa: " + watch("StepTwoQuest26") + "\n";
    }
    if (watch("StepTwoQuest21") === "Native Infinity – Telefônico") {
      relate[8] += "Número do cliente: " + watch("StepTwoQuest24") + "\n";
      relate[8] += "Horário da conversa: " + watch("StepTwoQuest25") + "\n";
      relate[8] += "Data da conversa: " + watch("StepTwoQuest26") + "\n";
    }

    if (watch("TecnologyTec") === "Fibra Óptica") {
      if (watch("StepTwoQuest27") === "sim") {
        relate[8] +=
          "Foi informado ao cliente que caso exceda 150 metros a instalação poderá ou não ser cobrado pela empresa o valor do material excedente?: ( X ) Sim  (   ) Não\n";
      } else {
        relate[8] +=
          "Foi informado ao cliente que caso exceda 150 metros a instalação poderá ou não ser cobrado pela empresa o valor do material excedente?: ( X ) Sim  (   ) Não\n";
      }
    }

    if (watch("StepTwoQuest29") === "não") {
      relate[9] = "Cliente veio de outro provedor? (   ) Sim  ( X ) Não\n";
    } else {
      relate[9] =
        "Cliente veio de outro provedor? ( X ) Sim  (   ) Não\nProvedor: " +
        watch("StepTwoQuest30") +
        "\n";
    }

    if (watch("StepTwoQuest31") === "sim") {
      relate[9] +=
        "Cliente não possuia internet antes? ( X ) Sim  (   ) Não\n\n";
    } else {
      relate[9] +=
        "Cliente não possuia internet antes? (   ) Sim  ( X ) Não\nMotivo: " +
        watch("StepTwoQuest32") +
        "\n\n";
    }

    setValue("relate", relate);
    console.log("relate", watch("relate"));
  };

  const onSubmit = (data) => {
    actions.updateAction(data);
    answerRelate();

    setValue("page", 2);
    paginas("/FiberActivation/step03");
  };

  return (
    <form ref={ref} className="form" onSubmit={handleSubmit(onSubmit)}>
      <ContainerOptions
        question="Tipo da venda: "
        id_question="StepTwoQuest01"
        valueOne="Interna"
        valueTwo="Externa"
        valueTree="Online"
        valueFour="Telefonico"
        orientation="colum"
        register={register}
      />

      <ContainerOptions
        question="Tecnologia para Ativação: "
        id_question="TecnologyTec"
        valueOne="Fibra Óptica"
        valueTwo="Rádio"
        orientation="colum"
        register={register}
      />

      <Container
        question="Plano contratado: "
        id_question="StepTwoQuest02"
        answer="Text"
        register={register}
      />

      <Container
        question="Possui taxa de serviço? "
        id_question="StepTwoQuest03"
        answer="Binario"
        register={register}
      />

      {watch("StepTwoQuest03") === "sim" && (
        <>
          <Container
            question="Valor da Taxa: "
            id_question="StepTwoQuest04"
            answer="Text"
            register={register}
          />
          <ContainerOptions
            question="Forma de pagamento:"
            id_question="StepTwoQuest05"
            valueOne="À Vista"
            valueTwo="Parcelamento"
            register={register}
          />
        </>
      )}

      <Container
        question="Termo de contratação assinado: "
        id_question="StepTwoQuest06"
        answer="Binario"
        register={register}
      />

      {watch("StepTwoQuest06") === "não" && (
        <Container
          question="Informe o motivo: "
          id_question="StepTwoQuest07"
          answer="Description"
          register={register}
        />
      )}

      <Container
        question="Contrato de Permanência assinado: "
        id_question="StepTwoQuest08"
        answer="Binario"
        register={register}
      />

      {watch("StepTwoQuest08") === "não" && (
        <Container
          question="Informe o motivo: "
          id_question="StepTwoQuest09"
          answer="Description"
          register={register}
        />
      )}

      <Container
        question="Dia para vencimento do carnê: "
        id_question="StepTwoQuest10"
        answer="Number"
        register={register}
      />

      <Container
        question="Telefone para contato: "
        id_question="StepTwoQuest11"
        answer="Telephone"
        place="(xx) x xxxx-xxxx"
        register={register}
      />

      <Container
        question="O cliente autoriza o contato da Virtex via Whatsapp?"
        id_question="StepTwoQuest12"
        answer="Binario"
        register={register}
      />

      <ContainerOptions
        question="Como o cliente deseja receber carnê?"
        id_question="StepTwoQuest013"
        valueOne="WhatsApp"
        valueTwo="Impresso"
        valueTree="App VirteX"
        orientation="colum"
        register={register}
      />

      <CoordenateContainer
        question="Referências..."
        id_refOne="StepTwoQuest14"
        id_refTwo="StepTwoQuest15"
        id_coordinate="StepTwoQuest16"
        register={register}
      />

      <ContainerCheckBox
        question="Disponibilidade do Cliente: "
        id_question="StepTwoQuest17"
        valueOne="Manhã"
        valueTwo="Tarde"
        valueTree="Noite"
        orientation="colum"
        register={register}
      />

      <Container
        question="Foi anexado a selfie do cliente junto ao documento pessoal: "
        id_question="StepTwoQuest18"
        answer="Binario"
        register={register}
      />

      {watch("StepTwoQuest18") === "não" && (
        <Container
          question="Informe o motivo: "
          id_question="StepTwoQuest19"
          answer="Description"
          register={register}
        />
      )}

      <Container
        question="Cliente ciente da fidelidade: "
        id_question="StepTwoQuest20"
        answer="Binario"
        register={register}
      />

      <ContainerOptions
        question="Forma de Atendimento: "
        id_question="StepTwoQuest21"
        valueOne="Em Campo / Externo"
        valueTwo="SmartISP – Online"
        valueTree="Chatguru - Online"
        valueFour="Native Infinity – Telefônico"
        valueFive="Loja / WhatsApp Loja"
        orientation="colum"
        register={register}
      />

      {watch("StepTwoQuest21") === "Em Campo / Externo" && (
        <Container
          question="Informe o atendente de campo: "
          id_question="StepTwoQuest22"
          answer="Text"
          register={register}
        />
      )}

      {watch("StepTwoQuest21") === "Loja / WhatsApp Loja" && (
        <Container
          question="Informe a loja: "
          id_question="StepTwoQuest23"
          answer="Text"
          register={register}
        />
      )}

      {watch("StepTwoQuest21") === "SmartISP – Online" && (
        <Container
          question="Informe o protocolo de atendimento (da plataforma): "
          id_question="StepTwoQuest23"
          answer="Text"
          register={register}
        />
      )}

      {(watch("StepTwoQuest21") === "Chatguru - Online") |
      (watch("StepTwoQuest21") === "Native Infinity – Telefônico") ? (
        <Container
          question="Informe o número do cliente que foi feita a conversa sobre atualização: "
          id_question="StepTwoQuest24"
          answer="Telephone"
          place="(xx) x xxxx-xxxx"
          register={register}
        />
      ) : (
        ""
      )}

      {(watch("StepTwoQuest21") === "Chatguru - Online") |
      (watch("StepTwoQuest21") === "Native Infinity – Telefônico") ? (
        <Container
          question="Data / Horário da conversa: "
          id_hour="StepTwoQuest25"
          id_date="StepTwoQuest26"
          answer="HourDate"
          register={register}
          setValue={setValue}
        />
      ) : (
        ""
      )}

      {watch("TecnologyTec") === "Fibra Óptica" && (
        <Container
          question="Foi informado ao cliente que caso exceda 150 metros a instalação poderá ou não ser cobrado pela empresa o valor do material excedente?"
          id_question="StepTwoQuest27"
          answer="Binario"
          register={register}
        />
      )}

      <Container
        question="Cliente veio de outro provedor?"
        id_question="StepTwoQuest29"
        answer="Binario"
        register={register}
      />

      {watch("StepTwoQuest29") === "sim" && (
        <Container
          question="Informe o Provedor: "
          id_question="StepTwoQuest30"
          answer="Text"
          register={register}
        />
      )}

      <Container
        question="Cliente não possuia internet antes?"
        id_question="StepTwoQuest31"
        answer="Binario"
        register={register}
      />

      {watch("StepTwoQuest31") === "não" && (
        <Container
          question="Motivo: "
          id_question="StepTwoQuest32"
          answer="Description"
          register={register}
        />
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
              setValue("page", 0);
              paginas("/FiberActivation/step01");
            }}
          />
          <input className="button-next" type="submit" value="Próxima" />
        </div>
      </div>
    </form>
  );
}

export default Step03;
