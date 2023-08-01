import styled from "styled-components";

/* Components ---------------------------*/
import AccoladesList from "./Accolades/AccoladesList";

const StaffBio = ({ member }) => {
    return (
        <StaffBioStyled className="StaffBio">
            <div className="year">
                <b>Year Started: </b>
                {member.yearStarted}
            </div>
            <AccoladesList member={member} />
        </StaffBioStyled>
    );
};

export default StaffBio;

const StaffBioStyled = styled.div`
    padding: 20px;
    font-size: 14px;
`;
