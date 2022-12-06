import Image from "next/image";
import * as Modal from "@radix-ui/react-dialog";
import { X } from "phosphor-react";

import { Content, Overlay, Trigger, CloseButton } from "./styles";

import eggIconImage from "../../assets/eggIcon.png";

export function SignModal() {
  return (
    <Modal.Root>
      <Trigger asChild>
        <button>Abrir</button>
      </Trigger>

      <Modal.Portal>
        <Overlay />

        <Content>
          <CloseButton asChild>
            <button>
              <X />
            </button>
          </CloseButton>

          <div className="wrapper">
            <Image
              src={eggIconImage}
              alt="Passarinho dentro do ovo"
              width={50}
              height={50}
            />

            <div>
              <Modal.Title>Fazer Login</Modal.Title>
              <Modal.Description>
                É necessário fazer o login, 
                para ter acesso a plataforma
              </Modal.Description>
              
              <button>Entrar</button>
            </div>
          </div>
        </Content>
      </Modal.Portal>
    </Modal.Root>
  );
}