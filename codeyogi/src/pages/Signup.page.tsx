import { useFormik } from "formik";
import { FC, memo } from "react";
import { FiLock, FiUser } from "react-icons/fi";
import { ImSpinner9 } from "react-icons/im";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import Input from "../components/Input";
import { HiOutlineAtSymbol } from "react-icons/hi";

interface Props {}

const Signup: FC<Props> = (props) => {
  const history = useHistory();
  const { handleSubmit, touched, getFieldProps, isSubmitting, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        username:""
      },
      validationSchema: yup.object().shape({
        email: yup
          .string()
          .required("enter email")
          .email("please enter a valid email"),
        password: yup.string().required("enter password").min(8),
        username:yup.string().required().min(6),
      }),

      onSubmit: (data) => {
        console.log("form submitting", data);
        setTimeout(() => {
          history.push("/login");
        }, 5000);
      },
    });
  return (
    <div className=" font-body">
      <h1 className="text-4xl font-medium">Get started with a free account</h1>
      <div className="space-x-2 text-sm tracking-wider">
        <span>Already have an account?</span>
        <Link to="/login">
          <span className="underline text-indigoish">Log in</span>
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
        <div className="pt-2.75 pb-6.25 mb-2 ">
            <FiUser className="absolute w-6 h-6 text-indigoish" />
            <Input
              id="username"
              type="username"
              autoComplete="username"
              required
              {...getFieldProps("username")}
              touched={touched.username}
              error={errors.username}
              placeholder="Username"
            />
          </div>
          <div className="pt-2.75 pb-6.25 mb-2 ">
            <HiOutlineAtSymbol className="absolute w-6 h-6 text-indigoish" />
            <Input
              id="email-address"
              type="email"
              autoComplete="email"
              required
              {...getFieldProps("email")}
              touched={touched.email}
              error={errors.email}
              placeholder="Email address"
            />
          </div>
          <div className="pt-2.75 pb-6.25 mb-2 ">
            <FiLock className="absolute w-6 h-6 text-indigoish" />
            <Input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              {...getFieldProps("password")}
              touched={touched.password}
              error={errors.password}
              placeholder="password"
            />
          </div>
        </div>
        <div className="flex justify-between">
            <p>Show password</p>
            <button
              type="submit"
              className="text-white rounded-md  px-5 py-1.75  text-sm bg-indigoish shadow-xl hover:transform"
            >
              Get started
            </button>
            {isSubmitting && <ImSpinner9 className="animate-spin" />}
          </div>
      </form>
    </div>
  );
};

Signup.defaultProps = {};

export default memo(Signup);
