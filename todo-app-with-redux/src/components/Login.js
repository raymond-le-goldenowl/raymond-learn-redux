import { useState } from "react";
export default function Login({ login }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSUbmit(e) {
    e.preventDefault();
    login(email, password);
  }
  return (
    <form onSubmit={handleSUbmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}
