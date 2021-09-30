import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export default function Navbar() {
  return (
    <>
      <div className={styles.main} id="home">
        <nav className={styles.nav}>
          <li>
            <Link to="home" spy={true} smooth={true} duration={500}>
              <Image
                src="/original.png"
                width={50}
                height={50}
                alt="bentijanic logo"
              />
            </Link>
          </li>

          <li>
            <Link
              className={styles.contact}
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </nav>
        <div className={styles.container_hero}>
          <Image
            src="/original.png"
            width={99}
            height={99}
            className={styles.logo}
            alt="bentijanics logo"
          />

          <h3>Ben Tijanic</h3>
          <h1>Full Stack Developer</h1>
          <Link to="work" spy={true} smooth={true} duration={500}>
            <button className={styles.mybutton}>See More</button>
          </Link>
        </div>
        <div className={styles.banner}>
          <p>
            Making responsive, efficient and reliable web pages and applications
            <br />
            <span>
              Combined with clean, representative and modern designs.
              <br /> Get your internet presence noticed today!
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
