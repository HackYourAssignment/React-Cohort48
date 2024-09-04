/* eslint-disable react/prop-types */


const Person =({person})=>{
    const firstName = person?.name?.first;
    const lastName = person?.name?.last;
    const email = person?.email;
    if (!firstName || !lastName || !email) {
        return <p>Loading...</p>;
      }
      return (
        <ul>
          <li>First name: {firstName}</li>
          <li>Last name: {lastName}</li>
          <li>Email: {email}</li>
        </ul>
      );
    };
export default Person;