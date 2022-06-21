import React from "react";
import { Card, CardBody, CardTitle, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./AutoItem.css"

const AutoItem = (props) => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <Card className="AutoItem__card" body outline>
        <CardBody className="AutoItem__cardBody">
          <img src={props.imageURL} alt="Card image cap" className="AutoItem__image" />
          <div className="AutoItem__div1">
            <CardTitle tag="h4">{props.brand}</CardTitle>
          </div>
          <div className="AutoItem__div2">
            <p>{props.model}</p>
            <p>{props.year} TL</p>
            <p>{props.price}</p>
            <p>{props.place}</p>
            <p>{props.kilometer}</p>
            <p>{props.gearType}</p>
            <p>{props.fuelType}</p>
            <p>{props.caseType}</p>
            <p>{props.engineCapacity}</p>
            <p>{props.title}</p>
          </div>
          <Button color="success" >
          {user ? (
            <Link className="AutoItem__button" to="/chat">Mesaj Gönder</Link>
            ) : (
              <div>
                <p>Lütfen Giriş yapınız</p>
              </div>
            )}
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default AutoItem;
