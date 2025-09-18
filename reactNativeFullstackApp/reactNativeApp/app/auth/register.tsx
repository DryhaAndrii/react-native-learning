import RegisterForm from "@/components/forms/registerForm/registerForm";
import { Container } from "@/components/ui/container";
import { KeyboardAwareContainer } from "@/components/ui/keyboardAwareContainer";

export default function Register() {
  return (
    <KeyboardAwareContainer>
      <Container>
        <RegisterForm />
      </Container>
    </KeyboardAwareContainer>
  );
}
