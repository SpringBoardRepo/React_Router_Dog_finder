
import { Link } from "react-router-dom";


function SelectColor({ hex, color, history }) {

    if (!hex) {
        history.push("/colors")
    }

    return (
        <div style={{ backgroundColor: hex }}>
            <h2>This is a {color} </h2>
            <h3> Isn't it Beautiful</h3>
            <p>
                <Link to="/">Go back</Link>
            </p>
        </div>
    )

}


export default SelectColor;