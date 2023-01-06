import React from "react";
import { useNavigate } from "react-router-dom";
import updateAction from '../AlterPlane/updateAction';
import { useStateMachine } from "little-state-machine";
import Container from "../../Components/Containers/Container";
import ContainerOptions from "../../Components/Containers/ContainerOptions";
import ContainerCheckBox from "../../Components/Containers/ContainerCheckBox";
import "./style.css";

function Step03({ register, handleSubmit, watch, setValue, reset, clear }) {
  const { actions } = useStateMachine({ updateAction });

  const paginas = useNavigate();

  const answerRelate = () => {
    let relate = watch("relate");

    relate[6] = "OUVIR PROBLEMA DO CLIENTE\n\n";

    switch (watch("StepTreeQuest01")) {
      case "😕":
        relate[6] +=
          "Sentimento do Cliente:  ( X ) Normal  (   ) Triste  (   ) Irritado(a)\n";
        break;
      case "☹️":
        relate[6] +=
          "Sentimento do Cliente:  (   ) Normal  ( X ) Triste  (   ) Irritado(a)\n";
        break;
      case "😤":
        relate[6] +=
          "Sentimento do Cliente:  (   ) Normal  (   ) Triste  ( X ) Irritado(a)\n";
        break;
      default:
        break;
    }

    if (watch("StepTreeQuest02") === "sim") {
      relate[7] =
        "Cliente deu abertura para prosseguir atendimento?  ( X ) Sim  (   ) Não\n";
    } else {
      relate[7] =
        "Cliente deu abertura para prosseguir atendimento?  (   ) Sim  ( X ) Não\n";
    }

    if (watch("StepTreeQuest03") === "sim") {
      relate[8] =
        "Conseguiu entender bem o problema antes de prosseguir com a solução?  ( X ) Sim  (   ) Não\n";
    } else {
      relate[8] =
        "Conseguiu entender bem o problema antes de prosseguir com a solução?  (   ) Sim  ( X ) Não\nMotivo: " +
        watch("StepTreeQuest05") +
        "\n";
    }

    relate[9] = "Problema do Cliente: " + watch("StepTreeQuest05") + "\n";

    relate[9] += "Categoria do Problema: \n"
    if(watch('StepTreeQuest06') === "true") relate[9] += " Sem Conexão\n"
    if(watch('StepTreeQuest06Op2') === "true") relate[9] += " Lentidão / Oscilação\n"
    if(watch('StepTreeQuest06Op3') === "true") relate[9] += " Equipamento Específico\n"
    if(watch('StepTreeQuest06Op4') === "true") relate[9] += " Serviço / Aplicativo Específico\n"
    if(watch('StepTreeQuest06Op5') === "true") relate[9] += " Alteração de Senha Wi-Fi\n"
    if(watch('StepTreeQuest06Op6') === "true") relate[9] += " Problema em Segundo Ponto / Wi-Fi Plus\n"
    if(watch('StepTreeQuest06Op7') === "true") relate[9] += " Outro: "+ watch('StepTreeQuest07')
    



    setValue("relate", relate);
    console.log("relate", watch("relate"));
  };

  const onSubmit = (data) => {
    actions.updateAction(data);
    answerRelate();
    if (watch("StepTreeQuest02") === "sim") {
      setValue("page", 3);
      paginas("/step04");
    } else {
      setValue("page", 4);
      paginas("/step05");
    }
  };

  console.log(watch('StepTreeQuest06Op7'))

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <ContainerOptions
        question="Sentimento do Cliente: "
        id_question="StepTreeQuest01"
        valueOne="😕"
        valueTwo="☹️"
        valueTree="😤"
        fontSize={40}
        register={register}
      />

      <Container
        question="Cliente deu abertura para prosseguir atendimento?"
        id_question="StepTreeQuest02"
        answer="Binario"
        register={register}
      />

      <Container
        question="Conseguiu entender bem o problema antes de prosseguir com a solução?"
        id_question="StepTreeQuest03"
        answer="Binario"
        register={register}
      />

      {watch("StepTreeQuest03") === "não" && (
        <Container
          question="Informe o motivo: "
          id_question="StepTreeQuest04"
          answer="Description"
          register={register}
        />
      )}

      <Container
        question="Problema do Cliente: "
        id_question="StepTreeQuest05"
        answer="Description"
        register={register}
      />

      <ContainerCheckBox
        question="Categoria do Problema: "
        id_question="StepTreeQuest06"
        valueOne="Sem Conexão"
        valueTwo="Lentidão / Oscilação"
        valueTree="Equipamento Específico"
        valueFour="Serviço / Aplicativo Específico"
        valueFive="Alteração de Senha Wi-Fi"
        valueSix="Problema em Segundo Ponto / Wi-Fi Plus"
        valueSeven="Outros"
        orientation="colum"
        register={register}
      />

      {watch('StepTreeQuest06Op7') === "true" &&
        <Container
          question="Informe quais: "
          id_question="StepTreeQuest07"
          answer="Description"
          register={register}
        />
      }

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
              paginas("/step02");
            }}
          />
          <input className="button-next" type="submit" value="Próxima" />
        </div>
      </div>
    </form>
  );
}

export default Step03;
