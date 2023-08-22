import styled from "styled-components";

/* Components ---------------------------*/
import StaffBio from "./StaffBio";

const StaffMember = ({ member }) => {
    return (
        <StaffMemberStyled className="StaffMember">
            <img src={member.image} alt={member.name} />
            <h3> {member.name} </h3>
            <StaffBio member={member} />
        </StaffMemberStyled>
    );
};

export default StaffMember;

const StaffMemberStyled = styled.div`
    background-color: #c49a6c;

    img {
        width: 100%;
        display: block;
    }

    h3 {
        font-size: 30px;
        color: white;
        background-color: #3c2415;
        margin: 0px;
        padding: 5px 10px;
        text-align: center;
    }
`;
