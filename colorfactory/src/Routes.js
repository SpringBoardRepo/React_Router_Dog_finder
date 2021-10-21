
import { useState } from "react";
import { Redirect, Route, Switch } from "react-router";
import Colors from "./Colors";
import SelectColor from "./SelectColor";
import AddNewColor from "./AddNewColor";
import { BrowserRouter } from "react-router-dom";



function Routes() {

    const defaultColors = ["red", "teal", "yellow", "green"]
    const [colors, updateColors] = useState(defaultColors);

    function renderCurrColors(props) {
        console.log(`PROPS ${JSON.stringify(props.match.params)}`);
        const { color } = props.match.params;
        console.log(colors[color])
        const hex = colors[color];
        return <SelectColor {...props} hex={hex} color={color} />
    }

    function handleColor(newcolorObj) {
        updateColors(previousColors => ([...previousColors, ...newcolorObj]))
    }
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/colors'>
                    <Colors colors={colors} />
                </Route>

                <Route exact path="/colors/new" >
                    <AddNewColor addColor={handleColor} />
                </Route>
                <Route path="/colors/:color" render={renderCurrColors} />

                <Redirect to="/colors"> </Redirect>
            </Switch>
        </BrowserRouter>
    )
}


export default Routes;