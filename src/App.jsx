import {useState} from 'react';
import './App.css';
import Fruit from "./components/Fruit";
import Input from "./components/Input";


function App() {
    const [resetCounter, setResetCounter] = useState(false);
    const [formState, setFormState] = useState({
        firstname: "",
        lastname: "",
        age: 0,
        zipcode: "",
        deliveryfrequency: "Select...",
        timeframe: "Day",
        remarks: "",
        conditions: false,
        aardbei: 0,
        banaan: 0,
        appel: 0,
        kiwi: 0
    });

    function handleChange(e) {
        const changedFieldName = e.target.name;
        const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    const handleReset = () => {
        setResetCounter(true);
    };

    const handleResetComplete = () => {
        setResetCounter(false);
    };

    return (
        <>
            <section>
                <h1>Fruitmand bezorgservice</h1>
                <Fruit
                    symbol={"🍓"}
                    title="Aardbeien"
                    name="aardbei"
                    value={formState.aardbei}
                    reset={resetCounter}
                    resetComplete={handleResetComplete}
                    onChange={handleChange}
                />
                <Fruit
                    symbol={"🍌"}
                    title="Bananen"
                    name="banaan"
                    value={formState.banaan}
                    reset={resetCounter}
                    resetComplete={handleResetComplete}
                    onChange={handleChange}
                />
                <Fruit
                    symbol={"🍏"}
                    title="Appels"
                    name="appel"
                    value={formState.appel}
                    reset={resetCounter}
                    resetComplete={handleResetComplete}
                    onChange={handleChange}
                />
                <Fruit
                    symbol={"🥝"}
                    title="Kiwi's"
                    name="kiwi"
                    value={formState.kiwi}
                    reset={resetCounter}
                    resetComplete={handleResetComplete}
                    onChange={handleChange}
                />
                <button type="button" onClick={handleReset}>
                    Reset
                </button>
            </section>

            <form onSubmit={handleSubmit}>

                <label>
                    Voornaam:
                    <Input
                        type="text"
                        name="firstname"
                        value={formState.firstname}
                        handleChange={handleChange}
                    />
                </label>
                <label>
                    Achternaam:
                    <Input
                        type="text"
                        name="lastname"
                        value={formState.lastname}
                        handleChange={handleChange}
                    />
                </label>
                <label>
                    Leeftijd:
                    <Input
                        type="text"
                        name="age"
                        value={parseInt(formState.age)}
                        handleChange={handleChange}
                    />
                </label>
                <label>
                    Postcode:
                    <Input
                        type="text"
                        name="zipcode"
                        value={formState.zipcode}
                        handleChange={handleChange}
                    />
                </label>
                <label>
                    Bezorgfrequentie:
                </label>
                <select
                    name="deliveryfrequency"
                    value={formState.deliveryfrequency}
                    onChange={handleChange}>
                    <option value="Select...">Select...</option>
                    <option value="iedere week">iedere week</option>
                    <option value="om de week">om de week</option>
                    <option value="iedere maand">iedere maand</option>
                </select>
                <div className="timeframe-radio">
                    <label>
                        <Input
                            type="radio"
                            name="timeframe"
                            value="Day"
                            checked={formState.timeframe === "Day"}
                            onChange={handleChange}
                        />
                        Overdag
                    </label>
                    <label>
                        <Input
                            type="radio"
                            name="timeframe"
                            value="Night"
                            checked={formState.timeframe === "Night"}
                            onChange={handleChange}
                        />
                        's-Avonds
                    </label>
                </div>
                <label className="text-area">
                    Opmerking:
                    <textarea
                        name="remarks"
                        rows="5"
                        cols="50"
                        value={formState.remarks}
                        onChange={handleChange}
                        placeholder="Plaats hier uw aanvullende opmerkingen"
                    >
                    </textarea>
                </label>
                <label>
                    <Input
                        type="checkbox"
                        name="conditions"
                        checked={formState.conditions}
                        handleChange={handleChange}
                    />
                    Akkoord met de algemene voorwaarden.
                </label>
                <button type="submit">
                    Verzend
                </button>
            </form>
        </>
    );
}

export default App;
