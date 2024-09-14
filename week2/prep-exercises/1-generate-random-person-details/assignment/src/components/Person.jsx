/* eslint-disable react/prop-types */

function Person({ person }) {
  // Check if person is null before rendering the details
    if (!person) {
      return null;
    }
    // Destructure the properties only if person is not null
    const { firstName, lastName, email } = person;
    return (
      <ul>
        <li>First Name: {firstName}</li>
        <li>Last Name: {lastName}</li>
        <li>Email: {email}</li>
      </ul>
    );
  }
  
  export default Person;
  