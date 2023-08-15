import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

/* Components ---------------------------*/
import Inset from "@/Common/PagesLayout/Inset";
import SubmissionList from "./SubmissionList";
import Form from "./Form";

const Contact = () => {
    const [submissions, submissionsUpdate] = useState([]);

    const getSubmissions = async () => {
        const { data } = await axios.get("http://localhost:4059/submissions");
        submissionsUpdate(data);
    };
    //when compenent mounts
    useEffect(() => {
        getSubmissions();
    }, []);

    return (
        <ContactStyled className="Contact">
            <Inset>
                <h1>Contact</h1>
                <Form getSubmissions={getSubmissions} />
                <SubmissionList submissions={submissions} />
            </Inset>
        </ContactStyled>
    );
};

export default Contact;

const ContactStyled = styled.div``;
