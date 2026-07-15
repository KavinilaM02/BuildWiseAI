import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0B1120] px-6">

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

        <h1 className="text-center text-3xl font-bold text-white">
          Welcome Back
        </h1>

        <p className="mt-3 text-center text-gray-400">
          Login to BuildWise AI
        </p>

        <input
          type="email"
          placeholder="Email"
          className="mt-8 w-full rounded-xl bg-[#111827] p-4 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          className="mt-4 w-full rounded-xl bg-[#111827] p-4 text-white"
        />

        <button
          className="mt-6 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 font-bold text-white"
        >
          Login
        </button>

        <Link
          to="/"
          className="mt-6 block text-center text-cyan-400"
        >
          ← Back to Home
        </Link>

      </div>

    </div>
  );
};

export default Login;