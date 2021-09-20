import styles from "../styles/Contact.module.css";
import { RiMailSendLine } from "react-icons/ri";
export default function Contact() {
  return (
    <>
      <div className={styles.contact} id="contact">
        <div className={styles.title}>
          <h1>Contact</h1>
          <RiMailSendLine id="mailz" />
          <h2>bentijanic@protonmail.com</h2>
        </div>
      </div>

      <div className="not">
        <div className={styles.formazord}>
          <div className="titles">
            <h2>Get in touch</h2>
            <p>Leave a message</p>
          </div>
          <form action="https://formspree.io/f/xpzoqkzn">
            <div className={styles.group}>
              <label for="name">Your Name</label>
              <input
                class="form-control"
                type="text"
                id="name"
                name="name"
                placeholder=" Aa"
                type="text"
                required
              />
            </div>
            <div className={styles.group}>
              <label for="_replyto">Your Email</label>
              <input
                class="form-control"
                name="_replyto"
                placeholder=" Aa"
                id="_replyto"
                type="email"
                required
              />
            </div>
            <div className={styles.group}>
              <label for="message">Your Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Message text"
                rows="4"
              ></textarea>
            </div>
            <div className={styles.spec}>
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}