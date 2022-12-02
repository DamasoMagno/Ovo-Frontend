import { PencilLine } from "phosphor-react";

import { Avatar } from "../Avatar";

import { Container } from "./styles";

export function Post() {
  return (
    <Container>
      <header>
        <Avatar
          src="https://github.com/DamasoMagno.png"
          alt="Perfil do usuario Damaso Magno"
        />
        <div className="profile">
          <strong>Damaso Magno</strong>
          <span>Frontend Developer</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        laudantium facilis molestias nesciunt dolor ab iure voluptatum
        beatae minus, laborum impedit nobis excepturi atque possimus
        incidunt veniam! Ex, blanditiis? Mollitia!
      </p>

      <footer>
        <time>Há 2h</time>
        <PencilLine />
      </footer>
    </Container>
  );
}