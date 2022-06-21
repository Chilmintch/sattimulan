import React,{useState,useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navi from "./Navi/Navi";
import DUMMY_DATA from "./Data/Data"
import AutoList from "./Auto/AutoList"
import AutoAdd from "./AutoAdd/AutoAdd"
import Chat from "./SendMessage/Chat";

const App = () => {
  const [autos, setAutos] = useState([]) 
  
  useEffect(() => {
    getItem();
  }, []);

  const getItem = () => {
    const localData = localStorage.getItem("data") ?? [];
    if(localData.length===0){
      localData.push(...DUMMY_DATA)
      setAutos(localData);
    }else{
      setAutos(JSON.parse(localData));
    } 
  };

  return (
    <BrowserRouter>
      <Navi />
      <Routes>
        <Route path="/addItem" element={<AutoAdd/>} />
        <Route path="/" element={<AutoList items={autos}/>} />
        <Route path="/chat" element={<Chat/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
