import { useState } from "react";
import { useHistory } from "react-router-dom"


function AddNewColor({ addColor }) {

    const [form, updateForm] = useState({ name: "", hex: '#ffffff' });
    const history = useHistory();


    const handleChange = (e) => {
        const { name, value } = e.target;
        updateForm(f => ({ ...f, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        addColor({ [form.name]: form.hex });
        history.push("/colors");
    }

    const { name, hex } = form;
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="name">Color Name</label>
                    <input
                        id="name"
                        name="name"
                        value={name}
                        placeholder="Enter a color Name"
                        onChange={handleChange}
                    /></div>
                <div>
                    <label htmlFor="name">Color Value</label>
                    <input
                        type="color"
                        id="hex"
                        name="hex"
                        value={hex}
                        onChange={handleChange}
                    />
                </div>
                <input type="Submit" value="Add this color" readOnly />
            </form>
        </div>
    )
}



export default AddNewColor;