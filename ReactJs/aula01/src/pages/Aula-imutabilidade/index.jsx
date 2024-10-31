import { useState } from "react";

export const AulaImutabilidade = () => {

    const [] = useState();
    return (
        <div>
            <h2>Aula de Imutabilidade</h2>
            <p>O React utiliza imutabilidade para garantir a consistência dos dados. 
                Isso significa que não é permitido alterar os valores de variáveis ou objetos,
                mas sim, criar novos objetos com os mesmos valores.</p>
        </div>

    )
}