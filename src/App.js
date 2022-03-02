import {useState} from "react";
import Data from "./Components/Data"
import Card from "./Components/Card"
import Buttons from "./Components/Buttons"
import './App.css';

function App() {

const [item, setItem]=useState(Data); //manages the state of the API

//filter through exerciseItems

const exerciseItems = [...new Set(Data.map((exercise) => exercise.bodyPart))];

  return (
    <>
      <div className="container-fluid">
        <div className="row">
        <h1 className="col-12 text-center my-3 fw-bold">Exercises</h1>
        <Buttons
          exerciseItems={exerciseItems}
        />
        <Card item={item}/>
        </div>
      </div>
    </>
  );
}

export default App;
