
import './App.css';
import { BrowserRouter } from "react-router-dom"
import Dogs from './Dogs';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Dogs name={ } />
      </BrowserRouter>
    </div>
  );
}
App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: "./Images/whiskey.jpg",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: "./Images/duke.jpg",
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: "./Images/perry.jpg",
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: "./Images/tubby.jpg",
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}
export default App;