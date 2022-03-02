import {useState} from "react";
import Data from "./Components/Data"
import Card from "./Components/Card"
import Buttons from "./Components/Buttons"
import './App.css';

function App() {

const [item, setItem]=useState(Data); //manages the state of the API

//create a new array with just the bodypart

const exerciseCategory = [...new Set(Data.map((exercise) => exercise.bodyPart))];

// create filter for all of the Buttons

const filterItem = (currentBodyPart) => {
  const newItem = Data.filter((newValue) => {
    return newValue.bodyPart === currentBodyPart;
  })
  setItem(newItem);
}

  return (
    <>
      <div className="container-fluid">
        <div className="row">
        <h1 className="col-12 text-center my-3 fw-bold">Exercises</h1>
        <Buttons
          filterItem={filterItem}
          exerciseCategory={exerciseCategory}
          setItem={setItem}
        />
        <Card item={item}/>
        </div>
      </div>
    </>
  );
}

export default App;
