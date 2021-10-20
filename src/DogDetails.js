import { Link } from "react-router-dom"
import "./DogDetails.css";
function DogDetails({ dog }) {

    return (
        <div className="row DogDetails">
            <div className="col d-flex flex-column align-items-center">
                <img src={dog.src} />
                <h3>{dog.name}</h3>
                <h4>{dog.age}</h4>
                <ul> {dog.facts.map((fact, i) => (
                    <li key={i}>{fact}</li>
                ))}</ul>
                <Link to="/dogs">Go Back!!</Link>
            </div>
        </div>
    )
}


export default DogDetails