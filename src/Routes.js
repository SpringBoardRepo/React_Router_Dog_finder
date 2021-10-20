import { Switch, Route, Redirect } from "react-router-dom"

import DogList from "./DogList";
import FilterDog from "./FilterDog";

function Routes({ dogs }) {

    return (
        <Switch>
            <Route exact path="/dogs">
                <DogList dogs={dogs} />
            </Route>
            <Route exact path="/dogs/:name">
                <FilterDog dogs={dogs} />
            </Route>
            <Redirect to="/dogs"> </Redirect>
        </Switch>
    )
}


export default Routes;