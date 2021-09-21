import Image from "next/image";
import ReactImg from "../public/img/r3.webp";
import NodeImg from "../public/img/node1.webp";
import NextImg from "../public/img/next5.webp";
import styles from "../styles/Skills.module.css";

export default function Skills() {
  return (
    <>
      <div className={styles.skills_section}>
        <div className={styles.center}>
          <h1>Skills</h1>
        </div>
        <div className={styles.present_skills}>
          <div className={styles.skill}>
            <Image
              className={styles.nextImg}
              alt="node js random logo"
              src={NodeImg}
              width={180}
              height={180}
            />
            <h2>Node.js</h2>
          </div>
          <div className={styles.skill}>
            <Image
              className={styles.nextImg}
              alt="react js random logo"
              src={ReactImg}
              width={180}
              height={180}
            />
            <h2>React.js</h2>
          </div>

          <div className={styles.skill}>
            <Image
              className={styles.nextImg}
              alt="next js random logo"
              src={NextImg}
              width={180}
              height={180}
            />
            <h2>Next.js</h2>
          </div>
        </div>
      </div>
    </>
  );
}
