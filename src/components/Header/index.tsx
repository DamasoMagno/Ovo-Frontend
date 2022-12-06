import Link from "next/link";

import { Avatar } from "../../components/Avatar";

import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <p>
        Olá, <strong>Damaso</strong>
      </p>

      <nav>
        <Link href="#" className="profile">
          <Avatar
            src="https://github.com/DamasoMagno.png"
            alt="Perfil do usuario Damaso Magno"
          />
        </Link>
      </nav>
    </Container>
  );
}
