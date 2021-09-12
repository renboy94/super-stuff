import React from "react";
import { Formik } from "formik";
import Link from "next/link";
import { LoginBox } from "./Login.style";

const Login = () => {
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors: { email?: string } = {};

          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));

            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,

          errors,

          touched,

          handleChange,

          handleBlur,

          handleSubmit,

          isSubmitting,

          /* and other goodies */
        }) => (
          <LoginBox onSubmit={handleSubmit}>
            <h1 style={{ color: process.env.STORYBOOK_DARK_COLOR }}>Log In</h1>
            <span>Email</span>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />

            {errors.email && touched.email && errors.email}

            <span>Password</span>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />

            {errors.password && touched.password && errors.password}

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
            <Link href="#">
              <a>Don't have an account?</a>
            </Link>
          </LoginBox>
        )}
      </Formik>
    </div>
  );
};

export default Login;
