import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import updateAction from './updateAction'
import { useStateMachine } from 'little-state-machine'
import ContainerMensage from '../../Components/Containers/ContainerMensage'
import Container from '../../Components/Containers/Container'
import './style.css'

function Step04({ register, handleSubmit, watch, setValue, reset, clear }) {
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

    if (watch('StepSixQuest01') === 'sim') {
      relate[19] +=
        'Perguntou ao cliente se poderia ajudar em algo mais?  ( X ) Sim  (   ) Não\n'
    } else {
      relate[19] +=
        'Perguntou ao cliente se poderia ajudar em algo mais?  (   ) Sim  ( X ) Não\nMotivo: ' +
        watch('StepSixQuest02') +
        '\n'
    }

    if (watch('StepSixQuest03') === 'sim') {
      relate[20] =
        'Pediu ao cliente para participar da pesquisa de satisfação?  ( X ) Sim  (   ) Não\n'
    } else {
      relate[20] =
        'Pediu ao cliente para participar da pesquisa de satisfação?  (   ) Sim  ( X ) Não\nMotivo: ' +
        watch('StepSixQuest04') +
        '\n'
    }

    relate[21] = 'Observações Adicionais: ' + watch('StepSixQuest05')

    setValue('relate', relate)
    console.log('relate', watch('relate'))
  }

  const onSubmit = data => {
    actions.updateAction(data)
    answerRelate()
    setValue('page', 4)
    paginas('/mma/generator')
  }

  return (
    <form ref={ref} className="form" onSubmit={handleSubmit(onSubmit)}>
      
      <ContainerMensage mensage="Ex.: O número de protocolo do seu atendimento será enviado para seu e-mail. Ou você prefere anotar agora?" />

      <ContainerMensage mensage="Ex.: Lembrando que o prazo máximo para atendimento de suportes é 24 horas, mas normalmente a gente vai antes." />

      <Container
        question="Perguntou ao cliente se poderia ajudar em algo mais? "
        id_question="StepSixQuest01"
        answer="Binario"
        register={register}
      />

      {watch('StepSixQuest01') === 'não' && (
        <Container
          question="Informe o motivo: "
          id_question="StepSixQuest02"
          answer="Description"
          register={register}
        />
      )}

      <ContainerMensage mensage="Ex.: Foi um prazer atendê-lo(a). Peço que avalie a qualidade do meu atendimento respondendo nossa pesquisa de satisfação. Só vai durar alguns segundos, ok?!" />

      <Container
        question="Pediu ao cliente para participar da pesquisa de satisfação? "
        id_question="StepSixQuest03"
        answer="Binario"
        register={register}
      />

      {watch('StepSixQuest03') === 'não' && (
        <Container
          question="Informe o motivo: "
          id_question="StepSixQuest04"
          answer="Description"
          register={register}
        />
      )}

      <ContainerMensage mensage="Ex.: Tenha um ótimo dia!" />

      <Container
        question="Deseja acrescentar alguma observação adicional:  "
        id_question="StepSixQuest05"
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
              setValue('page', 2)
              paginas('/mma/step03')
            }}
          />
          <input className="button-next" type="submit" value="Relatório" />
        </div>
      </div>
    </form>
  )
}

export default Step04
