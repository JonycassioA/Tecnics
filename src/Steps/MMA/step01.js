import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import updateAction from '../AlterPlane/updateAction';
import { useStateMachine } from "little-state-machine";
import Container from "../../Components/Containers/Container";
import ContainerMensage from "../../Components/Containers/ContainerMensage";
import "./style.css";

function Step01({ register, handleSubmit, setValue, watch, reset, clear }) {

  const ref = useRef(null)

  useEffect(() => {
    ref.current.scrollIntoView({
      behavior: 'smooth'
    })
  }, [])

  const { actions } = useStateMachine({ updateAction });

  const paginas = useNavigate();

  const answerRelate = () => {
    let relate = watch("relate");

    relate[0] = "CUMPRIMENTO\n\n";

    if (watch("StepOneQuest01") === "sim") {
      relate[0] +=
        "Foi realizado o cumprimento ao cliente?  ( X ) Sim  (   ) Não\n\n";
    } else {
      relate[0] +=
        "Foi realizado o cumprimento ao cliente?  (   ) Sim  ( X ) Não\n\n";
    }

    setValue("relate", relate);
    console.log("relate", watch("relate"));
  };

  const onSubmit = (data) => {
    actions.updateAction(data);
    answerRelate();
    setValue("page", 1);
    paginas("/mma/step02");
  };

  return (
    <form ref={ref} className="form" onSubmit={handleSubmit(onSubmit)}>

    <ContainerMensage mensage="Ex.: VirteX, Bom dia, meu nome é Felipe. Com quem eu falo?" />

      <Container
        question="Foi realizado o cumprimento ao cliente?"
        id_question="StepOneQuest01"
        answer="Binario"
        register={register}
      />

      <div className="button">
        <input
          className="button-clear"
          type="button"
          value="Limpar campos"
          onClick={() => {
            reset(clear);
            setValue('sideBar', 0)
            setValue("page", 0);
            paginas("/");
          }}
        />

        <div className="button-navigate">
          <input className="button-next" type="submit" value="Próxima" />
        </div>
      </div>
    </form>
  );
}

export default Step01;
