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
              alt="node js random logo"
              src={NodeImg}
              width={200}
              height={200}
            />
            <h2>Node.js</h2>
          </div>
          <div className={styles.skill}>
            <Image
              alt="react js random logo"
              src={ReactImg}
              width={200}
              height={200}
            />
            <h2>React.js</h2>
          </div>

          <div className={styles.skill}>
            <Image
              alt="next js random logo"
              src={NextImg}
              width={200}
              height={200}
            />
            <h2>Next.js</h2>
          </div>
        </div>
      </div>
    </>
  );
}
