import style from "./OurFounders.module.css";
import Image from "next/image";
import Link from "next/link";
import linkedinIcon from "../../../../assets/images/linkedinIcon.png";
import team from "../../../../assets/images/team.png";
import marianaPic from "../../../../assets/images/marianaPic.png";
import eluisaPic from "../../../../assets/images/eluisaPic.png";

export default function OurFounders() {
  return (
    <div className={style.teamContainer}>
      <h2>
        Somos <span>EQUIPO</span>
      </h2>

      <div className={style.team}>
        {/* DESKTOP // TABLET */}
        <div className={style.one}>
          <div className={style.info}>
            <h6>Mariana Silva Santisteban</h6>
            <p>CCO</p>

            <p>
              Abogada de la Universidad de Lima con más de 5 años de experiencia
              en comercio, publicidad, libre competencia y derecho de consumidor
              en firmas de abogados y empresas transnacionales.
            </p>

            <Link href="#">
              <Image
                width={40}
                height={40}
                src={linkedinIcon}
                alt="Linkedin Icon"
              />
            </Link>
          </div>
        </div>

        <Image className={style.foundersImg} src={team} alt="Team" />

        <div className={style.two}>
          <div className={style.info}>
            <h6>Eluisa Maria Helbig-Marchena</h6>
            <p>CEO</p>

            <p>
              Abogada alemana, PhD en Derecho por la Universidad de Tübingen, 
              5+ años experiencia en Litigios, desarrolló el primer índice de
              Legal Tech en América Latina.
            </p>

            <Link href="#">
              <Image
                width={40}
                height={40}
                src={linkedinIcon}
                alt="Linkedin Icon"
              />
            </Link>
          </div>
        </div>

        {/* MOBILE */}
        <div className={style.mobile}>
          <div className={style.infoMobileOne}>
            <Image src={eluisaPic} alt="Eluisa Pic" />
            <div className={style.mobile1}>
              <h6>Eluisa Maria Helbig-Marchena</h6>
              <p>CEO</p>

              <p>
                Abogada alemana, PhD en Derecho por la Universidad de Tübingen, 
                5+ años experiencia en Litigios, desarrolló el primer índice de
                Legal Tech en América Latina.
              </p>

              <Link href="#">
                <Image
                  width={40}
                  height={40}
                  src={linkedinIcon}
                  alt="Linkedin Icon"
                  className={style.linkedinIcon}
                />
              </Link>
            </div>
          </div>

          <div className={style.infoMobileTwo}>
            <Image src={marianaPic} alt="Mariana Pic" />
            <div className={style.mobile2}>
              <h6>Mariana Silva Santisteban</h6>
              <p>CCO</p>

              <p>
                Abogada por la Universidad de Lima. 5+ años experiencia en
                Comercio, Publicidad, Libre Competencia y Derecho de Consumidor
                en firmas de abogados y empresas transnacionales.
              </p>

              <Link href="#">
                <Image
                  width={40}
                  height={40}
                  src={linkedinIcon}
                  alt="Linkedin Icon"
                  className={style.linkedinIcon}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
