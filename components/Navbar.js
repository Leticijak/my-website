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
              <a>
                <Image src={Logo} width={80} height={80} />
              </a>
            </Link>
          </li>

          <li>
            <a href="#contact" className={styles.contact}>
              Contact
            </a>
          </li>
        </nav>
        <div className={styles.container_hero}>
          <Image src={Logo} width={75} height={75} className={styles.logo} />

          <h3 class="display-3">Ben Tijanic</h3>
          <h1 class="display-1">Full Stack Developer</h1>
          <button className={styles.mybutton}>See More</button>
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
