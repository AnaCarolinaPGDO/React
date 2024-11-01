import { ButtonComponents } from "../ButtonComponents"

export const ContainerText = ({children, nome}) => {

  return (
    <div>
      {/* <ButtonComponents nome="Botao no ContainerText"/> */}

      Bem vindo ao site! {nome}

      {children}
    </div>
  )
}