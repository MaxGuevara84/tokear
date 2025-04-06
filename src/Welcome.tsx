import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

export const Welcome = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Acá podés validar email/pass o conectarte a una API
    if (email && password) {
      navigate("/");
    } else {
      alert("Completa los campos");
    }
  };
  return (
    <div className="fondo-bienvenidos bn">
    <div className="text-center absolute top-10 text-white text-4xl font-bold">
      Te damos la bienvenida a{" "}
      <span className="text-orange-500">tokear</span>
    </div>

    <div className="login-container">
      <h1 className="text-white text-3xl mb-6 font-bold">Iniciar sesión</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input-style"
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input-style mt-4"
      />
      <button onClick={handleLogin} className="button mt-6">
        Ingresar
      </button>

     {/* Texto adicional centrado */}
<div className="w-full text-center mt-6">
  <p className="text-orange-500 text-sm cursor-pointer hover:underline">
    ¿Olvidaste tu contraseña?
  </p>
  <p className="text-white text-sm mt-4">
    ¿No tenés cuenta?{" "}
    <span className="text-orange-500 cursor-pointer hover:underline">
      Registrate
    </span>
  </p>
</div>
    </div>
  </div>
  );
};
