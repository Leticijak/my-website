import styles from "../styles/Bio.module.css";
import Image from "next/image";

export default function Bio() {
  return (
    <div className={styles.newstyle}>
      <h1>Short bio</h1>
      <div className={styles.newstylez}>
        <div className={styles.left}>
          <Image
            src="/photo3.webp"
            width={150}
            height={199}
            alt="Profile picture Ben Tijanic"
          />
        </div>
        <div className={styles.right}>
          <p>
            I am a web developer based in Barcelona, Spain. I started my
            programming journey in 2016 with Python3. At the end of 2017, I
            transitioned into web development and building web apps. I’ve been
            using JavaScript and its frameworks ever since. Making web sites for
            individuals, local businesses and established brands. Technologies
            that I'm most proficient at are
          </p>
          <p>
            <span>Front-end</span> : Next,js, React.js, Html5 and Css3, Vanilla
            JavaScript
          </p>
          <p>
            <span>Back-end</span> : Node.js, Express.js
          </p>
        </div>
      </div>
    </div>
  );
}
