import { useContext } from "react";
import { AuthContext } from "../AuthContext";

export default function ProfilePage() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user.name}</p>
      <p>Here you could show more info </p>
    </div>
  );
}
