import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import updateAction from "../AlterPlane/updateAction";
import { useStateMachine } from "little-state-machine";
import Container from "../../Components/Containers/Container";
import ContainerOptions from "../../Components/Containers/ContainerOptions";
import ContainerMensage from "../../Components/Containers/ContainerMensage";
import { CSSTransition } from "react-transition-group";
import "./style.css";

function Step02({ register, handleSubmit, watch, setValue, reset, clear }) {
  const [showMessage, setShowMessage] = useState(true);

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

    relate[1] = "LOCALIZAÇÃO DA ASSINATURA\n\n";

    if (watch("StepTwoQuest01") === "sim") {
      relate[2] =
        "Conseguiu localizar a assinatura do cliente?  ( X ) Sim  (   ) Não\n";

      if (watch("StepTwoQuest02") === "Synsuite") {
        relate[2] +=
          "Cliente com seu cadastro em:   ( X ) Synsuite  (   ) Outro Sistema\n";
      } else {
        relate[2] +=
          "Cliente com seu cadastro em:   (   ) Synsuite  ( X ) Outro Sistema\n";
      }
    } else {
      relate[2] =
        "Conseguiu localizar a assinatura do cliente?  (   ) Sim  ( X ) Não\n";
    }

    if (watch("StepTwoQuest03") === "sim") {
      relate[3] =
        "Campo Telefone (para Ligações) atualizado?  ( X ) Sim  (   ) Não\n";
    } else {
      relate[3] =
        "Campo Telefone (para Ligações) atualizado?  (   ) Sim  ( X ) Não\nMotivo: " +
        watch("StepTwoQuest04") +
        "\n";
    }

    if (watch("StepTwoQuest05") === "sim") {
      relate[4] =
        "Campo Número (para WhatsApp) atualizado?  ( X ) Sim  (   ) Não\n";
    } else {
      relate[4] =
        "Campo Número (para WhatsApp) atualizado?  (   ) Sim  ( X ) Não\nMotivo: " +
        watch("StepTwoQuest06") +
        "\n";
    }

    if (watch("StepTwoQuest07") === "sim") {
      relate[5] = "E-mail no sistema atualizado?  ( X ) Sim  (   ) Não\n\n";
    } else {
      relate[5] =
        "E-mail no sistema atualizado?  (   ) Sim  ( X ) Não\nMotivo: " +
        watch("StepTwoQuest08") +
        "\n\n";
    }

    setValue("relate", relate);

    console.log("relate: ", watch("relate"));
  };

  const onSubmit = (data) => {
    actions.updateAction(data);
    answerRelate();
    setValue("page", 2);
    paginas("/AlterPlane/step03");
  };

  return (
    <form ref={ref} className="form" onSubmit={handleSubmit(onSubmit)}>
      <ContainerMensage mensage="Ex.: Antes de prosseguir com o atendimento, preciso confirmar alguns dados para localizar a sua assinatura, tudo bem?" />

      <Container
        question="Conseguiu localizar a assinatura do cliente?"
        id_question="StepTwoQuest01"
        answer="Binario"
        register={register}
      />

      {watch("StepTwoQuest01") === "sim" && (
        <ContainerOptions
          question="Cliente com seu cadastro em: "
          id_question="StepTwoQuest02"
          valueOne="Synsuite"
          valueTwo="Outro Sistema"
          register={register}
        />
      )}

      <Container
        question="Campo Telefone (para Ligações) atualizado?"
        id_question="StepTwoQuest03"
        answer="Binario"
        register={register}
      />

      {watch("StepTwoQuest03") === "não" && (
        <Container
          question="Informe o motivo: "
          id_question="StepTwoQuest04"
          answer="Description"
          register={register}
        />
      )}

      <Container
        question="Campo Número (para WhatsApp) atualizado?"
        id_question="StepTwoQuest05"
        answer="Binario"
        register={register}
      />

      {watch("StepTwoQuest05") === "não" && (
        <Container
          question="Informe o motivo: "
          id_question="StepTwoQuest06"
          answer="Description"
          register={register}
        />
      )}

      <Container
        question="E-mail no sistema atualizado?"
        id_question="StepTwoQuest07"
        answer="Binario"
        register={register}
      />

      {watch("StepTwoQuest07") === "não" && (
        <Container
          question="Informe o motivo: "
          id_question="StepTwoQuest08"
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
            setValue("sideBar", 0);
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
              paginas("/AlterPlane/step01");
            }}
          />
          <input className="button-next" type="submit" value="Próxima" />
        </div>
      </div>
    </form>
  );
}

export default Step02;
