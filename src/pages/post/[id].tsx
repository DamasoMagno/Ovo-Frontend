import Link from "next/link";
import {
  ArrowLeft,
  Chat,
  Heart,
  Link as IconLink
} from "phosphor-react";
import { useState } from "react";

import { Avatar } from "../../components/Avatar";
import { Navigation } from "../../components/Navigation";

import {
  Header,
  PostContent,
  Feedback,
  Comments
} from "../../styles/pages/Post";

export default function Post() {
  const [postAsFavorited, setPostAsFavorited] = useState(false);

  return (
    <>
      <Header>
        <Link href="/">
          <ArrowLeft color="#FFF" />
        </Link>
        <h3>Post</h3>
      </Header>

      <PostContent>
        <div className="ownerPost">
          <Avatar
            src="https://github.com/DamasoMagno.png"
            alt="Damaso"
          />

          <div>
            <strong>DamasoMagno</strong>
            <span>Programador FrontEnd</span>
          </div>
        </div>

        <div className="post">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quaerat culpa quidem vero a aut in!
            Tempora architecto sint suscipit earum repellendus praesentium blanditiis fugit magnam, aperiam
            placeat, soluta eius
          </p>

          <time dateTime="2022-12-03 20:35">
            8:35 PM <span />3 de dez de 2022
          </time>
        </div>
      </PostContent>

      <Feedback>
        <button onClick={() => setPostAsFavorited(!postAsFavorited)}>
          {
            postAsFavorited ?
              <Heart color="red" weight="fill" /> :
              <Heart />
          }
          <span>
            {postAsFavorited ? 4 : 3}
          </span>
        </button>
        <li>
          <Chat />
          <span>3</span>
        </li>
        <button>
          <IconLink />
        </button>
      </Feedback>

      <Comments>
        <ul>
          <div className="comment">
            <Avatar
              src="https://github.com/DamasoMagno.png"
              alt="Perfil usuario Damaso"
            />

            <div className="userComment">
              <strong>DamnasoMagno</strong>
              <p>
                Muito bom, parab??ns. Adorei pra caramba isso, de fato,
                ?? um fato muito importante para a sociedade
              </p>
            </div>
          </div>

          <div className="comment">
            <Avatar
              src="https://github.com/DamasoMagno.png"
              alt="Perfil usuario Damaso"
            />

            <div className="userComment">
              <strong>DamnasoMagno</strong>
              <p>
                Muito bom, parab??ns. Adorei pra caramba isso, de fato,
                ?? um fato muito importante para a sociedade
              </p>
            </div>
          </div>

          <div className="comment">
            <Avatar
              src="https://github.com/DamasoMagno.png"
              alt="Perfil usuario Damaso"
            />

            <div className="userComment">
              <strong>DamnasoMagno</strong>
              <p>
                Muito bom, parab??ns. Adorei pra caramba isso, de fato,
                ?? um fato muito importante para a sociedade
              </p>
            </div>
          </div>
        </ul>
      </Comments>

      <Navigation />
    </>
  );
}