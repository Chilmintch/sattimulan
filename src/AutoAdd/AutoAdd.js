import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, Card } from "reactstrap";
import DUMMY_DATA from "../Data/Data";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./AutoAdd.css";

const ProductAdd = () => {
  const [data, setData] = useState([]);
  const [user] = useAuthState(auth);
  const [form, setForm] = useState({
    id: Math.random().toString(),
    price: "",
    place: "",
    brand: "",
    model: "",
    year: "",
    kilometer: "",
    gearType: "",
    fuelType: "",
    caseType: "",
    engineCapacity: "",
    title: "",
    imageURL: "",
  });

  const saveItem = () => {
    if (
      form.price === "" ||
      form.place === "" ||
      form.brand === "" ||
      form.model === "" ||
      form.year === "" ||
      form.kilometer === "" ||
      form.gearType === "" ||
      form.fuelType === "" ||
      form.caseType === "" ||
      form.engineCapacity === "" ||
      form.title === "" ||
      form.imageURL === ""
    ) {
      alert("Tum alanlari doldurunuz");
      return;
    }

    data.push({
      ...form,
    });

    localStorage.setItem("data", JSON.stringify(data));

    setForm({
      price: "",
      place: "",
      brand: "",
      model: "",
      year: "",
      kilometer: "",
      gearType: "",
      fuelType: "",
      caseType: "",
      engineCapacity: "",
      title: "",
      imageURL: "",
    });
  };

  useEffect(() => {
    getItem();
  }, []);

  const getItem = () => {
    const localData = localStorage.getItem("data") ?? [];
    if (localData.length === 0) {
      localData.push(...DUMMY_DATA);
      setData(localData);
    } else {
      setData(JSON.parse(localData));
    }
  };

  return (
    <div className="AutoAdd__page">
      {user ? (
        <Card>
          <Form>
            <FormGroup>
              <Label>Marka</Label>
              <Input
                type="select"
                name="text"
                id="text"
                placeholder="Enter brand"
                onChange={(event) =>
                  setForm({ ...form, brand: event.target.value })
                }
                value={form.brand}
              >
                <option>toyota</option>
                <option>mercedes</option>
                <option>bmw</option>
                <option>audi</option>
                <option>nissan</option>
                <option>fiat</option>
                <option>mitsubishi</option>
                <option>Diğer</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label>Fiyat</Label>
              <Input
                type="number"
                name="year"
                id="year"
                placeholder="Enter price"
                onChange={(event) =>
                  setForm({ ...form, price: event.target.value })
                }
                value={form.price}
              />
            </FormGroup>
            <FormGroup>
              <Label>Adres</Label>
              <Input
                type="textarea"
                name="text"
                id="text"
                placeholder="Enter place"
                onChange={(event) =>
                  setForm({ ...form, place: event.target.value })
                }
                value={form.place}
              />
            </FormGroup>
            <FormGroup>
              <Label>Model</Label>
              <Input
                type="text"
                name="text"
                id="text"
                placeholder="Enter model"
                onChange={(event) =>
                  setForm({ ...form, model: event.target.value })
                }
                value={form.model}
              />
            </FormGroup>
            <FormGroup>
              <Label>Yıl</Label>
              <Input
                type="number"
                name="year"
                id="year"
                onChange={(event) =>
                  setForm({ ...form, year: event.target.value })
                }
                value={form.year}
              />
            </FormGroup>
            <FormGroup>
              <Label>Kilometre</Label>
              <Input
                type="number"
                name="year"
                id="year"
                onChange={(event) =>
                  setForm({ ...form, kilometer: event.target.value })
                }
                value={form.kilometer}
              />
            </FormGroup>
            <FormGroup>
              <Label>Vites Tipi</Label>
              <Input
                type="select"
                name="text"
                id="text"
                onChange={(event) =>
                  setForm({ ...form, gearType: event.target.value })
                }
                value={form.gearType}
              >
                <option>Düz</option>
                <option>Otomatik</option>
                <option>Yarı Otomatik</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label>Kasa Tipi</Label>
              <Input
                type="select"
                name="text"
                id="text"
                onChange={(event) =>
                  setForm({ ...form, caseType: event.target.value })
                }
                value={form.caseType}
              >
                <option>Cabrio</option>
                <option>Coupe</option>
                <option>Hatchback/3</option>
                <option>Hatchback/5</option>
                <option>Jip</option>
                <option>MPV</option>
                <option>Pick-up</option>
                <option>Roadster</option>
                <option>Sedan</option>
                <option>Station wagon</option>
                <option>SUV</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label>Yakıt Tipi</Label>
              <Input
                type="select"
                name="text"
                id="text"
                onChange={(event) =>
                  setForm({ ...form, fuelType: event.target.value })
                }
                value={form.fuelType}
              >
                <option>Benzin</option>
                <option>Dizel</option>
                <option>Elektrik</option>
                <option>Hibrit</option>
                <option>LPG Ve Benzin</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label>Motor Hacmi</Label>
              <Input
                type="number"
                name="number"
                id="number"
                onChange={(event) =>
                  setForm({ ...form, engineCapacity: event.target.value })
                }
                value={form.engineCapacity}
              />
            </FormGroup>
            <FormGroup>
              <Label>İlan Başlığı</Label>
              <Input
                type="text"
                name="text"
                id="text"
                placeholder="Enter title"
                onChange={(event) =>
                  setForm({ ...form, title: event.target.value })
                }
                value={form.title}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="textarea"
                name="text"
                id="text"
                placeholder="Enter image URL"
                onChange={(event) =>
                  setForm({ ...form, imageURL: event.target.value })
                }
                value={form.imageURL}
              />
            </FormGroup>

            <Button color="success" onClick={saveItem}>
              EKLE
            </Button>
          </Form>
        </Card>
      ) : (
        <div>
          <p>Lütfen Giriş yapınız</p>
        </div>
      )}
    </div>
  );
};

export default ProductAdd;
