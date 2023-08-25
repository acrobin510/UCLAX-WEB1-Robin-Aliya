import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import axios from "axios";

/* Components ---------------------------*/
import Drinks from "./Drinks";

/* Data ---------------------------*/
import { staffData } from "../Staff/staffData";

const Form = ({ getSubmissions }) => {
    //NAME
    const [inputName, inputNameUpdate] = useState("Slim shady");
    /* (e) means event object ---------------------------*/
    const inputNameOnChange = (e) => {
        const theValue = e.target.value;
        console.log({ theValue });
        inputNameUpdate(theValue);
    };

    //EMAIL
    const [inputEmail, inputEmailUpdate] = useState("Slim@shady.com");
    /* (e) means event object ---------------------------*/
    const inputEmailOnChange = (e) => {
        const theValue = e.target.value;
        console.log({ theValue });
        inputEmailUpdate(theValue);
    };

    //Message
    const [inputMessage, inputMessageUpdate] = useState(
        "Will the real shady please stand up."
    );
    /* (e) means event object ---------------------------*/
    const inputMessageOnChange = (e) => {
        const theValue = e.target.value;
        console.log({ theValue });
        inputMessageUpdate(theValue);
    };

    /* Checkboxes Method 1 ---------------------------*/

    const handleChange = (id) => {
        setCheckboxes((prev) => {
            if (drink.id === id) {
                return { ...drink, check: !drink.check };
            }
        });
    };

    const renderCheckboxes = () => {
        return staffData.map((drink) => (
            <div className="options">
                <div className="drink" key={drink.id}>
                    <div className="drinkInput">
                        <input
                            type="checkbox"
                            value={drink.check}
                            id={drink.name}
                        />
                    </div>
                    <label className="drink"> {drink.name} </label>
                    <br />
                    <div className="toppings">{}</div>
                </div>
            </div>
        ));
    };

    const renderOptions = () => {
        return staffData.map((drink) => {
            if (drink.check) {
                return <span>'topping'</span>;
            } else {
                return null;
            }
        });
    };
    /* Checkboxes Method 2 ---------------------------*/
    /*const [checkedState, setCheckedState] = useState(
        new Array(staffData.length).fill(false)
    );

    const handleOnChange = (position) => {
        const updateCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updateCheckedState);

        const showOptions = updateCheckedState.filter((currentState) => {
            if (currentState === true) return "topping";
        }, null);
    };
*/
    const onSubmit = async (e) => {
        e.preventDefault();

        const postData = {
            id: uuidv4(),
            name: inputName,
            email: inputEmail,
            message: inputMessage,
        };

        await axios.post("http://localhost:4059/submissions", postData);
        getSubmissions();
    };

    return (
        <FormStyled className="Form" onSubmit={onSubmit}>
            {/* Name */}
            <div className="control-group">
                <label className="l1" htmlFor="name">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    value={inputName}
                    onChange={inputNameOnChange}
                />
            </div>

            {/* Email */}
            <div className="control-group">
                <label className="l1" htmlFor="email">
                    Email
                </label>
                <input
                    type="text"
                    id="email"
                    value={inputEmail}
                    onChange={inputEmailOnChange}
                />
            </div>
            {/* DRINKS*/}
            <div className="control-group">
                <label className="l1" htmlFor="drinks">
                    Drinks
                </label>
                {/*<ul className="drinks-list">
                    {staffData.map(({ name }, index) => {
                        return (
                            <li key={index}>
                                <div className="drinks-list-item">
                                    <input
                                        type="checkbox"
                                        id={name}
                                        name={name}
                                        checked={checkedState[index]}
                                        onChange={() => handleOnChange(index)}
                                    />
                                    <label htmlFor={name}>{name}</label>
                                </div>
                            </li>
                        );
                    })}
                </ul>*/}
                {renderCheckboxes()}
                {renderOptions()}
            </div>

            {/* Message */}
            <div className="control-group">
                <label className="l1" htmlFor="message">
                    Special Instructions
                </label>
                <input
                    type="text"
                    id="message"
                    value={inputMessage}
                    onChange={inputMessageOnChange}
                />
            </div>
            <p></p>
            <button type="submit">Send</button>
        </FormStyled>
    );
};

export default Form;

const FormStyled = styled.form`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));

    .control-group {
        margin-bottom: 20px;
        margin-right: 20px;
    }

    .l1 {
        font-weight: bold;
        display: block;
        margin-bottom: 5px;
        color: #3c2415;
    }

    input,
    textarea {
        font-size: 20px;
        padding: 10px;
        width: 100%;
        background-color: #eee;
        border: solid 1 px #999;

        &:focus {
            background-color: white;
        }
    }
    textarea {
        height: 150px;
    }

    button {
        background-color: teal;
        padding: 10px 5px;
        color: white;
        width: 150px;
        border: none;
        outline: none;

        cursor: pointer;

        &:hover,
        &:focus {
            background-color: #015353;
        }

        &:active {
            background-color: #002020;
        }
    }
`;
