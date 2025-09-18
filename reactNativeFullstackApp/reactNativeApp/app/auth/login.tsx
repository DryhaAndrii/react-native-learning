import LoginForm from "@/components/forms/loginForm/loginForm";
import { Container } from "@/components/ui/container";
import { KeyboardAwareContainer } from "@/components/ui/keyboardAwareContainer";

export default function Login() {
  return (
    <KeyboardAwareContainer>
      <Container>
        <LoginForm />
      </Container>
    </KeyboardAwareContainer>
  );
}
