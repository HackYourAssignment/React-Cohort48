// src/components/PersonController.jsx
import { useState, useEffect } from "react";
import Person from "./Person";
const url = "https://www.randomuser.me/api?results=1";

function PersonController() {
  const [person, setPerson] = useState(null);

  const getPerson = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const personData = destructurePerson(data);
    setPerson(personData);
  };
  const destructurePerson = (data) => {
    // Extract first name, last name, and email from API response
    const personData = {
      firstName: data.results[0].name.first,
      lastName: data.results[0].name.last,
      email: data.results[0].email,
    };
    return personData;
  };

  useEffect(() => {
    getPerson();
  }, []);

  return <Person person={person} />;
}

export default PersonController;
