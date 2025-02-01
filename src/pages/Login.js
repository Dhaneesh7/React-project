 import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      setUser({ email });
      navigate("/");
    } else {
      alert("Invalid login details!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="p-6 border rounded" onSubmit={handleLogin}>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          className="border p-2 w-full mb-2"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border p-2 w-full mb-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-green-500 text-white px-4 py-2 w-full">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
