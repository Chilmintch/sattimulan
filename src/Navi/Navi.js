import React from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavItem,
  NavLink,
  Nav,
} from "reactstrap";
import SignOut from "../Auth/SignOut";
import SignIn from "../Auth/SignIn";
import "./Navi.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import Logo from "../Logo/sirket_araba_otomobil_car_auto.png";

const Navi = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <Navbar className="Navi__page" color="light" expand="md" light>
        <NavbarBrand href="/">
          <img
            src={Logo}
            alt="logo"
            style={{ width: "50px", height: "50px", marginTop:"2px" }}
          />SattımUlan.com
        </NavbarBrand>
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <div className="Navi__ads_add">
              <NavItem className="Navi__addItems">
                <NavLink href="/addItem">Ürün Ekle</NavLink>
              </NavItem>
            </div>

            <div className="Navi__button">
              {user ? <SignOut /> : <SignIn />}
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navi;
