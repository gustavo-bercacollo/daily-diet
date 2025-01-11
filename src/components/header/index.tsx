import { Container, Logo, UserImg, GoHome } from "./styles";
import logoImg from "@assets/logo.png";
import userImg from "@assets/userImg.png";

export function Header() {
  return (
    <Container>
      <GoHome>
      <Logo source={logoImg}/>
      </GoHome>
      <UserImg source={userImg}/>
    </Container>
  );
}