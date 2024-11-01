import { Button } from "../../components/Button";
import { InputField } from "../../components/InputField";
import { Container, ContentForms } from "./style";

export const Login = () => {

  const handleLogin = () => {
    alert("Login");
  };

  return (
    <Container>
      <ContentForms>

        <InputField propsplaceholder="Digite seu login" propstype="email" />

        <InputField propsplaceholder="Digite sua senha" propstype="password" />

        <Button class='button' title="Entrar" handleFunction={handleLogin} />

      </ContentForms>
    </Container>
  );
};
