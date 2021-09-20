import Image from "next/image";
import Logo from "../public/img/original.png";
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
              <Image src={Logo} width={60} height={60} />
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
          <Image src={Logo} width={99} height={99} className={styles.logo} />

          <h3>Ben Tijanic</h3>
          <h1>Full Stack Developer</h1>
          <Link to="work" spy={true} smooth={true} duration={500}>
            <button className={styles.mybutton}>See More</button>
          </Link>
        </div>
        <div className={styles.banner}>
          <p>
            Making responsive, efficient and reliable web pages and applications
          </p>
          <p>
            Combined with clean, representative and modern designs Get your
            internet presence noticed today!
          </p>
        </div>
      </div>
    </>
  );
}
