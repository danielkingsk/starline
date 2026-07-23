import { useContext, useState } from "react";
import { AuthContext } from "../AuthContext";

export default function LoginPage() {
  const [name, setName] = useState("");
  const { login } = useContext(AuthContext);
  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;
    login(name);
    console.log(name);
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          Name
          <input
            type="text"
            placeholder="Type any name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
