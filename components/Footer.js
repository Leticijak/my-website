import { GoArrowUp } from "react-icons/go";
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

export default function Footer() {
  return (
    <footer>
      <Link to="home" spy={true} smooth={true} duration={500}>
        <GoArrowUp id="goup" />
      </Link>

      <p> &copy; 2021 Ben Tijanic, All rights reserved</p>
    </footer>
  );
}
