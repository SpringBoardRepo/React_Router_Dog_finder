
import { Link } from "react-router-dom"

function Colors({ colors }) {

    console.log(colors);
    const colorLinks = colors.map(color => (
        <li key={color}>
            <Link to={`/colors/${color}`}>{color}</Link>
        </li>
    ))
    return (
        <div>
            <header>
                <h1>Welcome To Color Factory </h1>
                <Link to="/colors/new">Add a New Color</Link>
            </header>
            <p>Please Select a color</p>
            {colorLinks}
        </div>
    )
}


export default Colors;