import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../assets/images/sawaLogo.png";
import Banner from "../../components/registerSteps/Banner";
import { IoMdEyeOff } from "react-icons/io";
import { loginUser } from "../../store/actions";
function Signin() {
  const { errors, isFetchingUser } = useSelector(({ UserAuth }) => UserAuth);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <Banner />
      <div className="bg-darkwhite flex flex-col justify-center items-center py-10 px-10">
        <div className="max-w-md w-full space-y-8">
          <div className="">
            <h2 className="text-4xl mt-4 text-darkblue font-bold">Login</h2>
            <p className="text-lg text-darkblue">Welcome back admin</p>
          </div>
          <form
            className="mt-8 space-y-6"
            id="submit-login"
            onSubmit={onSubmit}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="space-y-3">
              <div>
                <label htmlFor="email-address" className="text-base font-medium">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-darkblue text-gray-900 rounded-t-md focus:outline-none focus:ring-lightgreen focus:border-lightgreen focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
                {errors && errors?.email ? (
                  <div className="rounded border border-danger px-3 py-2 mt-1 mb-2 text-xs bg-red-100">
                    {errors?.email[0]}
                  </div>
                ) : null}
              </div>
              <div className="flex items-center bg-white">
                <div>
                  <label htmlFor="password" className="text-base font-medium">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className="flex-1 bg-white appearance-none rounded-none relative block w-full px-3 py-2 placeholder-darkblue text-gray-900 rounded-b-md focus:outline-none focus:ring-lightgreen focus:border-lightgreen focus:z-10 sm:text-sm"
                    placeholder="Enter password"
                  />
                </div>

                <IoMdEyeOff
                  role="button"
                  className="text-gray-700 mx-3 text-xl"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
              {errors && errors?.password ? (
                <div className="rounded border border-danger px-3 py-2 mt-1 text-xs bg-red-100">
                  {errors?.password[0]}
                </div>
              ) : null}
            </div>
            {errors?.message ? (
              <div className="rounded border border-danger px-3 py-2 mt-1 text-xs bg-red-100">
                {errors?.message}
              </div>
            ) : null}
            <div className="flex items-center justify-end">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-darkblue hover:text-darkblue"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={() => history.push("/dashboard")}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-ligherdarkblue hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bg-ligherdarkblue"
              >
                {isFetchingUser ? "Authenticating..." : "Sign in"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  function onSubmit(e) {
    // e.preventDefault();
    // if (isFetchingUser) return;
    // dispatch(loginUser({ email: email, password: password }, history));
  }
}

export default Signin;
