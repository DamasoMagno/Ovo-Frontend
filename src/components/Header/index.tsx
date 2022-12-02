import Link from "next/link";
import { Bell } from "phosphor-react";

import { Avatar } from "../../components/Avatar";

import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <p>
        Olá, <strong>Damaso</strong>
      </p>

      <nav>
        <div className="notification">
          <Bell />
          <span>3</span>
        </div>

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
