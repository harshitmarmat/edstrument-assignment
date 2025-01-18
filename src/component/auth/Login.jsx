import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { LOCAL_LOGIN_KEY } from "../../utils/constant";
import { useNavigate } from "react-router-dom";
import { validationLoginSchema } from "../../utils/validationSchema";

const validEmail = import.meta.env.VITE_VALID_EMAIL;
const validPassword = import.meta.env.VITE_VALID_PASSWORD;


const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setError(false);
    if (values.email !== validEmail && values.password !== validPassword) {
      setError(true);
    } else {
      localStorage.setItem(LOCAL_LOGIN_KEY, JSON.stringify(values));
      navigate("/create-invoice");
    }
    setSubmitting(false);
  };

  useEffect(() => {
    const login = localStorage.getItem(LOCAL_LOGIN_KEY);
    if (login) {
      navigate("/create-invoice");
    }
  }, []);


  
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationLoginSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Field
                  type="text"
                  name="email"
                  id="email"
                  className={`input input-bordered w-full mt-2`}
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-sm text-ed_red mt-1"
                />
              </div>

              {/* Password Field */}
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className="input input-bordered w-full mt-2"
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-sm text-ed_red mt-1"
                />
              </div>
              {error && (
                <div className="text-sm text-ed_red mb-4">
                  The credentials are shared in the email or the README file.
                  Kindly go to the following link for more information.
                  <a
                    href="https://link-to-your-readme-or-support-page.com"
                    className="text-ed_primary underline ml-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here
                  </a>
                </div>
              )}

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="btn btn-primary w-full mt-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
