import styled from "styled-components";

/* Components ---------------------------*/
import AccoladesList from "./Accolades/AccoladesList";

const StaffBio = ({ member }) => {
    return (
        <StaffBioStyled className="StaffBio">
            <div className="cost">
                <b>Small/Large:</b> {member.cost}
            </div>
            <AccoladesList member={member} />
        </StaffBioStyled>
    );
};

export default StaffBio;

const StaffBioStyled = styled.div`
    padding: 20px;
    font-size: 14px;

    .cost {
        font-size: 16px;
    }
`;
