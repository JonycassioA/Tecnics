import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import updateAction from '../AlterPlane/updateAction';
import { useStateMachine } from "little-state-machine";
import ContainerMensage from "../../Components/Containers/ContainerMensage";
import Container from "../../Components/Containers/Container";
import ContainerOptions from "../../Components/Containers/ContainerOptions";
import "./style.css";

function Step05({ register, handleSubmit, watch, setValue, reset, clear }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { actions } = useStateMachine({ updateAction });

  const paginas = useNavigate();

  const answerRelate = () => {
    let relate = watch("relate");

    relate[16] = "ENCAMINHAMENTO\n\n";

    if (watch("StepFiveQuest01") === "sim") {
      relate[16] +=
        "Cliente ciente que outro setor entrará em contato para prosseguir com passos da visita (confirmação de disponibilidade e horário)?  ( X ) Sim  (   ) Não\n";
    } else {
      relate[16] +=
        "Cliente ciente que outro setor entrará em contato para prosseguir com passos da visita (confirmação de disponibilidade e horário)?  (   ) Sim  ( X ) Não\nMotivo: " +
        watch("StepFiveQuest02") +
        "\n";
    }

    relate[17] = "Número para contato: " + watch("StepFiveQuest03") + "\n";

    switch (watch("StepFiveQuest04")) {
      case "📞 - Telefone":
        relate[18] =
          "Cliente prefere contato por:  ( X ) Telefone  (   ) Online  (   ) Telefone ou Online\n\n";
        break;
      case "🌐 - Online":
        relate[18] =
          "Cliente prefere contato por:  (   ) Telefone  ( X ) Online  (   ) Telefone ou Online\n\n";
        break;
      case "📞 ou 🌐":
        relate[18] =
          "Cliente prefere contato por:  (   ) Telefone  (   ) Online  ( X ) Telefone ou Online\n\n";
        break;
      default:
        break;
    }

    setValue("relate", relate);
    console.log("relate", watch("relate"));
  };

  const onSubmit = (data) => {
    actions.updateAction(data);
    answerRelate();
    setValue("page", 5);
    paginas("/step06");
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <ContainerMensage mensage="Ex.: Irei encaminhar o seu protocolo para o setor especializado que irá entrar em contato para agendar sua visita. Você prefere Ligação ou WhatsApp?" />

      <Container
        question="Cliente ciente que outro setor entrará em contato para prosseguir com passos da visita (confirmação de disponibilidade e horário): "
        id_question="StepFiveQuest01"
        answer="Binario"
        register={register}
      />

      {watch("StepFiveQuest01") === "não" && (
        <Container
          question="Informe o motivo: "
          id_question="StepFiveQuest02"
          answer="Description"
          register={register}
        />
      )}

      <Container
        question="Em que número o cliente prefere contato? "
        id_question="StepFiveQuest03"
        answer="Telephone"
        place="(xx) x xxxx-xxxx"
        register={register}
      />

      <ContainerOptions
        question="Cliente prefere contato por: "
        id_question="StepFiveQuest04"
        valueOne="📞 - Telefone"
        valueTwo="🌐 - Online"
        valueTree="📞 ou 🌐"
        orientation="row"
        fontSize={18}
        register={register}
      />

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
            onClick={() =>
              watch("StepTreeQuest02") === "sim"
                ? (setValue("page", 3), paginas("/step04"))
                : (setValue("page", 2), paginas("/step03"))
            }
          />
          <input className="button-next" type="submit" value="Próxima" />
        </div>
      </div>
    </form>
  );
}

export default Step05;
