import type React from "react";
import LoginForm from "../components/LoginForm";

const LoginPage: React.FC = () => {

  return <>
    <h1 className="text-2xl font-bold">Login</h1>

    <div className="p-7 flex justify-center">

      <LoginForm />

    </div>

  </>
}

export default LoginPage;
