import { Button, Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const routes = [
  { to: "/store/inicio", text: "Inicio" },
  { to: "/store/certificates", text: "Cerificado" },
  { to: "/store/proyectos", text: "Proyectos" },
];

export const NavBar = () => {
  return (
    <Navbar>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {routes.map(({ to, text }) => (
          <NavbarItem key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                isActive ? styles.active : styles.inactive
              }
            >
              {text}
            </NavLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={NavLink}
            color="primary"
            to="/store/contact"
            variant="flat"
          >
            Contactar
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
