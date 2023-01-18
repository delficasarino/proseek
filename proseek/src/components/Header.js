import { Link } from "react-router-dom";
import "../styles/Header.css";
import Nav from "./Nav";
import logo from "../assets/logo.png";

function Header() {
  return (
    <Header>
      <section id="mobile" className="df rw wp jcc aic">
        <Link to="/" className="logo">
          <img src={logo} alt="Proseek Argentina" />
        </Link>
        <button>
          <i class="fa-solid fa-bars-sort"></i>
          <i class="fa-solid fa-xmark"></i>
        </button>
        <Nav
          links={[
            { url: "/business", title: "Unidad de Negocio" },
            { url: "/logistics", title: "Logística" },
            { url: "/services", title: "Servicios" },
            { url: "/supplying", title: "Abastecimiento" },
            { url: "/contact", title: "Contacto" },
          ]}
        />
      </section>
    </Header>
  );
}

export default Header;
