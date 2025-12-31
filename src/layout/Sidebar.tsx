import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <aside>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </aside>
  );
};
