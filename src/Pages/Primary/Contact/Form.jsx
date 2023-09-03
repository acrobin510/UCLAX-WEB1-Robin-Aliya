import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import axios from "axios";

/* Components ---------------------------*/
import Checkbox from "./Checkboxes";

/* Data ---------------------------*/
import { staffData } from "../Staff/staffData";

const Form = ({ getSubmissions }) => {
    //NAME
    const [inputName, inputNameUpdate] = useState("");
    /* (e) means event object ---------------------------*/
    const inputNameOnChange = (e) => {
        const theValue = e.target.value;
        console.log({ theValue });
        inputNameUpdate(theValue);
    };

    //EMAIL
    const [inputEmail, inputEmailUpdate] = useState("");
    /* (e) means event object ---------------------------*/
    const inputEmailOnChange = (e) => {
        const theValue = e.target.value;
        console.log({ theValue });
        inputEmailUpdate(theValue);
    };

    //Message
    const [inputMessage, inputMessageUpdate] = useState("");
    /* (e) means event object ---------------------------*/
    const inputMessageOnChange = (e) => {
        const theValue = e.target.value;
        console.log({ theValue });
        inputMessageUpdate(theValue);
    };

    //Checkboxes
    const [checked, checkedUpdate] = useState([]);

    const checkedOnChange = (e) => {
        const theValue = e.target.id;
        if (e.target.checked) {
            const exists = checked.find((c) => c === theValue);
            if (!exists) {
                checkedUpdate([...checked, theValue]);
            }
        } else {
            const filtered = checked.filter((c) => c !== theValue);
            checkedUpdate(filtered);
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const postData = {
            id: uuidv4(),
            name: inputName,
            email: inputEmail,
            message: inputMessage,
            checked: checked,
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
                    placeholder="Your Name"
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
                    placeholder="Your Email"
                />
            </div>
            {/* DRINKS*/}
            <div className="control-group">
                <label className="l1" htmlFor="drinks">
                    Drinks
                </label>
                <div className="drink">
                    <input
                        type="checkbox"
                        id="green-milk-tea"
                        onChange={checkedOnChange}
                        className="check"
                    />
                    Green Milk Tea
                </div>
                <br />
                <div className="drink">
                    <input
                        type="checkbox"
                        id="black-milk-tea"
                        onChange={checkedOnChange}
                        className="check"
                    />
                    Black Milk Tea
                </div>
                <br />
                <div className="drink">
                    <input
                        type="checkbox"
                        id="coconut-milk-tea"
                        value={checked}
                        onChange={checkedOnChange}
                        className="check"
                    />
                    Coconut Milk Tea
                </div>
                <br />
                <div className="drink">
                    <input
                        type="checkbox"
                        id="taro-milk-tea"
                        value={checked}
                        onChange={checkedOnChange}
                        className="check"
                    />
                    Taro Milk Tea
                </div>
                <br />
                <div className="drink">
                    <input
                        type="checkbox"
                        id="thai-milk-tea"
                        value={checked}
                        onChange={checkedOnChange}
                        className="check"
                    />
                    Thai Milk Tea
                </div>
                <br />
                <div className="drink">
                    <input
                        type="checkbox"
                        id="honey-green-tea"
                        value={checked}
                        onChange={checkedOnChange}
                        className="check"
                    />
                    Honey Green Tea
                </div>
                <br />
                <div className="drink">
                    <input
                        type="checkbox"
                        id="black-tea"
                        value={checked}
                        onChange={checkedOnChange}
                        className="check"
                    />
                    Black Tea
                </div>
                <br />
                <div className="drink">
                    <input
                        type="checkbox"
                        id="lychee-green-tea"
                        value={checked}
                        onChange={checkedOnChange}
                        className="check"
                    />
                    Lychee Green Tea
                </div>
            </div>
            {/* Toppings */}
            <div className="control-group">
                <label className="l1" htmlFor="toppings">
                    Add-Ins
                </label>
                <div className="topping">
                    <input
                        type="checkbox"
                        id="boba-pearls"
                        onChange={checkedOnChange}
                        className="check"
                    />
                    Boba Pearls
                </div>
                <br />
                <div className="topping">
                    <input
                        type="checkbox"
                        id="lychee-jelly"
                        onChange={checkedOnChange}
                        className="check"
                    />
                    Lychee Jelly
                </div>
                <br />
                <div className="topping">
                    <input
                        type="checkbox"
                        id="custard-pudding"
                        onChange={checkedOnChange}
                        className="check"
                    />
                    Custard Pudding
                </div>
                <br />
                <div className="topping">
                    <input
                        type="checkbox"
                        id="rainbow-jelly"
                        onChange={checkedOnChange}
                        className="check"
                    />
                    Rainbow Jelly
                </div>
                <br />
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
                    placeholder="50% sweetness..."
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
        font-size: 20px;
        margin-bottom: 5px;
        color: #ffa8db;
    }

    input,
    textarea {
        font-size: 15px;
        padding: 10px;
        width: 100%;
        background-color: #eee;
        border: 0px;

        &:focus {
            background-color: white;
        }
    }
    textarea {
        height: 150px;
    }

    .check {
        width: 20px;
        position: relative;
    }

    .drink,
    .topping {
        color: #3c2415;
        position: relative;
        display: inline-block;
        margin-bottom: 5px;
    }

    button {
        background-color: #8dd4ef;
        padding: 10px 5px;
        color: white;
        width: 150px;
        border: none;
        outline: none;

        cursor: pointer;

        &:hover,
        &:focus {
            background-color: #64cbf5;
        }

        &:active {
            background-color: #ffa8db;
        }
    }
`;
