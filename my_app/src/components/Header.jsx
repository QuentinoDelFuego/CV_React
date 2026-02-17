import { NavLink} from "react-router-dom";

export default function Header() {
  const linkClass = ({isActive}) => (isActive ? "active" : undefined);

  return (
    <header>
      <nav>
        <NavLink to="/">About me</NavLink>
        <NavLink to="/skills">My skills</NavLink>
        <NavLink to="/experiences">My past experiences</NavLink>
        <NavLink to="/contact">How to contact me</NavLink>
      </nav>
    </header>
  )
}