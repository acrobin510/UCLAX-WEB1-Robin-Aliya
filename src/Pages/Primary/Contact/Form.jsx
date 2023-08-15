import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import axios from "axios";

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

    //NAME
    const [inputMessage, inputMessageUpdate] = useState(
        "Will the real shady please stand up."
    );
    /* (e) means event object ---------------------------*/
    const inputMessageOnChange = (e) => {
        const theValue = e.target.value;
        console.log({ theValue });
        inputMessageUpdate(theValue);
    };

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
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={inputName}
                    onChange={inputNameOnChange}
                />
            </div>

            {/* Email */}
            <div className="control-group">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    value={inputEmail}
                    onChange={inputEmailOnChange}
                />
            </div>

            {/* Message */}
            <div className="control-group">
                <label htmlFor="message">Message</label>
                <input
                    type="text"
                    id="message"
                    value={inputMessage}
                    onChange={inputMessageOnChange}
                />
            </div>

            <button type="submit">Send</button>
        </FormStyled>
    );
};

export default Form;

const FormStyled = styled.form`
    .control-group {
        margin-bottom: 20px;
    }

    label {
        font-weight: bold;
        display: block;
        margin-bottom: 5px;
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
