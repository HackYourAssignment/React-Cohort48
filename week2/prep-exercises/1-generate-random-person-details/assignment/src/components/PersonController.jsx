import { useState, useEffect } from "react";
import Person from "./Person";

const url = "https://www.randomuser.me/api?results=10"; // Fetch 10 random users

function PersonController() {
  const [people, setPeople] = useState([]); // Change state to hold an array of people

  // Fetch 10 random people from the API
  const getPeople = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const peopleData = destructurePeople(data);
    setPeople(peopleData);
  };

  // Destructure the API response to extract necessary information for each person
  const destructurePeople = (data) => {
    // Map through the results to create an array of person objects
    return data.results.map((person) => ({
      firstName: person.name.first,
      lastName: person.name.last,
      email: person.email,
    }));
  };

  // Fetch people when the component mounts
  useEffect(() => {
    getPeople();
  }, []);

  return (
    <div>
      {people.map((person, index) => (
        <Person key={index} person={person} /> // Render a Person component for each person
      ))}
    </div>
  );
}

export default PersonController;
