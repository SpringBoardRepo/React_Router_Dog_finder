import { Link } from "react-router-dom"

function Dogs({ name }) {
    return (
        <div>
            <ul>
                <li>
                    <Link to={`/${name}`}></Link>
                </li>
            </ul>

        </div>
    )
}


export default Dogs;