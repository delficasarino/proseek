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
            { url: "/Business", title: "Unidad de Negocio" },
            { url: "/Logistics", title: "Logística" },
            { url: "/Services", title: "Servicios" },
            { url: "/Supplying", title: "Abastecimiento" },
            { url: "/Contact", title: "Contacto" },
          ]}
        />
      </section>
    </Header>
  );
}

export default Header;
