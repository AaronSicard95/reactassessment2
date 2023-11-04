import { useState } from "react"
import { Card } from "reactstrap";

function AddForm(props){
    const INITIAL_STATE={type: "drinks",name: "", recipe: "", serve: ""};
    const [fData, setFData] = useState({type: "drinks",name: "", recipe: "", serve: ""});
    const [disabled, setDisabled] = useState(false);
    const [message, setMessage] = useState("Use the form to add an item");

    //keep comp up to date with form
    function handleChange(evt){
        evt.preventDefault();
        const {id, value} = evt.target;
        setFData(newFData=>({...fData,[id]: value}))
    }

    //send form data to app to post and reload with
    //upon completion reset form
    async function sub(evt){
        evt.preventDefault();
        if(Object.values(fData).every(v=>(v!==""))){
            setDisabled(true);
            await props.sub(fData);
            setMessage(`Successfully added ${fData.name} to ${fData.type}`);
            setFData(INITIAL_STATE);
            setDisabled(false);
        }else{
            alert("No value can be empty");
        }
    }

    //form for adding either kind of item
    return <Card> 
        <form onSubmit={sub} onChange={handleChange}>
        <label htmlFor="type">Type: </label>
            <select id="type" value={fData.type}>
                <option value="drinks">Drinks</option>
                <option value="snacks">Snacks</option>
            </select>
            <br/>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" value={fData.name}></input>
            <br/>
            <label htmlFor="recipe">Recipe: </label>
            <input type="text" id="recipe" value={fData.recipe}></input>
            <br/>
            <label htmlFor="serve">Serve: </label>
            <input type="text" id="serve" value={fData.serve}></input>
            <br/>
            <button disabled={disabled}>Add {fData.type}</button>
            <br/>
            <br/>
            <p>{message}</p>
        </form>
    </Card>
}

export default AddForm;