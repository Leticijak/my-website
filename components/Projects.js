import Image from "next/image";
import FncImg from "../public/msf1.png";
import MsfImg from "../public/fnc1.png";
import CryptoImg from "../public/crypt.png";
import styles from "../styles/Projects.module.css";

export default function Projects() {
  return (
    <>
      <div className={styles.skills_section} id="work">
        <div className={styles.center}>
          <h1>Work Example</h1>
        </div>
        <div className={styles.present_skills}>
          <div className={styles.skill}>
            <Image
              alt="fnatic gaming logo"
              src={FncImg}
              width={190}
              height={190}
            />
            <h2>Misfits Gaming</h2>
            <p>Shopify-React</p>
            <a
              type="button"
              target="_blank"
              href="https://shop.misfitsgaming.gg/"
              rel="noreferrer"
            >
              Visit
            </a>
          </div>
          <div className={styles.skill}>
            <Image
              alt="misfits gaming logo"
              src={MsfImg}
              width={190}
              height={190}
            />
            <h2>Fnatic</h2>
            <p>Shopify-React</p>
            <a
              type="button"
              target="_blank"
              href="https://fnatic.com/shop"
              rel="noreferrer"
            >
              Visit
            </a>
          </div>

          <div className={styles.skill}>
            <Image
              alt="cryp7o website logo"
              src={CryptoImg}
              width={190}
              height={190}
            />
            <h2>Cryp7o</h2>
            <p>React.js</p>

            <a
              type="button"
              target="_blank"
              rel="noreferrer"
              href="https://cryp7o.netlify.app/"
            >
              Visit
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
