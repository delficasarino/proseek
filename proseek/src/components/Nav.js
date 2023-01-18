import { NavLink } from "react-router-dom";

function Nav({ links }) {
  return (
    <nav>
      {links.map((link, i) => (
        <NavLink key={i} to={link.url}>
          {link.title}
        </NavLink>
      ))}
    </nav>
  );
}

export default Nav;
