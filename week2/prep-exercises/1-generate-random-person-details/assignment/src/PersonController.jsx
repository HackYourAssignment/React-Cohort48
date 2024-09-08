import { useState } from "react";
import Person from "./Person";
import './PersonController.css';

const PersonController = () => {
  const [person, setPerson] = useState(null);
  const [clicked, setClicked] = useState(false);

  const getPerson = async () => {
    try {
      const response = await fetch("https://www.randomuser.me/api?results=1");
      const data = await response.json();
      setPerson(data.results[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
    }
    getPerson();
  };

  return (
    <div className="container">
      <button onClick={handleClick}>
        {clicked ? "Get New Person" : "Click me"}
      </button>
      {person && <Person person={person} />}
    </div>
  );
};

export default PersonController;

