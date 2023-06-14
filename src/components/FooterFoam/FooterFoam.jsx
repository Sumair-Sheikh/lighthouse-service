import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { Fragment } from "react";
import * as Yup from "yup";
import styles from "./FooterFoam.module.css";

function FooterFoam() {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(4, "Name must be 4 characters or longer"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email address"),

    phone: Yup.string()
      .required("Phone number is required")
      .test("phone", "Invalid phone number", (value) => {
        const phoneRegExp = /^\(?(\d{3})\)?[-.]?(\d{3})[-.]?(\d{5})$/;
        return phoneRegExp.test(value);
      })
      .transform((value) => (value ? value.replace(/[^\d]/g, "") : "")),

    // message: Yup.string()
    //   .required("Message is required")
    //   .min(10, "Message must be 10 characters or longer"),
  });

  const handleSubmit = (values) => {
    console.log("Form Values", values);
  };

  return (
    <Fragment>
      <Formik
        validationSchema={validationSchema}
        initialValues={{ name: "", email: "", phone: "", message: "" }}
        onSubmit={async (values) => {
          //await new Promise((resolve) => setTimeout(resolve, 500));
          //alert(JSON.stringify(values, null, 3));
          handleSubmit(values);
        }}
      >
        {({ handleChange }) => (
          <Form>
            <div className="row">
              <div className="col-md-12">
                <Field
                  name="name"
                  type="text"
                  placeholder="Name"
                  className={styles["fields"]}
                />
                <ErrorMessage name="name" component="div" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <Field
                  name="email"
                  type="email"
                  placeholder="Email"
                  className={styles["fields"]}
                />
                <ErrorMessage name="email" component="div" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <Field
                  name="phone"
                  type="tel"
                  placeholder="Phone"
                  className={styles["fields"]}
                />
                <ErrorMessage name="phone" component="div" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Message"
                  onChange={handleChange}
                  className={`${styles["fields-msg"]} ${styles["fields"]}`}
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className={`${styles["foam-btn"]} ${styles["pulse-animation"]}`}
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
}

export default FooterFoam;
