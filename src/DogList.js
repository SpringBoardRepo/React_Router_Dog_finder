import { Link } from "react-router-dom"
import "./Doglist.css"

function DogList({ dogs }) {
    return (
        <div className="Doglist row ">
            <h3> Hello!! Click on them for more info!!</h3>
            {dogs.map(dog => (
                <div key={dog.name} className="column">
                    < img src={dog.src} alt={dog.name} />
                    <Link to={`/dogs/${dog.name.toLowerCase()}`}><b>{dog.name}</b></Link>

                </div>
            ))}

        </div>
    )
}
export default DogList