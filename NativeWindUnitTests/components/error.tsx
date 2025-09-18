import { Container } from "./container";
import { Typography } from "./typography";

export function Error({ error }: { error: string | null }) {
  return (
    <Container>
      <Typography type="error">Error: {error}</Typography>
    </Container>
  );
}
