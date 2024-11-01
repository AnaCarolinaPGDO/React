import { Button } from "../../components/Button";
import { InputField } from "../../components/InputField";
import { Container, ContentForms } from "./style";

export const Login = () => {

  const handleLogin = () => {
    alert("Acesso liberado!");
  };


  return (
    <Container>

      <ContentForms>

        <InputField propsplaceholder="Digite seu login" propstype="email" />

        <InputField propsplaceholder="Digite sua senha" propstype="password" />

        <Button class='button' title="Entrar" handleFunction={handleLogin} />

        <span button class='senha' handleFuncion={handleLogin} >Esqueceu a senha?</span>
        
        <Button class='button2' title="Criar Conta" handleFunction={handleLogin} />

        <h4>Criar uma página</h4>
        <span>para uma celebridade, uma marca ou empresa.</span>

      </ContentForms>

      
      <div class="">
      <h1>
        Facebook
        </h1>
        </div>

        <div>
          <span>O Facebook ajuda você a se conectar e </span>
          <span>compartilhar com as pessoas que fazem </span>
          <span>parte da sua vida</span>
        </div>
    </Container>

  );
};
