import styled from "styled-components";

const Description = ({ topping }) => {
    return (
        <DescriptionStyled className="Description">
            <div>{topping.accolades}</div>
        </DescriptionStyled>
    );
};

export default Description;

const DescriptionStyled = styled.div`
    padding: 10px;
`;
