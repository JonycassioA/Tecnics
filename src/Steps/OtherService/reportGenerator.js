import { useNavigate } from "react-router-dom";
import updateAction from "./updateAction";
import { useStateMachine } from "little-state-machine";
import React, { useRef } from "react";
import "./style.css";

function ReportGenerator({ watch, setValue, reset, clear }) {
  const paginas = useNavigate();
  const conteiner = useRef(null);
  const { actions } = useStateMachine({ updateAction });

  let relate = "";

  let arrayRelate = watch("relate");

  for (let i = 0; i < arrayRelate.length; i++) {
    if (arrayRelate[i] !== undefined) {
      relate += arrayRelate[i];
    }
  }

  const copyRelate = (e) => {
    console.log(conteiner.current.value);
    conteiner.current.select()
    document.execCommand('copy');
    e.target.focus();
    alert("Relatório copiado! ✅");
  };

  return (
    <>
      <div className="form">
        <textarea className="textarea" type="text" ref={conteiner} value={relate}></textarea>

        <div className="button">
          <input
            className="button-clear"
            type="button"
            value="Limpar campos"
            onClick={() => {
              reset(clear)
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
                setValue("page", 5);
                paginas("/step06");
              }}
            />
            <input className="button-next" type="button" value="Copiar" onClick={copyRelate} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ReportGenerator;
