
import './App.css'
import PersonController from './components/PersonController';
function App() {
// create person state
// create getPerson function, the function purpose
// 1. fetch data from the API
// 2. set the person state with the fetched data as JSON
// useEffect to call getPerson function when the component is mounted
// render the person state in the JSX and if the person state is null, render a loading message

  return (
    <>
   <PersonController />
    </>
  )
}

export default App
