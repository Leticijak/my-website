import styles from "../styles/Bio.module.css";

export default function Bio() {
  return (
    <div className={styles.bio}>
      <h1>Short Bio</h1>
      <div className={styles.bio_cont}>
        <p>
          My name is Ben and I am a web developer from Barcelona, Spain. I
          started my programming journey in 2016 with Python. At the end of 2017
          I began using JavaScript and ever since then I’ve been using
          JavaScript and its frameworks Technologies that I use the most for
        </p>
        <p>
          Front-End development: Next,js, React.js, Html5 and Css3, Vanilla
          JavaScript
        </p>
        <p>Back-End development: Node.js, Express.js</p>
      </div>
    </div>
  );
}
