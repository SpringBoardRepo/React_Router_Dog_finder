import { useParams } from "react-router";
import DogDetails from "./DogDetails";

function FilterDog({ dogs }) {

    const { name } = useParams();

    if (name) {

        const dog = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());
        return (
            <DogDetails dog={dog} />
        )
    }
    return null;
}



export default FilterDog;