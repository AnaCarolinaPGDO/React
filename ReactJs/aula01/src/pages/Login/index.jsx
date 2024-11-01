import { Button } from "../../components/Button";
import { InputField } from "../../components/InputField";
import { Container, ContentForms } from "./style";

export const Login = () => {

  const handleLogin = () => {
    alert("Acesso liberado!");
  };
  return (
    <Container>
<div class='text1'>
      <h1>
        Facebook
        </h1>
    
          <span>O Facebook ajuda você a se conectar e 
          compartilhar com as pessoas que fazem 
          parte da sua vida</span>
          </div>
        

      <ContentForms>

        <InputField propsplaceholder="Digite seu login" propstype="email" />

        <InputField propsplaceholder="Digite sua senha" propstype="password" />

        <Button class='button' title="Entrar" handleFunction={handleLogin} />
      
      
        <span button class='senha' handleFuncion={handleLogin} >Esqueceu a senha?</span>
        

        <Button class='Button2' title="Criar Conta" handleFunction={handleLogin} />

        
        <h4>Criar uma página</h4>
        <span>para uma celebridade, uma marca ou empresa.</span>
        
      </ContentForms>

      
    </Container>
  );

};