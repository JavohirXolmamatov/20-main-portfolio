import styles from "./Contact.module.css";
import classNames from "classnames";
function Contact() {
  return (
    <div
      className="d-flex container justify-content-center align-items-center "
      style={{ height: "92.2vh" }}
    >
      <div className={styles.left}>
        <h1 className={classNames(styles.textGrad, styles.h1)}>
          Do you have a project to discuss?{" "}
        </h1>
        <h2 className=" text-uppercase">
          Get in touch <i className="bi bi-chat-left-dots-fill"></i>
        </h2>
        <div className="d-flex mt-5 justify-content-between">
          <div className="">
            <h3 className="text-uppercase fs-5 fw-bold">contact</h3>
            <a
              href="mailto:xolmamatovjavohir390@gmail.com?subject=Savol&body=Salom, sizga bir savolim bor..."
              className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Emailga yozish uchun ....
            </a>
          </div>
          <div>
            <h3 className="text-uppercase fs-5 fw-bold">Social media</h3>
            <div className="d-flex flex-row  justify-content-evenly ">
              <a href="#" className={styles.a}>
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className={styles.a}>
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className={styles.a}>
                <i className="bi bi-telegram"></i>
              </a>
              <a href="#" className={styles.a}>
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className={styles.a}>
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <h3 className="mb-5 text-uppercase fw-bold">Contact form</h3>
        <form>
          <div className="mb-4">
            <label
              htmlFor="exampleInputName"
              className="form-label fw-bold fs-6"
            >
              Name
            </label>
            <input
              type="text"
              className="form-control border border-black"
              id="exampleInputName"
              aria-describedby="nameHelp"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label fw-bold fs-6"
            >
              Email address
            </label>
            <input
              type="email"
              className="form-control border border-black"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="exampleInputMessage"
              className="form-label fw-bold fs-6"
            >
              Message
            </label>
            <input
              type="text"
              className="form-control border border-black"
              id="exampleInputMessage"
              aria-describedby="messageHelp"
            />
          </div>
          <button type="submit" className={styles.btnGrad}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
