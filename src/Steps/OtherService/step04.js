import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import updateAction from '../AlterPlane/updateAction';
import { useStateMachine } from "little-state-machine";
import ContainerMensage from "../../Components/Containers/ContainerMensage";
import Container from "../../Components/Containers/Container";
import ContainerOptions from "../../Components/Containers/ContainerOptions";
import ContainerTextOther from "../../Components/Containers/ContainerTextOther";
import "./style.css";

function Step04({ register, handleSubmit, watch, setValue, reset, clear }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { actions } = useStateMachine({ updateAction });

  const paginas = useNavigate();

  const answerRelate = () => {
    let relate = watch("relate");

    relate[10] = "\n\nANÁLISE DO PROBLEMA\n\n";

    switch (watch("StepFourQuest01")) {
      case "Rádio":
        relate[10] +=
          "Tecnologia de Atendimento:  ( X ) Rádio  (   ) Fibra Óptica  (   ) Rede Cabeada  (   ) PAC  (   ) Outra\n\n";
        break;
      case "Fibra Óptica":
        relate[10] +=
          "Tecnologia de Atendimento:  (   ) Rádio  ( X ) Fibra Óptica  (   ) Rede Cabeada  (   ) PAC  (   ) Outra\n";
        break;
      case "Rede Cabeada":
        relate[10] +=
          "Tecnologia de Atendimento:  (   ) Rádio  (   ) Fibra Óptica  ( X ) Rede Cabeada  (   ) PAC  (   ) Outra\n\n";
        break;
      case "PAC":
        relate[10] +=
          "Tecnologia de Atendimento:  (   ) Rádio  (   ) Fibra Óptica  (   ) Rede Cabeada  ( X ) PAC  (   ) Outra\n\n";
        break;
      case "Outra":
        relate[10] +=
          "Tecnologia de Atendimento:  (   ) Rádio  (   ) Fibra Óptica  (   ) Rede Cabeada  (   ) PAC  ( X ) Outra\nDescreva qual: " +
          watch("StepFourQuest02");
        break;

      default:
        break;
    }

    if (watch("StepFourQuest01") === "Fibra Óptica") {
      switch (watch("StepFourQuest03")) {
        case "ONU Wi-fi":
          relate[11] =
            "Equipamento do Cliente:  ( X ) ONU Wi-fi  (   ) ONU Bridge e Roteador Wi-fi  (   ) Não soube identificar\n";
          break;
        case "ONU Bridge e Roteador Wi-fi":
          relate[11] =
            "Equipamento do Cliente:  (   ) ONU Wi-fi  ( X ) ONU Bridge e Roteador Wi-fi  (   ) Não soube identificar\n";
          break;
        case "Não soube identificar":
          relate[11] =
            "Equipamento do Cliente:  (   ) ONU Wi-fi  (   ) ONU Bridge e Roteador Wi-fi  ( X ) Não soube identificar\n";
          break;
        default:
          break;
      }

      if (watch("StepFourQuest04") === "sim") {
        relate[12] = "LED LOS da ONU acesso?  ( X ) Sim  (   ) Não\n";
      } else {
        relate[12] = "LED LOS da ONU acesso?  (   ) Sim  ( X ) Não\n";
      }

      if (
        watch("StepFourQuest04") === "sim" &&
        watch("StepFourQuest03") != "ONU Wi-fi"
      ) {
        if (watch("StepFourQuest05") === "sim") {
          relate[13] =
            "Tem certeza se esse LED não é do roteador Wi-fi?  ( X ) Sim  (   ) Não\n";
        } else {
          relate[13] =
            "Tem certeza se esse LED não é do roteador Wi-fi?  (   ) Sim  ( X ) Não\n";
        }
      }

      if (watch("StepFourQuest06") === "") {
        relate[13] =
          "Sinal de Fibra Óptica: ________ ( X ) Sistema não conseguiu trazer valor\n";
      } else {
        relate[13] =
          "Sinal de Fibra Óptica: " + watch("StepFourQuest06") + "\n";
      }

      if (watch("StepFourQuest07") === "sim") {
        relate[14] =
          "O cliente conseguiu visualizar se teve algum cabo rompido em sua rua?  ( X ) Sim  (   ) Não\n";
        switch (watch("StepFourQuest08")) {
          case "Caminhão":
            relate[15] =
              "Soube informar como foi a origem?  ( X ) Caminhão  (   ) Equipes de outras empresas  (   ) Não soube Informar\n\n";
            break;
          case "Equipes de outras empresas":
            relate[15] =
              "Soube informar como foi a origem?  (   ) Caminhão  ( X ) Equipes de outras empresas  (   ) Não soube Informar\n\n";
            break;
          case "Não soube informar":
            relate[15] =
              "Soube informar como foi a origem?  (   ) Caminhão  (   ) Equipes de outras empresas  ( X ) Não soube Informar\n\n";
            break;
          default:
            break;
        }
      } else {
        relate[14] =
          "O cliente conseguiu visualizar se teve algum cabo rompido em sua rua?  (   ) Sim  ( X ) Não\n\n";
      }
    }

    setValue("relate", relate);
    console.log("relate", watch("relate"));
  };

  const onSubmit = (data) => {
    actions.updateAction(data);
    answerRelate();
    setValue("page", 4);
    paginas("/step05");
  };


  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <ContainerOptions
        question="Tecnologia de Atendimento: "
        id_question="StepFourQuest01"
        valueOne="Rádio"
        valueTwo="Fibra Óptica"
        valueTree="Rede Cabeada"
        valueFour="PAC"
        valueFive="Outra"
        orientation="colum"
        register={register}
      />

      {watch("StepFourQuest01") === "Outra" && (
        <Container
          question="Descreva qual: "
          id_question="StepFourQuest02"
          answer="Description"
          register={register}
        />
      )}

      {watch("StepFourQuest01") === "Fibra Óptica" && (
        <>
          <ContainerOptions
            question="Equipamento do Cliente: "
            id_question="StepFourQuest03"
            valueOne="ONU Wi-fi"
            valueTwo="ONU Bridge e Roteador Wi-fi"
            valueTree="Não soube identificar"
            orientation="colum"
            register={register}
          />

          <Container
            question="LED LOS da ONU acesso: "
            id_question="StepFourQuest04"
            answer="Binario"
            register={register}
          />

          {watch("StepFourQuest04") === "sim" &&
            watch("StepFourQuest03") !== "ONU Wi-fi" && (
              <Container
                question="Tem certeza se esse LED não é do roteador Wi-fi:"
                id_question="StepFourQuest05"
                answer="Binario"
                register={register}
              />
            )}

          <ContainerTextOther
            question="Sinal de Fibra Óptica:"
            id_question="StepFourQuest06"
            value="not_value"
            labelOne="Sistema conseguiu trazer valor?"
            labelTwo="Informe o sinal da fibra:"
            register={register}
            watch={watch}
          />

          {(watch("StepFourQuest04") === "sim" && watch("StepFourQuest03") === "ONU Wi-fi") |
           (watch("StepFourQuest04") === "não" && watch("StepFourQuest03") === "ONU Wi-fi" && parseInt(watch("StepFourQuest06")) < -27) |
           (watch("StepFourQuest04") === "não" && watch("StepFourQuest03") === "ONU Bridge e Roteador Wi-fi" && parseInt(watch("StepFourQuest06")) < -27) |
           (watch("StepFourQuest04") === "não" && watch("StepFourQuest03") === "Não soube identificar" && parseInt(watch("StepFourQuest06")) < -27) ? (
            <ContainerMensage mensage="Conseguimos localizar o problema do cliente. De acordo com os dados informados, ele possui um problema na estrutura de Fibra Óptica de Atendimento. Agora, podemos procurar mais informações sobre." />
          ) : (
            ""
          )}

          <Container
            question="O cliente conseguiu visualizar se teve algum cabo rompido em sua rua?"
            id_question="StepFourQuest07"
            answer="Binario"
            register={register}
          />

          {watch("StepFourQuest07") === "sim" && (
            <ContainerOptions
              question="Soube informar como foi a origem?"
              id_question="StepFourQuest08"
              valueOne="Caminhão"
              valueTwo="Equipes de outras empresas"
              valueTree="Não soube informar"
              orientation="colum"
              register={register}
            />
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
              setValue("page", 2);
              paginas("/step03");
            }}
          />
          <input className="button-next" type="submit" value="Próxima" />
        </div>
      </div>
    </form>
  );
}

export default Step04;
