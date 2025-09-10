import type React from "react";
import { login } from "../utils/login";

// LOGIN FORM
//
// Guidelines: 
// * You have an incomplete login form.
// * You are not allowed to add any additional HTML elements.
// * You are not allowed to use refs.
//
// Tasks:
// * The login button should trigger the login() action imported above and pass required data to it.
// * Disable the login button if email is blank OR if password is under 6 letters
// * Disable the login button while login action is being performed
// * Show an error message from the login if login fails. The error message should be cleared every time user re-attemps to log in.
// * Show an alert box (native Javascript alert) if login succeeds. Investigate the login function to find out how to log in successfully.

const LoginForm: React.FC = () => {

  return <>
    <div className="w-[450px] border border-gray-300 rounded p-5">

      <div className="grid grid-cols-2 p-5">
        <label htmlFor={"email"}>Email</label>
        <input id={"email"} type={"email"} className="border border-gray-500 rounded" />
      </div>

      <div className="grid grid-cols-2 p-5">
        <label htmlFor={"password"}>Password</label>
        <input id={"password"} type={"password"} className="border border-gray-500 rounded" />
      </div>

      {/* Place login error inside this div. Show the div ONLY if there are login errors. */}
      <div className="text-red-600 p-2"></div>

      <div className="p-5 flex justify-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
      </div>

    </div>
  </>
}

export default LoginForm;
