import emailjs from "emailjs-com";
import React, { useRef } from "react";
const styles = {
  div: {
    padding: "10px",
  },

  container: {
    width: "95vw",
  },
  title: {
    padding: "10px",
    fontFamily: "caveat",
    color: "#d14e40",
    fontSize: "xxx-large",
    //right, down, blur, color
    textShadow: "1px 1px 2px white",
    letterSpacing: "2px",
  },
  form: {
    padding: "10px",
    fontSize: "large",
    background: "#d14e40",
    borderRadius: "15px",
  },
  formGroup: {
    padding: "15px",
    fontSize: "large",
    fontFamily: "Josefin Sans",
    color: "#eae2cc",
    //right, down, blur, color
    textShadow: "0px 0px 3px black",
    letterSpacing: "2px",
    background: "#347783",
    borderRadius: "10px",
    margin: "3px",
  },
  button: {
    padding: "10px",
    fontSize: "large",
    fontFamily: "Josefin Sans",
    color: "#eae2cc",
    //right, down, blur, color
    textShadow: "0px 0px 3px black",
    letterSpacing: "2px",
    background: "#347783",
    borderRadius: "7px",
    margin: "5px",
    marginLeft: "5px",
    border: "0px",
  },
};

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oc91s1i",
        "template_491o8d1",
        form.current,
        "yp5yoTcNhPdygdOlp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div style={styles.div}>
      <div className="container ">
        <div className="row ">
          <div className="col align-self-center ">
            <h1 className="text-center" style={styles.title}>
              Get in touch!
            </h1>
            {/* <!-- contact form --> */}
            <form ref={form} onSubmit={sendEmail} style={styles.form}>
              {/* <!-- name --> */}
              <div className="form-group" style={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="name"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="enter your name"
                />
              </div>

              {/* <!-- email --> */}
              <div className="form-group" style={styles.formGroup}>
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder="enter your email"
                />
              </div>

              {/* <!-- subject --> */}
              <div className="form-group" style={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  id="subject"
                  placeholder="enter email subject"
                />
              </div>

              <div className="form-group" style={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  type="text"
                  name="message"
                  className="form-control"
                  placeholder="enter your message"
                  id="message_body"
                  rows="5"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={styles.button}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
