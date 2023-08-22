import styled from "styled-components";

/* Components ---------------------------*/
import Accolade from "./Accolade";

const AccoladesList = ({ member }) => {
    return (
        <AccoladesListStyled className="AccoladesList">
            {member.accolades.map((accolade, idx) => {
                return <Accolade key={idx} accolade={accolade} />;
            })}
        </AccoladesListStyled>
    );
};

export default AccoladesList;

const AccoladesListStyled = styled.div`
    padding: 10px;
`;
