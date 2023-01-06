import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import updateAction from './updateAction'
import { useStateMachine } from 'little-state-machine'
import ContainerMensage from '../../Components/Containers/ContainerMensage'
import Container from '../../Components/Containers/Container'
import './style.css'

function Step03({ register, handleSubmit, watch, setValue, reset, clear }) {
  const ref = useRef(null)

  useEffect(() => {
    ref.current.scrollIntoView({
      behavior: 'smooth'
    })
  }, [])

  const { actions } = useStateMachine({ updateAction })

  const paginas = useNavigate()

  const answerRelate = () => {
    let relate = watch('relate')

    relate[19] = 'ENCERRAMENTO\n\n'

    if (watch('StepThreeQuest01') === 'sim') {
      relate[19] +=
        'Perguntou ao cliente se poderia ajudar em algo mais?  ( X ) Sim  (   ) Não\n'
    } else {
      relate[19] +=
        'Perguntou ao cliente se poderia ajudar em algo mais?  (   ) Sim  ( X ) Não\nMotivo: ' +
        watch('StepThreeQuest02') +
        '\n'
    }

    if (watch('StepThreeQuest03') === 'sim') {
      relate[20] =
        'Pediu ao cliente para participar da pesquisa de satisfação?  ( X ) Sim  (   ) Não\n'
    } else {
      relate[20] =
        'Pediu ao cliente para participar da pesquisa de satisfação?  (   ) Sim  ( X ) Não\nMotivo: ' +
        watch('StepThreeQuest04') +
        '\n'
    }

    relate[21] = 'Observações Adicionais: ' + watch('StepThreeQuest05')

    setValue('relate', relate)
    console.log('relate', watch('relate'))
  }

  const onSubmit = data => {
    actions.updateAction(data)
    answerRelate()
    setValue('page', 3)
    paginas('/FiberActivation/generator')
  }

  return (
    <form ref={ref} className="form" onSubmit={handleSubmit(onSubmit)}>
      
      <ContainerMensage mensage="Ex.: O número de protocolo do seu atendimento será enviado para seu e-mail. Ou você prefere anotar agora?" />

      <ContainerMensage mensage="Ex.: Lembrando que o prazo máximo para atendimento de suportes é 24 horas, mas normalmente a gente vai antes." />

      <Container
        question="Perguntou ao cliente se poderia ajudar em algo mais? "
        id_question="StepThreeQuest01"
        answer="Binario"
        register={register}
      />

      {watch('StepThreeQuest01') === 'não' && (
        <Container
          question="Informe o motivo: "
          id_question="StepThreeQuest02"
          answer="Description"
          register={register}
        />
      )}

      <ContainerMensage mensage="Ex.: Foi um prazer atendê-lo(a). Peço que avalie a qualidade do meu atendimento respondendo nossa pesquisa de satisfação. Só vai durar alguns segundos, ok?!" />

      <Container
        question="Pediu ao cliente para participar da pesquisa de satisfação? "
        id_question="StepThreeQuest03"
        answer="Binario"
        register={register}
      />

      {watch('StepThreeQuest03') === 'não' && (
        <Container
          question="Informe o motivo: "
          id_question="StepThreeQuest04"
          answer="Description"
          register={register}
        />
      )}

      <ContainerMensage mensage="Ex.: Tenha um ótimo dia!" />

      <Container
        question="Deseja acrescentar alguma observação adicional:  "
        id_question="StepThreeQuest05"
        answer="Description"
        register={register}
      />

      <div className="button">
        <input
          className="button-clear"
          type="button"
          value="Limpar campos"
          onClick={() => {
            reset(clear)
            setValue('sideBar', 0)
            setValue('page', 0)
            paginas('/')
          }}
        />

        <div className="button-navigate">
          <input
            className="button-previous"
            type="button"
            value="Voltar"
            onClick={() => {
              setValue('page', 1)
              paginas('/FiberActivation/step02')
            }}
          />
          <input className="button-next" type="submit" value="Relatório" />
        </div>
      </div>
    </form>
  )
}

export default Step03
